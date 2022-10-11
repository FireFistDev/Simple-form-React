import Card from "../UI/Card";
import classes from './UserList.module.css'
const UserList = (props) => {


  return (
    <Card CardClass={classes.users} >
        <ul>
            {props.usersItem.map(e => <li key={e.key}>{e.userName} , {e.age} years old</li>)}
        </ul>
    </Card>
  );
};

export default UserList;
