import Header from "../components/Header"
import Footer from "../components/Footer"
import CardsSession from "../components/CardSession"

const Homepage = () => {

  return (
    <>
      <main className="mainContent"> {/* classe declarada no arquivo src/style/global.scss */}
        <Header />
        <CardsSession />
        <Footer />
      </main>
    </>
  )
}

export default Homepage