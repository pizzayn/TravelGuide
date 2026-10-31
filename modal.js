/**
 * AETHERIA - Destination Detail Modal Module
 * Zengin ülke detayları, fotoğraf galerisi, vize gereksinimleri ve sesli sözlük.
 */

window.Aetheria = window.Aetheria || {};

window.Aetheria.Modal = (function () {
  'use strict';

  function init() {
    const DOM = window.Aetheria.UI.DOM;

    DOM.modalCloseBtn.addEventListener('click', close);
    DOM.destModalBackdrop.addEventListener('click', (e) => {
      if (e.target === DOM.destModalBackdrop) close();
    });

    DOM.modalTabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        if (tabId) switchTab(tabId);
      });
    });

    DOM.modalShareBtn.addEventListener('click', share);
  }

  function open(destId) {
    const DOM = window.Aetheria.UI.DOM;
    const State = window.Aetheria.State;
    const escapeHTML = window.Aetheria.UI.escapeHTML;
    const dest = State.getDestinationById(destId);
    if (!dest) return;

    State.set('activeModalDestId', destId);
    State.set('calcDays', 7);
    State.set('calcStyle', 'explorer');

    // Başlık Bilgileri
    DOM.modalHeroImg.src = dest.heroImage;
    DOM.modalHeroImg.alt = dest.name;
    DOM.modalHeroImg.onerror = function () {
      this.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80';
    };
    DOM.modalTitle.textContent = dest.name;
    DOM.modalFlag.textContent = dest.flag;
    DOM.modalTagline.textContent = dest.tagline;

    // Fotoğraf Galerisi Şeridi (Mükerrerlik Filtreli, Hata Yakalamalı)
    DOM.modalGalleryStrip.innerHTML = '';
    const galleryItems = (dest.gallery || []).filter(url => url !== dest.heroImage);
    const photos = [dest.heroImage, ...galleryItems];

    photos.forEach((imgUrl, index) => {
      const thumb = document.createElement('img');
      thumb.className = `gallery-thumb ${index === 0 ? 'active' : ''}`;
      thumb.src = imgUrl;
      thumb.alt = `${dest.name} fotoğrafı ${index + 1}`;
      thumb.loading = 'lazy';

      thumb.onerror = function () {
        this.remove();
      };

      thumb.addEventListener('click', () => {
        DOM.modalHeroImg.src = imgUrl;
        DOM.modalGalleryStrip.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });

      DOM.modalGalleryStrip.appendChild(thumb);
    });

    // Sekme 1: Genel Bakış
    DOM.modalStatSeason.textContent = dest.bestSeason;
    DOM.modalStatClimate.textContent = dest.climate;
    DOM.modalStatCurrency.textContent = `${dest.currency.code} (${dest.currency.symbol})`;
    DOM.modalStatLanguage.textContent = dest.language;
    DOM.modalFullDesc.textContent = dest.description;

    DOM.modalHighlightsList.innerHTML = dest.highlights.map(h => `<li>${escapeHTML(h)}</li>`).join('');
    DOM.modalCultureTips.innerHTML = dest.cultureTips.map(c => `<li>${escapeHTML(c)}</li>`).join('');

    // Sekme 2: Vize & Giriş Şartları
    renderVisaTab(dest);

    // Sekme 3: Gezilecek Yerler
    DOM.modalAttractionsList.innerHTML = dest.attractions.map(att => `
      <div class="item-card">
        ${att.image ? `<img class="item-card-img" src="${att.image}" alt="${escapeHTML(att.name)}" loading="lazy" onerror="this.style.display='none';">` : ''}
        <div class="item-card-content">
          <div class="item-card-header">
            <span class="item-card-icon">${att.icon}</span>
            <div class="item-card-name">${escapeHTML(att.name)}</div>
          </div>
          <div class="item-card-sub">${escapeHTML(att.type)}</div>
          <p class="item-card-desc">${escapeHTML(att.description)}</p>
        </div>
      </div>
    `).join('');

    // Sekme 4: Yöresel Lezzetler
    DOM.modalCuisineList.innerHTML = dest.cuisine.map(c => `
      <div class="item-card">
        <div class="item-card-content">
          <div class="item-card-header">
            <span class="item-card-icon">${c.icon}</span>
            <div class="item-card-name">${escapeHTML(c.dish)}</div>
          </div>
          <div class="item-card-sub">${escapeHTML(c.nativeName)}</div>
          <p class="item-card-desc">${escapeHTML(c.description)}</p>
        </div>
      </div>
    `).join('');

    // Sekme 5: Sesli Telaffuz (Web Speech API)
    DOM.modalPhrasebookList.innerHTML = '';
    dest.phrasebook.forEach(phrase => {
      const row = document.createElement('div');
      row.className = 'phrase-row';
      row.innerHTML = `
        <div class="phrase-info">
          <div class="phrase-english">${escapeHTML(phrase.phrase)}</div>
          <div class="phrase-native-phonetic">
            <strong>${escapeHTML(phrase.native)}</strong>
            <span>[${escapeHTML(phrase.phonetic)}]</span>
          </div>
        </div>
        <button class="speech-audio-btn" aria-label="Sesli telaffuz dinle" title="Telaffuzu Dinle">
          🔊
        </button>
      `;

      const speakBtn = row.querySelector('.speech-audio-btn');
      speakBtn.addEventListener('click', () => {
        speakPhrase(phrase.native, phrase.audioLang);
      });

      DOM.modalPhrasebookList.appendChild(row);
    });

    // Sekme 6 & 7: Bavul ve Bütçe
    window.Aetheria.Itinerary.renderPacking(dest);
    window.Aetheria.Itinerary.renderCalculator(dest);

    // İlk sekmeye dön
    switchTab('tab-overview');

    // Gezi planında var mı kontrolü
    const exists = State.getItinerary().some(item => item.id === dest.id);
    DOM.modalAddItineraryBtn.innerHTML = exists
      ? '<span>✓ Planda Kayıtlı (Görüntüle)</span>'
      : '<span>➕ Gezi Planıma Ekle</span>';

    // Modalı aç
    DOM.destModalBackdrop.classList.add('open');
    DOM.destModalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', `#dest=${dest.id}`);
    }
  }

  function renderVisaTab(dest) {
    const DOM = window.Aetheria.UI.DOM;
    const escapeHTML = window.Aetheria.UI.escapeHTML;

    if (!dest.visaInfo) {
      DOM.modalVisaContent.innerHTML = '<p>Bu rota için vize bilgisi güncellenmektedir.</p>';
      return;
    }

    const v = dest.visaInfo;
    const isFreeBordo = v.bordoStatus.toLowerCase().includes('vizesiz');
    const isFreeYesil = v.yesilStatus.toLowerCase().includes('vizesiz');

    DOM.modalVisaContent.innerHTML = `
      <div class="visa-grid">
        <div class="visa-card">
          <div class="visa-card-header">
            <span class="visa-card-title">🇹🇷 Bordo Pasaport</span>
            <span class="visa-status-pill ${isFreeBordo ? 'free' : (v.badgeClass === 'visa-arrival' ? 'arrival' : (v.badgeClass === 'visa-online' ? 'online' : 'required'))}">
              ${escapeHTML(v.bordoStatus)}
            </span>
          </div>
          <p class="visa-card-desc">${escapeHTML(v.bordoDetail)}</p>
          <div class="visa-validity-box">
            <strong>Pasaport Geçerliliği:</strong> ${escapeHTML(v.passportValidity)}
          </div>
        </div>

        <div class="visa-card">
          <div class="visa-card-header">
            <span class="visa-card-title">🇹🇷 Yeşil Pasaport</span>
            <span class="visa-status-pill ${isFreeYesil ? 'free' : 'required'}">
              ${escapeHTML(v.yesilStatus)}
            </span>
          </div>
          <p class="visa-card-desc">${escapeHTML(v.yesilDetail)}</p>
          <div class="visa-validity-box">
            <strong>Pasaport Geçerliliği:</strong> ${escapeHTML(v.passportValidity)}
          </div>
        </div>
      </div>

      <h3 class="section-heading">📋 Giriş ve Vize İçin Zorunlu Belgeler</h3>
      <ul class="visa-docs-list">
        ${v.mandatoryDocs.map(doc => `
          <li class="visa-doc-item">
            <span class="visa-doc-icon">✓</span>
            <span>${escapeHTML(doc)}</span>
          </li>
        `).join('')}
      </ul>

      ${v.tips ? `
        <div class="visa-tip-box">
          <strong>💡 Konsolosluk ve Seyahat İpucu:</strong> ${escapeHTML(v.tips)}
        </div>
      ` : ''}
    `;
  }

  function close() {
    const DOM = window.Aetheria.UI.DOM;
    const State = window.Aetheria.State;

    DOM.destModalBackdrop.classList.remove('open');
    DOM.destModalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    State.set('activeModalDestId', null);
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }

  function switchTab(tabId) {
    const DOM = window.Aetheria.UI.DOM;

    DOM.modalTabButtons.forEach(btn => {
      const match = btn.getAttribute('data-tab') === tabId;
      btn.classList.toggle('active', match);
      btn.setAttribute('aria-selected', match ? 'true' : 'false');
    });

    DOM.modalTabPanes.forEach(pane => {
      pane.classList.toggle('active', pane.id === tabId);
    });
  }

  function speakPhrase(text, lang) {
    if (!('speechSynthesis' in window)) {
      window.Aetheria.UI.showToast('Tarayıcınız Web Speech ses sentezini desteklemiyor.', '⚠️');
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang || 'en-US';
    utterance.rate = 0.88;

    utterance.onstart = () => window.Aetheria.UI.showToast(`Seslendiriliyor: "${text}"`, '🔊', 1800);
    window.speechSynthesis.speak(utterance);
  }

  function share() {
    const State = window.Aetheria.State;
    const activeId = State.get('activeModalDestId');
    if (!activeId) return;

    const dest = State.getDestinationById(activeId);
    if (!dest) return;

    const url = `${window.location.origin}${window.location.pathname}#dest=${dest.id}`;
    const shareData = {
      title: `${dest.name} Gezi & Vize Rehberi | AETHERIA`,
      text: `${dest.tagline} - Vize şartları ve gezi planı AETHERIA'da!`,
      url: url
    };

    if (navigator.share) {
      navigator.share(shareData).catch(() => copyToClipboard(url, 'Rota bağlantısı kopyalandı!'));
    } else {
      copyToClipboard(url, 'Rota bağlantısı kopyalandı!');
    }
  }

  function copyToClipboard(text, msg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        window.Aetheria.UI.showToast(msg, '📋');
      });
    }
  }

  return {
    init: init,
    open: open,
    close: close,
    switchTab: switchTab,
    speakPhrase: speakPhrase
  };
})();

