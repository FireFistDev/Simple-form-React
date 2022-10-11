import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import { useState } from "react";
import Modal from "../modal/Modal";

const AddUser = (props) => {
    const[userInfo,setUserInfo] = useState({
        userName:'',
        age:''
    })
    const [errorR, setError] =useState('')
    const nameHendler =(e)=>{
        setUserInfo({
            ...userInfo,
            userName:e.target.value.trim()
        })
    }
    const ageHendler =(e)=>{
        setUserInfo({
            ...userInfo,
            age:e.target.value.trim()
        })
    }
    const submitHendler= (e)=>{
        e.preventDefault()
        if(userInfo.userName.length < 1 || +userInfo.age < 1){
            console.log(`not valid`)
            setError({title:'Error', message:'enter valid information'})
            return 
        }
        props.onSaveInfo(userInfo)

        setUserInfo({
            userName:'',
            age:''

        })
    
    }
    const closeModal = ()=>{
        setError('')
    }

    return (
        <div>
         {errorR && <Modal title={errorR.title} message={errorR.message} onClose={closeModal} ></Modal>}  
        <Card CardClass={classes.input}>
        <form  onSubmit={submitHendler}>
            <label htmlFor="useName">UserName</label>
            <input value={userInfo.userName} onChange={nameHendler} id="userName" type='text'/>
            <label htmlFor="age">Age(Years)</label>
            <input value={userInfo.age} onChange={ageHendler} id="age"type='number'/>
            <button>Add User</button>
        </form>
        </Card>
        </div>
    );
};

export default AddUser;
