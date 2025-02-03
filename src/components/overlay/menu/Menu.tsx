import { Show } from "solid-js";
import { MenuButton } from "./MenuButton";
import { Modal } from "../Modal";
import { isMenuOpen,toggleMenu  } from "../overlay";
import { MenuItems } from "./MenuItems";

export default function Menu(){

  return(
    <>
      <MenuButton/>
      <Show when={isMenuOpen()}>
        <Modal sideBar toggleOpen={toggleMenu}>
          <MenuItems/>
        </Modal>
      </Show>
    </>
  )
}