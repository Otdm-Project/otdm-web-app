import { Portal } from 'solid-js/web';
import { isClosing, isMenuOpen, isSearchOpen} from './overlay';

export function Modal (props: {
  sideBar ?: boolean;
  toggleOpen: () => void;
  children?: any;
  headerItem?: any;
}) {
  const sideBarStyle = `right-0 w-80% max-w-100 h-[calc(100%-3.5rem)] border-(l-8 otdm-secondary) md:w-100 sm:(top-20)`;
  const modalStyle = `w-full h-60svh m-auto border-(b-8 otdm-secondary) sm:(top-30 inset-x-0 w-80% max-w-220 h-80svh border-8 rounded-xl)`;
  
  return (
    <Portal>
      <div
        id="modal-background"
        class={`z-5 fixed inset-0 bg-black bg-opacity-50 ${
          (isMenuOpen() || isSearchOpen()) && !isClosing() 
            ? 'animate-modal-in' 
            : 'animate-modal-out'
        }`}
        onClick={props.toggleOpen}
      />
      <div
        id="modal-results"
        class={`z-6 fixed top-14 overscroll-contain overflow-y-auto bg-docs-primary
          ${props.sideBar
            ? `${sideBarStyle} ${
              isMenuOpen() && !isClosing()
                ? 'animate-sidebar-in' 
                : 'animate-sidebar-out'
            }`
            : `${modalStyle} ${
              isSearchOpen() && !isClosing()
                ? 'animate-modal-in' 
                : 'animate-modal-out'
            }`
          }
        `}
      >
        <ModalHeader onClick={props.toggleOpen}>
          {props.headerItem}
        </ModalHeader>
        <div class="px-4 pb-4">
          {props.children}
        </div>
      </div>
    </Portal>
  );
};

function ModalHeader(props: {
  onClick: () => void;
  children?: any;
}){
  return (
    <div class={`z-7 sticky top-0 flex items-center p-4 bg-docs-primary ${props.children ? 'justify-between' : 'justify-end'}`}>
      {props.children}
      <button 
        class="p-1 rounded-lg hover:bg-docs-hover"
        onClick={props.onClick} 
        >
        <div class="i-tabler:x size-6 text-cyan-950"/>
      </button>
    </div>
  )
}