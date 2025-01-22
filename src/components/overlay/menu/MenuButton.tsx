import { toggleMenu, isMenuOpen, isClosing } from "../overlay";

export function MenuButton() {
  return (
    <button class="btn-menu size-otdm-btn" onClick={toggleMenu}>
      <div class="relative h-1em w-1em overflow-hidden">
        <div class={`absolute property-all duration-300 ease-in-out ${
          isMenuOpen() && !isClosing() ? '-translate-x-full opacity-0 invisible' : 'translate-x-0'
          }`}>
          <div class="i-tabler:menu-2 size-1em" />
        </div>
        <div class={`absolute property-all duration-300 ease-in-out ${
          isMenuOpen() && !isClosing() ? 'translate-x-0' : 'translate-x-full opacity-0 invisible'
          }`}>
        <div class="i-tabler:x size-1em" />
        </div>
      </div>
    </button>
  )
}