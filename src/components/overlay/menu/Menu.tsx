import { Modal } from "@/components/utils/Modal";
import { toggleMenu } from "../../header/overlay";

export default function Menu(){
  return(
    <Modal toggleOpen={toggleMenu}>
      <div class="text-docs-head">
        
      </div>
    </Modal>
  )
}