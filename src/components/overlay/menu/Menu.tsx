import { Modal } from "../Modal";
import { toggleMenu } from "../overlay";
import { navLinks } from "@/data/navLinks";
import { docsList } from "@/components/utils/docsList";
import { createSignal } from "solid-js";

export default function Menu(){
  return(
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
  )
}

function NavLink(props: {id: string}) {
  const navItem = navLinks[props.id];
  const [open, setOpen] = createSignal(false);
  return (
    <div>
      {props.id==="docs" ? (
        //ドキュメントをアコーディオンで表示
        //疑似要素-webkit-details-markerを使用したくない為、divで代用
        <div>
          <div
            class="flex gap-1 px-4 py-2 items-center rounded-lg hover:bg-docs-hover cursor-pointer"
            onClick={() => setOpen(!open())}
          >
            <div class="i-tabler:chevron-down -ml-4"
            classList={{ "transform rotate-180": open() }}
            />
            {navItem.name}
          </div>
          <div
            class="grid overflow-hidden transition-all duration-300"
            classList={{ "grid-rows-[0fr]": !open(), "grid-rows-[1fr]": open() }}
          >
            <div class="min-h-0">
              <DocsNavLink />
            </div>  
          </div>
        </div>
      ) : (
        <li class="px-4 py-2 rounded-lg hover:bg-docs-hover">
          <a
            href={navItem.href}
            {...navItem.blank && {target: "_blank", rel: "noopener"}}
          >
            {navItem.name}
          </a>
        </li>
      )}
    </div>
  )
}

function DocsNavLink() {
  const docs = docsList();
  return (
    <div class="ml-4">
      {docs.map((doc) => (
        <li class="p-2 mt-2 rounded-lg hover:bg-docs-hover">
          <a href={doc.url}>{doc.frontmatter.header}</a>
        </li>
      ))}
    </div>
  )
}