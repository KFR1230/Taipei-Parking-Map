import Footer from "../basics/Footer"
import Header from "../basics/Header"

const ContainerThrRow = ({children})=>{
  return (
    <div className="contanier-row">
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  )
}
export default ContainerThrRow