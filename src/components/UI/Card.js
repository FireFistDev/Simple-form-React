import classes from "./Card.module.css";
const Card = (props) => (
  <div className={`${classes.card} ${props.CardClass}`}>{props.children}</div>
);

export default Card;
