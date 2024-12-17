import { Show } from "solid-js";
import { MenuButton } from "./MenuButton";
import { NavLink } from "./NavLink";
import { Modal } from "../Modal";
import { isMenuOpen,toggleMenu  } from "../overlay";

export default function Menu(){
  return(
    <>
      <MenuButton/>
      <Show when={isMenuOpen()}>
        <Modal sideBar toggleOpen={toggleMenu}>
        <nav class="my-6 mr-8 text-docs-head">
          <ul class="flex flex-col gap-2">
            <NavLink id="docs" />
            <NavLink id="download" />
            <NavLink id="github" />
            <NavLink id="privacy" />
            <NavLink id="terms" />
          </ul>
        </nav>
        </Modal>
      </Show>
    </>
  )
}