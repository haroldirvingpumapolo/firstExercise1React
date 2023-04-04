import logoWalmart from "../assets/Logos/Walmart.svg"
import logoMorgan from "../assets/Logos/JPMorgan.svg"
import logoVisa from "../assets/Logos/Visa.svg"
import logoTinder from "../assets/Logos/Tinder.svg"
import logoSamsung from "../assets/Logos/Samsung.svg"
import logoVerizon from "../assets/Logos/Verizon.svg"
const Brands=()=>{
  const logos=[logoWalmart, logoMorgan, logoVisa, logoTinder, logoSamsung, logoVerizon]
  const arrLogos= logos.map((e)=>{
   return <img src={e} alt={e.split("/")[4]}></img>
  })
  return(
    <div class="brands">
      {arrLogos}
    </div>
   )
}
export default Brands;