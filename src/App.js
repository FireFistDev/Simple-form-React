
import { useState } from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";
function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = props => {
    const rand = Math.random()
    setUsersList(user =>{ 
      return [...user,{userName:props.userName,age:props.age, key:rand} ]})
  }

  return (
    <div>
      <AddUser onSaveInfo={addUserHandler}/>
      <UserList usersItem={usersList}/>
    </div>
  );
}

export default App;
