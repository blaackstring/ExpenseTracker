import ReactDOM from 'react-dom';

function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black/50 flex  justify-center items-center z-50">
      <div className="bg-white w-[90%]  p-4 lg:w-[35vw] rounded-md flex flex-col shadow-lg  relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default Modal;
