/**
 * AETHERIA - Itinerary, Checklist & Budget Planner Module
 * Gezi planlayıcı çekmecesi, akıllı bavul listesi ve seyahat maliyeti hesaplayıcı.
 */

window.Aetheria = window.Aetheria || {};

window.Aetheria.Itinerary = (function () {
  'use strict';

  function init() {
    const DOM = window.Aetheria.UI.DOM;
    const State = window.Aetheria.State;

    // Çekmece Olayları
    DOM.openItineraryBtn.addEventListener('click', openDrawer);
    DOM.drawerCloseBtn.addEventListener('click', closeDrawer);
    DOM.itineraryBackdrop.addEventListener('click', (e) => {
      if (e.target === DOM.itineraryBackdrop) closeDrawer();
    });

    DOM.exportTripBtn.addEventListener('click', exportPlan);
    DOM.clearItineraryBtn.addEventListener('click', () => {
      if (State.getItinerary().length === 0) return;
      if (confirm('Seyahat planınızdaki tüm rotaları silmek istediğinize emin misiniz?')) {
        State.clearItinerary();
        updateBadge();
        renderDrawer();
        window.Aetheria.UI.showToast('Gezi planı temizlendi', '🧹');
      }
    });

    // Modal İçi "Gezi Planıma Ekle"
    DOM.modalAddItineraryBtn.addEventListener('click', () => {
      const activeId = State.get('activeModalDestId');
      if (!activeId) return;

      const res = State.addToItinerary(activeId, State.get('calcDays'));
      if (res.alreadyExists) {
        window.Aetheria.Modal.close();
        openDrawer();
        window.Aetheria.UI.showToast(`${res.item.name} zaten gezi planınızda var!`, 'ℹ️');
      } else if (res.success) {
        updateBadge();
        window.Aetheria.UI.showToast(`${res.item.name} seyahat planınıza eklendi!`, '🎒');
        DOM.modalAddItineraryBtn.innerHTML = '<span>✓ Planda Kayıtlı (Görüntüle)</span>';
      }
    });

    // Hesaplayıcı Kontrolleri
    DOM.calcDaysSlider.addEventListener('input', (e) => {
      const days = Number(e.target.value);
      State.set('calcDays', days);
      DOM.calcDaysVal.textContent = days;
      const activeId = State.get('activeModalDestId');
      if (activeId) updateCalculator(State.getDestinationById(activeId));
    });

    DOM.calcStyleButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        DOM.calcStyleButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const style = btn.getAttribute('data-style') || 'explorer';
        State.set('calcStyle', style);
        const activeId = State.get('activeModalDestId');
        if (activeId) updateCalculator(State.getDestinationById(activeId));
      });
    });

    updateBadge();
  }

  function openDrawer() {
    const DOM = window.Aetheria.UI.DOM;
    renderDrawer();
    DOM.itineraryBackdrop.classList.add('open');
    DOM.itineraryBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    const DOM = window.Aetheria.UI.DOM;
    DOM.itineraryBackdrop.classList.remove('open');
    DOM.itineraryBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function renderDrawer() {
    const DOM = window.Aetheria.UI.DOM;
    const State = window.Aetheria.State;
    const escapeHTML = window.Aetheria.UI.escapeHTML;
    const list = State.getItinerary();

    if (list.length === 0) {
      DOM.drawerBody.innerHTML = `
        <div style="text-align: center; padding: 50px 16px; color: var(--text-muted);">
          <div style="font-size: 3.5rem; margin-bottom: 14px;">🎒</div>
          <h3 style="font-size: 1.2rem; color: var(--text-primary); margin-bottom: 8px; font-weight: 800;">Gezi Planınız Boş</h3>
          <p style="font-size: 0.92rem; line-height: 1.5;">İstediğiniz rotalardaki "Gezi Planıma Ekle" butonuna basarak seyahat listenizi hemen oluşturun.</p>
        </div>
      `;
      DOM.itinerarySummaryCount.textContent = '0';
      DOM.itinerarySummaryDays.textContent = '0 Gün';
      DOM.itinerarySummaryBudget.textContent = '$0 USD';
      return;
    }

    DOM.drawerBody.innerHTML = '';
    let totalDays = 0;
    let totalCost = 0;

    list.forEach(item => {
      totalDays += item.days;
      totalCost += item.days * item.dailyBudget;

      const card = document.createElement('div');
      card.className = 'itinerary-item-card';

      card.innerHTML = `
        <img src="${item.heroImage}" alt="${escapeHTML(item.name)}" class="itinerary-item-img" onerror="this.src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80'">
        <div class="itinerary-item-details">
          <div class="itinerary-item-name">${item.flag} ${escapeHTML(item.name)}</div>
          <div class="itinerary-item-country">${escapeHTML(item.country)} • $${item.dailyBudget}/gün</div>
          <div class="itinerary-days-control">
            <span>Süre:</span>
            <button class="days-step-btn" data-action="dec" data-id="${item.id}" aria-label="Günü azalt">-</button>
            <strong style="color: var(--text-primary); font-size: 0.95rem;">${item.days} gün</strong>
            <button class="days-step-btn" data-action="inc" data-id="${item.id}" aria-label="Günü artır">+</button>
          </div>
        </div>
        <button class="itinerary-remove-btn" data-action="remove" data-id="${item.id}" aria-label="Plandan çıkar">✕</button>
      `;

      card.querySelector('[data-action="dec"]').addEventListener('click', () => {
        State.adjustItineraryDays(item.id, -1);
        renderDrawer();
      });

      card.querySelector('[data-action="inc"]').addEventListener('click', () => {
        State.adjustItineraryDays(item.id, 1);
        renderDrawer();
      });

      card.querySelector('[data-action="remove"]').addEventListener('click', () => {
        const removed = State.removeFromItinerary(item.id);
        updateBadge();
        renderDrawer();
        if (removed) window.Aetheria.UI.showToast(`${removed.name} plandan çıkarıldı`, '🗑️');
      });

      DOM.drawerBody.appendChild(card);
    });

    DOM.itinerarySummaryCount.textContent = `${list.length} Rota`;
    DOM.itinerarySummaryDays.textContent = `${totalDays} Gün`;
    DOM.itinerarySummaryBudget.textContent = `$${totalCost.toLocaleString()} USD (~₺${(totalCost * 35).toLocaleString()} TL)`;
  }

  function updateBadge() {
    const DOM = window.Aetheria.UI.DOM;
    const State = window.Aetheria.State;
    DOM.itineraryCountBadge.textContent = State.getItinerary().length;
  }

  function exportPlan() {
    const State = window.Aetheria.State;
    const list = State.getItinerary();

    if (list.length === 0) {
      window.Aetheria.UI.showToast('Paylaşmak için önce gezi planınıza rota ekleyin!', '🎒');
      return;
    }

    let text = `🗺️ *AETHERIA DÜNYA SEYAHAT PLANI*\n\n`;
    let totalDays = 0;
    let totalCost = 0;

    list.forEach((item, i) => {
      const cost = item.days * item.dailyBudget;
      totalDays += item.days;
      totalCost += cost;
      text += `${i + 1}. ${item.flag} ${item.name} (${item.country})\n   - Süre: ${item.days} Gün\n   - Tahmini Bütçe: $${cost.toLocaleString()} USD (~₺${(cost * 35).toLocaleString()} TL)\n\n`;
    });

    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `✨ Toplam Seyahat Süresi: ${totalDays} Gün\n`;
    text += `💰 Tahmini Toplam Bütçe: $${totalCost.toLocaleString()} USD\n`;
    text += `AETHERIA Travel Rehberi ile Hazırlandı.`;

    if (navigator.share) {
      navigator.share({
        title: 'Seyahat Gezi Planım | AETHERIA',
        text: text,
        url: window.location.href
      }).catch(() => {
        copyText(text, 'Seyahat planı panoya kopyalandı!');
      });
    } else {
      copyText(text, 'Seyahat planı panoya kopyalandı!');
    }
  }

  function copyText(text, msg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        window.Aetheria.UI.showToast(msg, '📋');
      });
    }
  }

  /* --- Bavul Hazırlık Alt Bileşeni --- */
  function renderPacking(dest) {
    const DOM = window.Aetheria.UI.DOM;
    const State = window.Aetheria.State;
    const escapeHTML = window.Aetheria.UI.escapeHTML;

    DOM.modalPackingList.innerHTML = '';
    const currentChecked = State.getPackingForDest(dest.id);

    dest.packingEssentials.forEach((item, index) => {
      const isChecked = currentChecked.includes(index);
      const label = document.createElement('label');
      label.className = `checklist-item-label ${isChecked ? 'checked' : ''}`;

      label.innerHTML = `
        <input type="checkbox" class="checklist-checkbox" data-index="${index}" ${isChecked ? 'checked' : ''}>
        <span>${escapeHTML(item)}</span>
      `;

      const checkbox = label.querySelector('.checklist-checkbox');
      checkbox.addEventListener('change', () => {
        State.togglePackingItem(dest.id, index, checkbox.checked);
        label.classList.toggle('checked', checkbox.checked);
        updatePackingProgress(dest);
      });

      DOM.modalPackingList.appendChild(label);
    });

    updatePackingProgress(dest);
  }

  function updatePackingProgress(dest) {
    const DOM = window.Aetheria.UI.DOM;
    const State = window.Aetheria.State;
    const total = dest.packingEssentials.length;
    const packed = State.getPackingForDest(dest.id).length;
    const percent = total > 0 ? Math.round((packed / total) * 100) : 0;

    DOM.checklistProgressText.textContent = `%${percent} (${packed}/${total} Tamamlandı)`;
    DOM.checklistProgressFill.style.width = `${percent}%`;
  }

  /* --- Bütçe Hesaplayıcı Alt Bileşeni --- */
  function renderCalculator(dest) {
    const DOM = window.Aetheria.UI.DOM;
    const State = window.Aetheria.State;

    DOM.calcDaysSlider.value = State.get('calcDays');
    DOM.calcDaysVal.textContent = State.get('calcDays');
    DOM.calcStyleButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-style') === State.get('calcStyle'));
    });
    updateCalculator(dest);
  }

  function updateCalculator(dest) {
    if (!dest) return;
    const DOM = window.Aetheria.UI.DOM;
    const State = window.Aetheria.State;
    const style = State.get('calcStyle');
    const days = State.get('calcDays');

    const dailyUSD = dest.averageDailyBudget[style] || dest.averageDailyBudget.explorer;
    const totalUSD = dailyUSD * days;
    const totalTRY = Math.round(totalUSD * 35);

    DOM.calcTotalUSD.textContent = `$${totalUSD.toLocaleString()} USD`;
    DOM.calcTotalLocal.textContent = `Yaklaşık ₺${totalTRY.toLocaleString()} TL / ${dest.currency.symbol}${Math.round(totalUSD * dest.currency.rateToUSD).toLocaleString()} ${dest.currency.code}`;
  }

  return {
    init: init,
    openDrawer: openDrawer,
    closeDrawer: closeDrawer,
    renderDrawer: renderDrawer,
    updateBadge: updateBadge,
    renderPacking: renderPacking,
    renderCalculator: renderCalculator
  };
})();

