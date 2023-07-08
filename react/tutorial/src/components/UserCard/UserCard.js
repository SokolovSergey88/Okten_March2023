import styles from './UserCard.module.css'

const UserCard = (props) => {
    const {user} = props;
    return (
        <div className={styles.wrapper}>
            <h1 style={{
                textAlign: 'start'
            }}>{user.name}</h1>
            <h2 style={{
                textAlign: 'start'
            }}>{user.username}</h2>
            <p>{user.phone}</p>
        </div>
    )
}



export default UserCard;










