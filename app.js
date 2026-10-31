/**
 * AETHERIA - Main Application Entry Point & Orchestrator
 * Modüler mimari orkestrasyonu: State, UI, Filters, Modal, Itinerary modüllerini birleştirir.
 */

(function () {
  'use strict';

  function checkUrlHash() {
    const hash = window.location.hash;
    if (hash.startsWith('#dest=')) {
      const destId = hash.replace('#dest=', '');
      if (window.Aetheria.State.getDestinationById(destId)) {
        window.Aetheria.Modal.open(destId);
      }
    }
  }

  function bindGlobalShortcuts() {
    // ESC tuşu ile modal/çekmece/arama kapatma
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const DOM = window.Aetheria.UI.DOM;
        if (DOM.destModalBackdrop.classList.contains('open')) {
          window.Aetheria.Modal.close();
        } else if (DOM.itineraryBackdrop.classList.contains('open')) {
          window.Aetheria.Itinerary.closeDrawer();
        } else {
          DOM.autocompleteDropdown.classList.remove('open');
        }
      }
    });

    // Tema Değiştirme Butonu
    window.Aetheria.UI.DOM.themeToggleBtn.addEventListener('click', () => {
      window.Aetheria.UI.cycleTheme();
    });

    // URL Hash Değişikliği İzleme
    window.addEventListener('hashchange', checkUrlHash);
  }

  function init() {
    // 1. Tema ve Arayüzü Başlat
    window.Aetheria.UI.initTheme();

    // 2. Modülleri Başlat
    window.Aetheria.Filters.init();
    window.Aetheria.Modal.init();
    window.Aetheria.Itinerary.init();

    // 3. Global Kısayolları ve Dinleyicileri Bağla
    bindGlobalShortcuts();

    // 4. İlk Kart Çizimini Gerçekleştir
    window.Aetheria.Filters.applyFilters();

    // 5. URL'de Belirli Bir Rota Varsa Aç (#dest=...)
    checkUrlHash();

    console.log('✨ [AETHERIA] Modüler Mimari Başarıyla Başlatıldı.');
  }

  // DOM hazır olduğunda başlat
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
