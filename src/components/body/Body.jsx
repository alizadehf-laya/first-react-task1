import styles from "./body.module.css";
import Notes from "../../Card";
import Cards from "./Cards";
const Main= () =>{
   
    const uniqcard= () =>{
        <Cards title={Notes[0].title} content={Notes[0].content}/>
    }
    return(
        <>
        <div  className={styles.note}>
        {Notes.map(uniqcard)}
           {/* <Cards title={Notes[0].title} content={Notes[0].content}/>
           <Cards title={Notes[1].title} content={Notes[1].content}/>
           <Cards title={Notes[2].title} content={Notes[2].content}/>
           <Cards title={Notes[3].title} content={Notes[3].content}/> */}
        g
        </div>
        </>
    )
}
export default Main;