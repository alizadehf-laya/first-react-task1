import styles from "./body.module.css";
const Main= () =>{
    return(
        <>
        <div  className={styles.note}>
            <div className={styles.fnote}>
                <p className={styles.ptag}>Title</p>
                <p>Take a note...</p>
                <button type="submit" className={styles.Badd}>Add</button>
            </div>
        </div>
        </>
    )
}
export default Main;