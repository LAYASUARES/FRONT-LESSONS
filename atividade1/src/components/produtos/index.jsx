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
               console.log(data)
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
              <img src={product.thumbnail} alt="produto_img" />
              <div className="products_info">
                   <p>{product.title}</p>
                   <p>{product.brand}</p>
                   <h1>{product.price}</h1>
              </div>
             </div>
          ))}
     </div>    
</div>

  )
}

export default Produtos