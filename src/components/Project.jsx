const Proyect=({img, alt, title, text})=>{
 return(
  <div class='proyects-item'>
    <img src={img} alt={alt}/>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
 )
}
export default Proyect;