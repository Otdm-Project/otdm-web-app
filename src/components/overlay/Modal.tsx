import { Portal } from 'solid-js/web';

const sideBarStyle = "border-(l-8 otdm-secondary) sm:(top-20 right-0 w-50vw) animate-sidebar";
const modalStyle = "border-(8 otdm-secondary) sm:(top-30 inset-x-0 w-80vw h-80vh rounded-xl) animate-modal";

export function Modal (props: {
  sideBar ?: boolean;
  toggleOpen: () => void;
  children?: any;
}) {
  return (
    <Portal>
      <div
        class="z-5 fixed inset-0 bg-black bg-opacity-50 animate-modal"
        onClick={props.toggleOpen}
      />
      <div 
        id="results"
        class={`
          z-6 fixed top-20 w-full h-[calc(100%-5rem)] m-auto p-5 overscroll-contain bg-docs-primary
          ${props.sideBar ? sideBarStyle : modalStyle}
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