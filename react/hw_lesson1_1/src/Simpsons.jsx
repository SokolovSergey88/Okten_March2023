import styles from "./Simpsons.module.css"

const Simpsons = ({name, surname, age, gender, img}) =>{
    return(
        <>
            <div className={styles.container}>
                <h1>Ім'я {name} прізвище {surname}</h1>
                <h6>вік {age}</h6>
                <h6>стать {gender}</h6>
                <img className={styles.img} src={img} alt="image"/>
            </div>
        </>
    )
 }











 export default Simpsons;