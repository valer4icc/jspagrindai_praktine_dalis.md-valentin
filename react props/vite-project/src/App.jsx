import './App.css'
import products from "./data"
import Product from './Product'

function App() {

    const productArray= products.map((product) => {
      return <Product title={product.title} price={product.price} onSale={product.onSale} key={product.id}/>
    })
  console.log(productArray);

  return (
    <>
    <div>
      {productArray}
    </div>
    </>
  )
}
export default App
