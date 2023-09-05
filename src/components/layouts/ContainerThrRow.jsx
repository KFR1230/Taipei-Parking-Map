import Header from "../basics/Header"
import Footer from "../basics/Footer"
const ContainerThrRow = ({children})=>{
  return (
    <div className="contanier-row">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
export default ContainerThrRow