
import UserComponent from "./UserComponent/UserComponent";
import {useEffect, useState} from "react";


export const UserContainer = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) => setUsers(users))
            .catch()
    },[])

    const handleDelete = (id) => {
        setUsers( [...users].filter((user)=> user.id !== id))

    }

    const handleClick = (value) => {
        alert(` User id is ${value}`)
    }


    return (
        <>
            {users.map((user, id) => {
                return (
                    <UserComponent
                        key={id}
                        user={user}
                        handleClick={handleClick}
                        handleDelete={handleDelete}
                    />)
            })}
        </>)
}