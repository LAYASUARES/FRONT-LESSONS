import { useEffect, useState } from 'react'
import api from '../../services/api'
import './produtos.css'

function Produtos() {

     const [products, setProducts] = useState([])

     const getProducts = async() => {
          try {
               const response = await api.get('/products'); 

               const data = response.data.products;
               setProducts(data)
          } catch (error) {
               console.log(error)
          }
     }

     useEffect(() => {
          getProducts();
         }, [])
     



  return (
     <div className='container'>
     <div className="cards">
          {products.map((product) => (
               <div className="product" key={product.id}>
                    <img src={product.image} alt="" />
                    <p>{product.title} </p>
                    <p>{product.description}</p>
                    <h2>{product.price}</h2>
               </div>
          ))}
     </div>    
</div>

  )
}

export default Produtos