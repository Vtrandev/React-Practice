import "./Modal.css";

function Modal({ title, todoDelete }) {
  return (
    // <>  empty fragment
    <>
      <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
          <button
            className="btn btn__cancel"
            onClick={todoDelete}
          >
            Cancel
          </button>
          <button className="btn" onClick={todoDelete}>
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
