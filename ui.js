/**
 * AETHERIA - UI & Notification Module
 * Bildirimler, tema yönetimi, DOM referansları ve güvenlik yardımcıları.
 */

window.Aetheria = window.Aetheria || {};

window.Aetheria.UI = (function () {
  'use strict';

  const DATA = window.AETHERIA_DATA || { THEME_PALETTES: {} };
  const THEME_PALETTES = DATA.THEME_PALETTES;
  const THEME_KEYS = Object.keys(THEME_PALETTES);

  // Merkezi DOM Önbelleği
  const DOM = {
    themeToggleBtn: document.getElementById('theme-toggle'),
    themeIcon: document.getElementById('theme-icon'),
    themeLabel: document.getElementById('theme-label'),

    openItineraryBtn: document.getElementById('open-itinerary-btn'),
    itineraryCountBadge: document.getElementById('itinerary-count'),
    itineraryBackdrop: document.getElementById('itinerary-backdrop'),
    itineraryDrawer: document.getElementById('itinerary-drawer'),
    drawerCloseBtn: document.getElementById('drawer-close-btn'),
    drawerBody: document.getElementById('drawer-body'),
    itinerarySummaryCount: document.getElementById('itinerary-summary-count'),
    itinerarySummaryDays: document.getElementById('itinerary-summary-days'),
    itinerarySummaryBudget: document.getElementById('itinerary-summary-budget'),
    exportTripBtn: document.getElementById('export-trip-btn'),
    clearItineraryBtn: document.getElementById('clear-itinerary-btn'),

    searchInput: document.getElementById('search-input'),
    searchClearBtn: document.getElementById('search-clear-btn'),
    autocompleteDropdown: document.getElementById('autocomplete-dropdown'),
    recentSearchPills: document.querySelectorAll('.recent-search-pill'),

    continentTabsContainer: document.getElementById('continent-tabs'),
    tagChipsContainer: document.getElementById('tag-chips-container'),
    budgetRangeInput: document.getElementById('budget-range'),
    budgetDisplayVal: document.getElementById('budget-display'),
    sortSelect: document.getElementById('sort-select'),
    resultsCountDisplay: document.getElementById('results-count'),

    destinationsGrid: document.getElementById('destinations-grid'),

    // Modal
    destModalBackdrop: document.getElementById('dest-modal'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    modalHeroImg: document.getElementById('modal-hero-img'),
    modalTitle: document.getElementById('modal-title'),
    modalFlag: document.getElementById('modal-flag'),
    modalTagline: document.getElementById('modal-tagline'),
    modalGalleryStrip: document.getElementById('modal-gallery-strip'),
    modalTabButtons: document.querySelectorAll('.modal-tab-btn'),
    modalTabPanes: document.querySelectorAll('.tab-pane'),

    // Modal Sekmeleri
    modalStatSeason: document.getElementById('modal-stat-season'),
    modalStatClimate: document.getElementById('modal-stat-climate'),
    modalStatCurrency: document.getElementById('modal-stat-currency'),
    modalStatLanguage: document.getElementById('modal-stat-language'),
    modalFullDesc: document.getElementById('modal-full-desc'),
    modalHighlightsList: document.getElementById('modal-highlights-list'),
    modalCultureTips: document.getElementById('modal-culture-tips'),
    modalVisaContent: document.getElementById('modal-visa-content'),
    modalAttractionsList: document.getElementById('modal-attractions-list'),
    modalCuisineList: document.getElementById('modal-cuisine-list'),
    modalPhrasebookList: document.getElementById('modal-phrasebook-list'),
    modalPackingList: document.getElementById('modal-packing-list'),
    checklistProgressText: document.getElementById('checklist-progress-text'),
    checklistProgressFill: document.getElementById('checklist-progress-fill'),

    calcDaysSlider: document.getElementById('calc-days-slider'),
    calcDaysVal: document.getElementById('calc-days-val'),
    calcStyleButtons: document.querySelectorAll('.style-btn'),
    calcTotalUSD: document.getElementById('calc-total-usd'),
    calcTotalLocal: document.getElementById('calc-total-local'),

    modalShareBtn: document.getElementById('modal-share-btn'),
    modalAddItineraryBtn: document.getElementById('modal-add-itinerary-btn'),

    toastContainer: document.getElementById('toast-container')
  };

  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function showToast(message, icon = '✨', duration = 3000) {
    if (!DOM.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');

    const iconSpan = document.createElement('span');
    iconSpan.className = 'toast-icon';
    iconSpan.textContent = icon;

    const textSpan = document.createElement('span');
    textSpan.textContent = message;

    toast.appendChild(iconSpan);
    toast.appendChild(textSpan);
    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('removing');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 260);
    }, duration);
  }

  function applyTheme(themeKey) {
    if (!THEME_PALETTES[themeKey]) themeKey = 'light';
    window.Aetheria.State.set('currentTheme', themeKey);
    document.documentElement.setAttribute('data-theme', themeKey);

    const palette = THEME_PALETTES[themeKey];
    if (DOM.themeIcon) DOM.themeIcon.textContent = palette.icon;
    if (DOM.themeLabel) DOM.themeLabel.textContent = palette.name.split(' ')[0];

    window.Aetheria.State.save();
  }

  function cycleTheme() {
    const current = window.Aetheria.State.get('currentTheme');
    const currentIndex = THEME_KEYS.indexOf(current);
    const nextIndex = (currentIndex + 1) % THEME_KEYS.length;
    const nextTheme = THEME_KEYS[nextIndex];
    applyTheme(nextTheme);
    showToast(`Tema değiştirildi: ${THEME_PALETTES[nextTheme].name}`, THEME_PALETTES[nextTheme].icon);
  }

  return {
    DOM: DOM,
    escapeHTML: escapeHTML,
    showToast: showToast,
    applyTheme: applyTheme,
    cycleTheme: cycleTheme,
    initTheme: function () {
      applyTheme(window.Aetheria.State.get('currentTheme'));
    }
  };
})();

