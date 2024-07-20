import { useState } from 'react'
import './App.css'

function App() {
  const [price,setPrice] = useState(0)
  const [discount,setDiscount] = useState(0)
  const [vat,setVat] = useState(0)
  const [gorssPrice,setGrossPrice] = useState(0)


  function handlePrice(e){
    let priceValue = e.target.value;
    setPrice(priceValue);
    calculateVat(priceValue,discountValue)
  }

  function handleDiscount(e){
    let discountValue = e.target.value;
    setDiscount(discountValue);
    calculateVat(priceValue,discountValue)
  }
  function calculateVat(priceValue,discountValue){
    let gorssPrice = priceValue-discountValue;
    let vat = gorssPrice * 0.07 
    setGrossPrice(gorssPrice)
    setVat(vat.toFixed(2))
  }



  return (
    <>
      <p style={{fontSize: '30pt'}}>Price:
        <input type="number"
          style={{fontSize: '30pt'}}
          onChange={handlePrice}
          value={price}/>
      </p>
      
      <p style={{fontSize: '30pt'}}>Discount:
        <input type="number"
          style={{fontSize: '30pt'}}
          onChange={handleDiscount} 
          value={discount}/>
      </p>
      <h1>GP = {price-discount}</h1>
      <h1>Discount = {discount}</h1>
      <h1>Price = {price}</h1>
      <h1>VAT = {(price-discount)*0.07}</h1>

    </>
  )
}

export default App
