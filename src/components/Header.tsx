import { useState } from 'react'
import MinicartIcon from '../assets/minicart.svg'
import Minicart from './Minicart'
import '../style/_header.scss'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMinicart = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header className="headerContainer">
        <div className="headerLogo">
          <h2 className="headerLogoMKS">MKS</h2>
          <h2 className="headerLogoSistemas">Sistemas</h2>
        </div>
        <div className="minicartButtonContainer">
          <button className="minicartButtonItem" onClick={toggleMinicart}>
            {isOpen ? " " : " "}
            <img src={MinicartIcon} alt="Add to cart" className='minicartButtonIcon' />
            <span className="minicartCounter">0</span>
          </button>
        </div>
        {isOpen && (
          <div className="minicartWrapper">
            <Minicart onClickButton={toggleMinicart} />
          </div>
        )}
      </header>
    </>
  )
}

export default Header