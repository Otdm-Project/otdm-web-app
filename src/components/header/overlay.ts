import { createEffect, createSignal,createRoot } from 'solid-js';

const [_isSearchOpen, _setIsSearchOpen] = createSignal(false);
const [_isMenuOpen, _setIsMenuOpen] = createSignal(false);

export const isSearchOpen = _isSearchOpen;
export const isMenuOpen = _isMenuOpen;

export function toggleSearch() {
  _setIsSearchOpen(open => !open);
}

export function toggleMenu() {
  _setIsMenuOpen(open => !open);
}

createRoot(() => {
  createEffect(() => {
    if (_isSearchOpen()) {
      _setIsMenuOpen(false);
    }
  });
  
  createEffect(() => {
    if (_isMenuOpen()) {
      _setIsSearchOpen(false);
    }
  });

  // スクロール制御
  createEffect(() => {
    document.body.style.overflow = (_isSearchOpen() || _isMenuOpen()) ? "hidden" : "auto";
  });
});