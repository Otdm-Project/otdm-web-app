import { Portal } from 'solid-js/web';
import { isClosing, isMenuOpen, isSearchOpen} from './overlay';

export function Modal (props: {
  sideBar ?: boolean;
  toggleOpen: () => void;
  children?: any;
}) {
  const sideBarStyle = `right-0 w-80% max-w-100 h-[calc(100%-3.5rem)] border-(l-8 otdm-secondary) md:w-100 sm:(top-20)`;
  const modalStyle = `w-full h-70vh m-auto border-(b-8 otdm-secondary) sm:(top-30 inset-x-0 w-80% max-w-220 h-80vh border-8 rounded-xl)`;
  
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
        class={`z-6 fixed top-14 p-5 overscroll-contain overflow-y-auto bg-docs-primary
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
      <XButton onClick={props.toggleOpen} />
      {props.children}
      </div>
    </Portal>
  );
};

function XButton(props: {
  onClick: () => void;
}) {
  return (
    <button 
      class="absolute top-3 right-3 p-1 rounded-lg hover:bg-docs-hover"
      onClick={props.onClick} 
      >
      <div class="i-tabler:x size-8 sm:size-6 text-cyan-950"/>
    </button>
  )
}