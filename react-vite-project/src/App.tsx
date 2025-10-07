
import { createElement } from 'react'
import './App.css'
import Products from './product';

function App() {

  const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 2,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg',
      imageAlt: "Front of men's Basic Tee in white.",
      price: '$35',
      color: 'Aspen White',
    },
    {
      id: 3,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg',
      imageAlt: "Front of men's Basic Tee in dark gray.",
      price: '$35',
      color: 'Charcoal',
    },
    {
      id: 4,
      name: 'Artwork Tee',
      href: '#',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg',
      imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
      price: '$35',
      color: 'Iso Dots',
    },
  ];

  function callme(data?:any){
    if(data)
      alert(data)
    else
     alert('HIiii')
  }
  return (
    <>
      {/* <div>
        <h1 className="text-blue-200 font-bold underline">Helooo there</h1>
        <h2>how are you?........

        </h2> */}
        {/* we have to pass function deffination not calling */}
        {/* <button onClick={()=>callme()}>Click</button>
        <button onClick={()=>callme("Hello")}>Click</button>
      </div> */}
      <Products products={products}/>
    </>
  )
  //return createElement("div",{id:"rootDiv"},"Heloo Div");
//  return createElement(
//   "div",
//   null,
//   createElement('h1',null,"Hi there.."),
//   [1,2,3,4].map((ele:number)=>{
//     return createElement('h2',{id:{ele}},ele)
//   })
//  )
}

export default App
