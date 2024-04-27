import AppleWatch from '../assets/apple-watch.png'
import ShoppingBag from '../assets/shopping-bag.svg'

import '../style/_card.scss'


const Card = () => {

  return (
    <>
      <section className="cardComponent">
        <div className="productCardDetails">
          <img src={AppleWatch} alt="Apple Watch" className="productImage" />
          <div className="productTitleAndPrice">
            <div className="productTitleContainer">
              <span className="productTitle">Apple Watch Series 4 GPS</span>
            </div>
            <div className="productPriceContainer">
              <span className="productPriceLabel">R$399</span>
            </div>
          </div>
          <div className="productDescContainer">
            <span className="productDesc"> Redesigned from scratch and completely revised.</span>
          </div>
        </div>
        <div className="buyButtonContainer">
          <button className="buyButton">
            <img src={ShoppingBag} alt="" className="shoppingBagIcon" />
            <span className="buyButtonLabel">Comprar</span>
          </button>
        </div>
      </section>
    </>
  )
}

export default Card