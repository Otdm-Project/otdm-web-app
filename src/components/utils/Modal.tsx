import { Portal } from 'solid-js/web';

export function Modal (props: {
  handleVisible: () => void;
  children?: any;
}) {
  return (
    <Portal>
      <div
        class="z-5 fixed inset-0 bg-black bg-opacity-50"
        onClick={props.handleVisible}
      />
      <div
        id="results"
        class="z-6 fixed top-20 left-0 right-0 w-full h-[calc(100%-5rem)] m-auto p-5 overscroll-contain bg-docs-primary border-(8 otdm-secondary) sm:(w-80vw h-80vh top-30 rounded-xl)"
      >
      <XButton onClick={props.handleVisible} />
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