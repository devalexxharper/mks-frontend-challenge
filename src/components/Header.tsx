import React from "react"
import '../style/_header.scss'

const Header = () => {

  return (
    <>
      <header className="headerContainer">
        <div className="headerLogo">
          <h2 className="headerLogoMKS">MKS</h2>
          <h2 className="headerLogoSistemas">Sistemas</h2>
        </div>
        <div className="minicartButtonContainer">
          <button className="minicartButtonItem">
            <img src="" alt="" />
            <span className="minicartCounter">0</span>
          </button>
        </div>
      </header>
    </>
  )
}

export default Header