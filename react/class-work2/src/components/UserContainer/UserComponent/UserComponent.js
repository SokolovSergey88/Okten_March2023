import styles from './UserComponent.module.css';

const UserComponent = (props) =>{
    const {user, handleClick, handleDelete} = props;
    return (
        <div className={styles.container}>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <h1>{user.phone}</h1>
            <h1>{user.address.city}</h1>
            <button onClick={()=>handleClick(user.name)}>show me</button>
            <button onClick={()=>handleDelete(user.id)}>delete me</button>
        </div>
    )
}




export default UserComponent;