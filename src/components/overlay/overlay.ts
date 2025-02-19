import { createEffect, createSignal, createRoot } from 'solid-js';

const [_isSearchOpen, _setIsSearchOpen] = createSignal(false);
const [_isMenuOpen, _setIsMenuOpen] = createSignal(false);
const [_isClosing, _setIsClosing] = createSignal(false);

export const isSearchOpen = _isSearchOpen;
export const isMenuOpen = _isMenuOpen;
export const isClosing = _isClosing;

const waitForAnimation = () => {
  const results = document.getElementById('modal-results');
  const background = document.getElementById('modal-background');

  if (!results || !background) {
    console.warn('Animation elements not found');
    return Promise.resolve();
  }

  return Promise.all([
    new Promise<void>(resolve => {
      results.addEventListener('animationend', () => {
        resolve();
      }, {once: true});
    }),
    new Promise<void>(resolve => {
      background.addEventListener('animationend', () => {
        resolve();
      }, {once: true});
    })
  ]);
}

export async function toggleSearch() {
  if(_isSearchOpen()){
    _setIsClosing(true);
    await waitForAnimation()
    _setIsClosing(false);
    _setIsSearchOpen(false);
  } else {
    _setIsSearchOpen(true);
  }
}

export async function toggleMenu() {
  if(_isMenuOpen()){
    _setIsClosing(true);
    await waitForAnimation()
    _setIsClosing(false);
    _setIsMenuOpen(false);
  } else {
    _setIsMenuOpen(true);
  }
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