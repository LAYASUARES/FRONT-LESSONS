import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from '../../services/api'

function Produto() {

     const {id} = useParams()
     const [product, setProduct] = useState('')
     const [productList, setProductList] = useState([])

     useEffect(() => {
          api.get(`/products/${id}`)
          .then((response) => {
               setProduct(response.data)
          })
          .catch((error) => {
               console.log(error)
          })

     }, [id])

     useEffect(() => {
          api.get('/products')
          .then((response) => {
               let filteredData = response.data.products.filter((item) => item.id !== Number(id)).slice(0, 4)
               setProductList(filteredData)
          })
          .catch((error) => {
               console.log(error)
          })
     })

  return (
    <div className="main">

    {product && <div className="produto">
     <div className="produto_img">
          <img src={product.thumbnail} alt="" />
     </div>
     <div className="produto_info">
          <p>{product.title}</p>
          <p>{product.brand}</p>
          <h1>{product.price}</h1>
          <div className="produto_description">
          <p>{product.description}</p>
          </div>
     </div>
    </div>
    }


    <div className="produtos">
     <div className="list_produtos4">
          {productList.map((produtos) => (
               <div className="product" key={produtos.id}>
               <img src={produtos.thumbnail} alt="produto_img" />
               <div className="products_info">
                    <p>{produtos.title}</p>
                    <p>{produtos.brand}</p>
                    <h1>{produtos.price}</h1>
               </div>
              </div>
          ))}
     </div>
    </div>
    </div>
  )
}

export default Produto