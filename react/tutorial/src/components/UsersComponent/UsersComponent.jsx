
import UserCard from "../UserCard/UserCard";
import {useEffect} from "react";

export const UsersComponent = () =>{
    let users;

    useEffect(() =>{
        getUsers();
    },[])

    const getUsers = async () =>{
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/users');
            users = await response.json();
        } catch {

        }
    }



    // return(
    //     <>
    //         {users.map((user) => <UserCard key={user.id} user={user}/>)}
    //     </>
    // )
}