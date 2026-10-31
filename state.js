/**
 * AETHERIA - State Management Module
 * Durum yönetimi, veri reaktifliği ve LocalStorage senkronizasyonu.
 */

window.Aetheria = window.Aetheria || {};

window.Aetheria.State = (function () {
  'use strict';

  const DATA = window.AETHERIA_DATA || { DESTINATIONS: [], CONTINENTS: [], THEME_PALETTES: {} };

  // Özel Durum Havuzu (Private State)
  const _state = {
    destinations: [...DATA.DESTINATIONS],
    filteredDestinations: [...DATA.DESTINATIONS],
    favorites: new Set(JSON.parse(localStorage.getItem('aetheria_favs') || '[]')),
    itinerary: JSON.parse(localStorage.getItem('aetheria_itinerary') || '[]'),
    packingStatus: JSON.parse(localStorage.getItem('aetheria_packing') || '{}'),

    // Filtre Parametreleri
    activeContinent: 'Tümü',
    activeTag: 'Tümü',
    searchQuery: '',
    maxBudget: 600,
    sortMode: 'featured',

    // Tema
    currentTheme: localStorage.getItem('aetheria_theme') || 'light',

    // Modal ve Araçlar
    activeModalDestId: null,
    calcDays: 7,
    calcStyle: 'explorer'
  };

  function save() {
    try {
      localStorage.setItem('aetheria_favs', JSON.stringify([..._state.favorites]));
      localStorage.setItem('aetheria_itinerary', JSON.stringify(_state.itinerary));
      localStorage.setItem('aetheria_packing', JSON.stringify(_state.packingStatus));
      localStorage.setItem('aetheria_theme', _state.currentTheme);
    } catch (e) {
      console.warn('[Aetheria.State] LocalStorage kayıt hatası:', e);
    }
  }

  return {
    get: function (key) {
      return _state[key];
    },

    set: function (key, value) {
      _state[key] = value;
    },

    getDestinations: function () {
      return _state.destinations;
    },

    getDestinationById: function (id) {
      return _state.destinations.find(d => d.id === id);
    },

    getFilteredDestinations: function () {
      return _state.filteredDestinations;
    },

    setFilteredDestinations: function (list) {
      _state.filteredDestinations = list;
    },

    isFavorite: function (id) {
      return _state.favorites.has(id);
    },

    toggleFavorite: function (id) {
      const isFav = _state.favorites.has(id);
      if (isFav) {
        _state.favorites.delete(id);
      } else {
        _state.favorites.add(id);
      }
      save();
      return !isFav;
    },

    getItinerary: function () {
      return _state.itinerary;
    },

    addToItinerary: function (destId, days = 5) {
      const dest = this.getDestinationById(destId);
      if (!dest) return { success: false };

      const existing = _state.itinerary.find(item => item.id === destId);
      if (existing) {
        return { success: false, alreadyExists: true, item: existing };
      }

      const newItem = {
        id: dest.id,
        name: dest.name,
        country: dest.country,
        flag: dest.flag,
        heroImage: dest.heroImage,
        dailyBudget: dest.averageDailyBudget.explorer,
        days: days
      };

      _state.itinerary.push(newItem);
      save();
      return { success: true, item: newItem };
    },

    removeFromItinerary: function (destId) {
      const item = _state.itinerary.find(i => i.id === destId);
      _state.itinerary = _state.itinerary.filter(i => i.id !== destId);
      save();
      return item;
    },

    adjustItineraryDays: function (destId, delta) {
      const item = _state.itinerary.find(i => i.id === destId);
      if (!item) return null;

      const newDays = item.days + delta;
      if (newDays >= 1 && newDays <= 30) {
        item.days = newDays;
        save();
        return item;
      }
      return null;
    },

    clearItinerary: function () {
      _state.itinerary = [];
      save();
    },

    getPackingForDest: function (destId) {
      return _state.packingStatus[destId] || [];
    },

    togglePackingItem: function (destId, itemIndex, isChecked) {
      if (!_state.packingStatus[destId]) {
        _state.packingStatus[destId] = [];
      }

      if (isChecked) {
        if (!_state.packingStatus[destId].includes(itemIndex)) {
          _state.packingStatus[destId].push(itemIndex);
        }
      } else {
        _state.packingStatus[destId] = _state.packingStatus[destId].filter(i => i !== itemIndex);
      }

      save();
    },

    save: save
  };
})();

