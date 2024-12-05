import { Show } from "solid-js";
import { isMenuOpen, toggleMenu } from "../overlay";
import Menu from "./Menu";

export default function MenuButton(){
  return(
    <>
      <button class="btn-menu" onClick={toggleMenu}>
        <div class="i-tabler:menu-2 size-1em"></div>
      </button>
      <Show when={isMenuOpen()}>
        <Menu/>
      </Show>
    </>
  )
}