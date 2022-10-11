import Card from "../UI/Card";
import classes from "./modal.module.css";
const Modal = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClose}>
    <Card CardClass={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.message}>
        <h3>{props.message}</h3>
      </div>
      <footer className={classes.actions}>
        <button onClick={props.onClose}>Okay</button>
      </footer>
    </Card>
    </div>
  );
};

export default Modal;
