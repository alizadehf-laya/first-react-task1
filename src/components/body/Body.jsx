import styles from "./body.module.css";
import Notes from "../../Card";
import Cards from "./Cards";
const Main= () =>{
    return(
        <>
        <div  className={styles.note}>
           <Cards/>
        </div>
        </>
    )
}
export default Main;