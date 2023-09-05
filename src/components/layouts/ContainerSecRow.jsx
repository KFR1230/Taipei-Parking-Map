import Header from '../basics/Header';

const ContainerTwoRow = ({ children }) => {
  return (
    <div className="contanier-row">
      <Header />
      {children}
    </div>
  );
};
export default ContainerTwoRow;
