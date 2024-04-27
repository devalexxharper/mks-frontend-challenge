import React, { MouseEventHandler } from "react";
import '../style/_minicart.scss'
interface MinicartProps {
  onClickButton?: MouseEventHandler<HTMLButtonElement> | undefined;
}
const Minicart: React.FC<MinicartProps> = ({ onClickButton }) => {

  return (
    <>
      <aside className="minicartContainer">
        <header className="minicartHeader">
          <span className="minicartHeaderTitle">Carrinho <br /> de compras</span>
          <button onClick={onClickButton} className="closeCartIcon">X</button>
        </header>
        <main className="minicartBody">
        </main>
        <footer className="minicartFooter">
          <div className="minicartTotalizer">
            <span className="title">Total: </span>
            <span className="totalValue"></span>
          </div>
          <div className="finishOrder">
            <button className="finishOrderButton">
              <span className="finishOrderLabel">Finalizar Pedido</span>
            </button>
          </div>
        </footer>
      </aside>
    </>
  )
}

export default Minicart