import styles from "./body.module.css";
import Main from "./Body";
const Cards=(props) =>{

    return(
        <>
         <div className={styles.fnote}>
                <p className={styles.ptag}>{props.title}</p>
                <p>{props.content}</p>
                <button type="submit" className={styles.Badd}>Add</button>
            </div>
        </>
    )
}
export default Cards;