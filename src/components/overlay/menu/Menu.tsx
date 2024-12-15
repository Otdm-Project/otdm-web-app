import { Modal } from "../Modal";
import { toggleMenu } from "../overlay";
import { navLinks } from "@/data/navLinks";
import { docsList } from "@/components/utils/docsList";

export default function Menu(){
  return(
    <Modal sideBar toggleOpen={toggleMenu}>
      <nav class="px-4 py-6 text-docs-head">
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
  return (
    <>
      {props.id==="docs" ? (
        <details>
          <summary class="px-2 py-1 rounded-lg hover:bg-docs-hover">
            <a href={navItem.href}>{navItem.name}</a>
          </summary>
          <DocsNavLink />
        </details>
      ) : (
        <li class="px-2 py-1 rounded-lg hover:bg-docs-hover">
          <a
            href={navItem.href}
            {...navItem.blank && {target: "_blank", rel: "noopener"}}
          >
            {navItem.name}
          </a>
        </li>
      )}
    </>
  )
}

function DocsNavLink() {
  const docs = docsList();
  return (
    <div class="flex flex-col gap-2 mt-2 ml-4">
      {docs.map((doc) => (
        <li class="px-2 py-1 rounded-lg hover:bg-docs-hover">
          <a href={doc.url}>{doc.frontmatter.header}</a>
        </li>
      ))}
    </div>
  )
}