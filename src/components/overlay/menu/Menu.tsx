import { Modal } from "../Modal";
import { toggleMenu } from "../overlay";

export default function Menu(){
  return(
    <Modal toggleOpen={toggleMenu}>
      <div class="text-docs-head">
        
      </div>
    </Modal>
  )
}