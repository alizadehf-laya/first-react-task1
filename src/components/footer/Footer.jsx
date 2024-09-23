const Footer =() =>{
    var showDate=new Date();
    var displayYear=showDate.getFullYear();
    return(
        <>
        <div style={{textAlign:"center" ,display:"flex" ,color:"gray" ,marginLeft :"550px"}}>
        <h2>copyright  {"  @  "}</h2>
        <h2>{displayYear} </h2>
        </div>

        </>
    )
}
export default Footer;