import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Card from "./components/Card"
import cardData from './data'

function App() {

  const cardItems = cardData.map(item => {
    return <Card key={item.id} item={item} />
  } )

  console.log(cardItems);

  return (
    <div className="page-container">
      <Navbar/>
      <Banner/>
      <div className="card-container d-flex">
        {cardItems}
      </div>
    </div>
  )
}

export default App
