

const UserComponent = ({id, name, status, species, gender, image}) => {
    return (
        <div className='container'>
            <ul>
                <li>{id}</li>
                <li>{name}</li>
                <li>{status}</li>
                <li>{species}</li>
                <li>{gender}</li>
            </ul>
            <img src={image} alt="image"/>
        </div>
    )
}

export default UserComponent;