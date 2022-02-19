import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function ToDo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const deleteHandler = () => {
    // console.log(props.id);
    setModalIsOpen(true);
  };

  const backDropHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={backDropHandler} onConfirm={props.onClick} onSelect={backDropHandler} id={props.id}/>
      )}
      {modalIsOpen && <Backdrop onClick={backDropHandler} />}
    </div>
  );
}

export default ToDo;
