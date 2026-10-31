/**
 * AETHERIA - Filtering & Search Module
 * Kıta filtreleri, seyahat temaları, bütçe aralığı, sıralama ve canlı arama.
 */

window.Aetheria = window.Aetheria || {};

window.Aetheria.Filters = (function () {
  'use strict';

  const DATA = window.AETHERIA_DATA || { CONTINENTS: [] };
  const CONTINENTS = DATA.CONTINENTS;

  function init() {
    const DOM = window.Aetheria.UI.DOM;
    const State = window.Aetheria.State;

    // 1. Kıta Sekmeleri
    DOM.continentTabsContainer.innerHTML = '';
    CONTINENTS.forEach(continent => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `tab-btn ${continent === State.get('activeContinent') ? 'active' : ''}`;
      btn.textContent = continent;
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', continent === State.get('activeContinent') ? 'true' : 'false');
      btn.addEventListener('click', () => {
        document.querySelectorAll('.continent-tabs .tab-btn').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        State.set('activeContinent', continent);
        applyFilters();
      });
      DOM.continentTabsContainer.appendChild(btn);
    });

    // 2. Seyahat Teması Etiketleri
    const tagSet = new Set(['Tümü']);
    State.getDestinations().forEach(d => d.tags.forEach(t => tagSet.add(t)));

    DOM.tagChipsContainer.innerHTML = '';
    tagSet.forEach(tag => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = `filter-tag-chip ${tag === State.get('activeTag') ? 'active' : ''}`;
      chip.textContent = tag;
      chip.addEventListener('click', () => {
        document.querySelectorAll('.filter-tag-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        State.set('activeTag', tag);
        applyFilters();
      });
      DOM.tagChipsContainer.appendChild(chip);
    });

    // 3. Bütçe Kaydırıcı
    DOM.budgetRangeInput.addEventListener('input', (e) => {
      const val = Number(e.target.value);
      State.set('maxBudget', val);
      DOM.budgetDisplayVal.textContent = `$${val}`;
      applyFilters();
    });

    // 4. Sıralama
    DOM.sortSelect.addEventListener('change', (e) => {
      State.set('sortMode', e.target.value);
      applyFilters();
    });

    // 5. Canlı Arama (Debounced)
    let debounceTimer;
    DOM.searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      const query = e.target.value.trim();
      DOM.searchClearBtn.classList.toggle('active', query.length > 0);

      debounceTimer = setTimeout(() => {
        State.set('searchQuery', query);
        updateAutocomplete(query);
        applyFilters();
      }, 160);
    });

    DOM.searchClearBtn.addEventListener('click', () => {
      DOM.searchInput.value = '';
      DOM.searchClearBtn.classList.remove('active');
      State.set('searchQuery', '');
      closeAutocomplete();
      applyFilters();
      DOM.searchInput.focus();
    });

    // 6. Popüler Hızlı Arama Butonları
    DOM.recentSearchPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const query = pill.getAttribute('data-search') || '';
        DOM.searchInput.value = query;
        DOM.searchClearBtn.classList.add('active');
        State.set('searchQuery', query);
        closeAutocomplete();
        applyFilters();
      });
    });

    // Dışarı tıklanınca otomatik tamamlamayı kapat
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-wrapper')) {
        closeAutocomplete();
      }
    });
  }

  function updateAutocomplete(query) {
    const DOM = window.Aetheria.UI.DOM;
    const State = window.Aetheria.State;
    const escapeHTML = window.Aetheria.UI.escapeHTML;

    if (!query || query.length < 2) {
      closeAutocomplete();
      return;
    }

    const q = query.toLowerCase();
    const matches = State.getDestinations().filter(d =>
      d.name.toLowerCase().includes(q) ||
      d.country.toLowerCase().includes(q) ||
      (d.visaInfo && d.visaInfo.badgeText.toLowerCase().includes(q)) ||
      d.tags.some(t => t.toLowerCase().includes(q))
    ).slice(0, 5);

    if (matches.length === 0) {
      closeAutocomplete();
      return;
    }

    DOM.autocompleteDropdown.innerHTML = '';
    matches.forEach(item => {
      const row = document.createElement('div');
      row.className = 'autocomplete-item';
      row.setAttribute('role', 'option');

      row.innerHTML = `
        <span class="autocomplete-item-flag">${item.flag}</span>
        <div class="autocomplete-item-text">
          <div class="autocomplete-item-title">${escapeHTML(item.name)}</div>
          <div class="autocomplete-item-sub">${escapeHTML(item.continent)} • ${escapeHTML(item.visaInfo ? item.visaInfo.badgeText : '')}</div>
        </div>
      `;

      row.addEventListener('click', () => {
        DOM.searchInput.value = item.name;
        State.set('searchQuery', item.name);
        closeAutocomplete();
        applyFilters();
        window.Aetheria.Modal.open(item.id);
      });

      DOM.autocompleteDropdown.appendChild(row);
    });

    DOM.autocompleteDropdown.classList.add('open');
  }

  function closeAutocomplete() {
    const DOM = window.Aetheria.UI.DOM;
    DOM.autocompleteDropdown.classList.remove('open');
    DOM.autocompleteDropdown.innerHTML = '';
  }

  function applyFilters() {
    const State = window.Aetheria.State;
    const query = (State.get('searchQuery') || '').toLowerCase();
    const activeContinent = State.get('activeContinent');
    const activeTag = State.get('activeTag');
    const maxBudget = State.get('maxBudget');
    const sortMode = State.get('sortMode');

    let results = State.getDestinations().filter(d => {
      // Kıta Filtresi
      if (activeContinent !== 'Tümü' && d.continent !== activeContinent) {
        return false;
      }

      // Etiket Filtresi
      if (activeTag !== 'Tümü' && !d.tags.includes(activeTag)) {
        return false;
      }

      // Bütçe Filtresi
      if (d.averageDailyBudget.explorer > maxBudget) {
        return false;
      }

      // Metin Arama (Vize terimlerini de kapsar)
      if (query) {
        if (query.includes('vizesiz') && d.visaInfo && d.visaInfo.badgeClass === 'visa-free') {
          return true;
        }

        const matchName = d.name.toLowerCase().includes(query);
        const matchCountry = d.country.toLowerCase().includes(query);
        const matchClimate = d.climate.toLowerCase().includes(query);
        const matchDesc = d.description.toLowerCase().includes(query);
        const matchTags = d.tags.some(t => t.toLowerCase().includes(query));
        const matchCuisine = d.cuisine.some(c => c.dish.toLowerCase().includes(query));
        const matchVisa = d.visaInfo && (
          d.visaInfo.badgeText.toLowerCase().includes(query) ||
          d.visaInfo.bordoStatus.toLowerCase().includes(query)
        );

        if (!matchName && !matchCountry && !matchClimate && !matchDesc && !matchTags && !matchCuisine && !matchVisa) {
          return false;
        }
      }

      return true;
    });

    // Sıralama
    switch (sortMode) {
      case 'rating-desc':
        results.sort((a, b) => b.rating - a.rating);
        break;
      case 'budget-asc':
        results.sort((a, b) => a.averageDailyBudget.explorer - b.averageDailyBudget.explorer);
        break;
      case 'budget-desc':
        results.sort((a, b) => b.averageDailyBudget.explorer - a.averageDailyBudget.explorer);
        break;
      case 'name-asc':
        results.sort((a, b) => a.name.localeCompare(b.name, 'tr'));
        break;
      case 'featured':
      default:
        break;
    }

    State.setFilteredDestinations(results);
    renderGrid();
  }

  function renderGrid() {
    const DOM = window.Aetheria.UI.DOM;
    const State = window.Aetheria.State;
    const escapeHTML = window.Aetheria.UI.escapeHTML;
    const list = State.getFilteredDestinations();

    DOM.resultsCountDisplay.textContent = `${list.length} rota listeleniyor`;

    if (list.length === 0) {
      DOM.destinationsGrid.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🧭</div>
          <h3 class="empty-state-title">Eşleşen Rota Bulunamadı</h3>
          <p class="empty-state-text">Seçtiğiniz filtreleme kriterlerine uygun seyahat rotası bulunamadı. Filtreleri sıfırlayarak tekrar deneyebilirsiniz.</p>
          <button id="reset-filters-btn" class="reset-filters-btn">Filtreleri Sıfırla</button>
        </div>
      `;

      const resetBtn = document.getElementById('reset-filters-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          State.set('activeContinent', 'Tümü');
          State.set('activeTag', 'Tümü');
          State.set('searchQuery', '');
          State.set('maxBudget', 600);
          State.set('sortMode', 'featured');
          DOM.searchInput.value = '';
          DOM.budgetRangeInput.value = 600;
          DOM.budgetDisplayVal.textContent = '$600';
          DOM.sortSelect.value = 'featured';

          document.querySelectorAll('.continent-tabs .tab-btn').forEach(b => {
            b.classList.toggle('active', b.textContent === 'Tümü');
          });
          document.querySelectorAll('.filter-tag-chip').forEach(c => {
            c.classList.toggle('active', c.textContent === 'Tümü');
          });

          applyFilters();
        });
      }
      return;
    }

    DOM.destinationsGrid.innerHTML = '';

    list.forEach(dest => {
      const isFav = State.isFavorite(dest.id);
      const card = document.createElement('article');
      card.className = 'dest-card';
      card.setAttribute('data-id', dest.id);

      const visaBadgeHtml = dest.visaInfo 
        ? `<span class="card-badge visa-badge ${dest.visaInfo.badgeClass}">🛂 ${escapeHTML(dest.visaInfo.badgeText)}</span>`
        : '';

      card.innerHTML = `
        <div class="card-media">
          <img class="card-img" 
               src="${dest.heroImage}" 
               alt="${escapeHTML(dest.name)}" 
               loading="lazy"
               onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80'">
          <div class="card-overlay-gradient"></div>
          <div class="card-badge-group">
            <div style="display: flex; gap: 6px;">
              <span class="card-badge">${dest.flag} ${escapeHTML(dest.country)}</span>
              <span class="card-badge">🗺️ ${escapeHTML(dest.continent)}</span>
            </div>
            ${visaBadgeHtml}
          </div>
          <button class="card-heart-btn ${isFav ? 'favorited' : ''}" 
                  aria-label="${isFav ? 'Favorilerden çıkar' : 'Favorilere ekle'}" 
                  data-id="${dest.id}">
            ${isFav ? '❤️' : '🤍'}
          </button>
        </div>

        <div class="card-body">
          <div class="card-header-row">
            <h2 class="card-title">${escapeHTML(dest.name)}</h2>
            <div class="card-rating">
              <span>⭐ ${dest.rating}</span>
              <span class="card-rating-count">(${dest.reviews})</span>
            </div>
          </div>

          <div class="card-tagline">${escapeHTML(dest.tagline)}</div>
          <p class="card-desc">${escapeHTML(dest.description)}</p>

          <div class="card-tags">
            ${dest.tags.map(t => `<span class="card-tag">${escapeHTML(t)}</span>`).join('')}
          </div>

          <div class="card-footer">
            <div class="card-budget-info">
              <span class="card-budget-label">Ortalama Günlük:</span>
              <div class="card-budget-val">$${dest.averageDailyBudget.explorer} <span>/gün</span></div>
            </div>
            <button class="card-explore-btn" data-action="explore" data-id="${dest.id}">
              <span>Rehberi İncele</span>
              <span>➔</span>
            </button>
          </div>
        </div>
      `;

      // Favori Butonu
      const heartBtn = card.querySelector('.card-heart-btn');
      if (heartBtn) {
        heartBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const nowFav = State.toggleFavorite(dest.id);
          heartBtn.classList.toggle('favorited', nowFav);
          heartBtn.textContent = nowFav ? '❤️' : '🤍';
          window.Aetheria.UI.showToast(
            nowFav ? `${dest.name} favorilere eklendi!` : `${dest.name} favorilerden çıkarıldı`,
            nowFav ? '❤️' : '💔'
          );
        });
      }

      // İncele Butonu
      const exploreBtn = card.querySelector('.card-explore-btn');
      if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
          window.Aetheria.Modal.open(dest.id);
        });
      }

      // Karta tıklanırsa da aç
      card.addEventListener('click', (e) => {
        if (!e.target.closest('.card-heart-btn') && !e.target.closest('.card-explore-btn')) {
          window.Aetheria.Modal.open(dest.id);
        }
      });

      DOM.destinationsGrid.appendChild(card);
    });
  }

  return {
    init: init,
    applyFilters: applyFilters,
    renderGrid: renderGrid
  };
})();

