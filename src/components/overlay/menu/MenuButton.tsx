import { toggleMenu, isMenuOpen, isClosing } from "../overlay";

export function MenuButton() {
  return (
    <button class="relative btn-menu sm:shadow-md size-otdm-btn overflow-hidden" onClick={toggleMenu}>
      <div class={`absolute inset-0 grid place-content-center property-all duration-300 ease-in-out ${
        isMenuOpen() && !isClosing() ? '-translate-x-full opacity-0 invisible' : 'translate-x-0'
        }`}>
        <div class="i-tabler:menu-2 size-otdm-icon" />
      </div>
      <div class={`absolute inset-0 grid place-content-center property-all duration-300 ease-in-out ${
        isMenuOpen() && !isClosing() ? 'translate-x-0' : 'translate-x-full opacity-0 invisible'
        }`}>
        <div class="i-tabler:x size-otdm-icon" />
      </div>
    </button>
  )
}