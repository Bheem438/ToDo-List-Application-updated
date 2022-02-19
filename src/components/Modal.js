function Modal(props) {
  const cancelHandle = () => {
    props.onCancel();
  };
  //   const confirmHandler = () => {
  //       console.log(props.id);
  //     props.onConfirm();
  //   };

  return (
    <div className="modal">
      <p>Are tou sure</p>
      <button className="btn btn--alt" onClick={cancelHandle}>
        Cancel
      </button>
      <button className="btn" onClick={() => {
          props.onConfirm(props.id);
          props.onSelect();
      }}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
