import './App.css';
import Product from "./Product.jsx";

function App() {
  return (
    <>
      <Product idx = {0} title = "Logitech MX Master" description="8000 DPI" func="5 Programmable Buttons"></Product>
      <Product idx = {1} title = "Apple Pencil(2nd Gen)" description="Intuitive Touch Surface" func="Designed for iPad Pro"></Product>
      <Product idx = {2} title = "Zebronics" description="Designed for iPad Pro" func="Intutive Touch Surface"></Product>
      <Product idx = {3} title = "Protonics" description="Wireless Mouse 2.4GHz" func="Optical Orientation"></Product>
    </>
  )

}

export default App
