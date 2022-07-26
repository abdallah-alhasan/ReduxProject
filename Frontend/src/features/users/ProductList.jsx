import { fetchProducts, deleteProduct } from "./productsSlice";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";


export function ProductList() {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  const  {loading}  = useSelector((state) => state.products);
  const  {error} = useSelector((state) => state.products);
  
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

 

  return (
    <div className="container">
      {error && <div className="alret alert-danger" role="alert">{error}</div>}
      <div className="row">
        <h1>Manage Movies</h1>
      </div>
      <div className="row">
        {/* <div className="two columns">
          <button
            onClick={() => dispatch(fetchProducts())}
            className="button-primary"
          >
            Load users
          </button>
        </div> */}
        <div className="two columns">
          <Link to="/add-product">
            <button className="btn btn-primary mb-4">Add a movie</button>
          </Link>
        </div>
      </div>
      <div className="row">
        {loading ? (
          <span>Loading...</span> 
        ) : (
          <table className="u-full-width">
            <thead>
              <tr>
                <th>ID</th>
                  <th>title</th>
                  <th>gener</th>
                  <th>image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length &&
                products.map((product, index) => (
                  <tr  key={product.id}>
                    <td >{index + 1}</td>
                    <td>{product.title}</td>
                    <td>{product.category}</td>
                    <td><img src={"http://localhost:8000/productImage/" + product.image} alt="" srcset="" width={100} height={100} /> </td>
                    <td>
                      <button className="btn" style={{color:'white'}} onClick={() => handleDelete(product.id)}><i class="fa-solid fa-trash-can"></i></button>
                      <Link to={`/edit-product/${product.id}`}>
                        <button className="btn" style={{color:'white'}}><i class="fa-solid fa-edit"></i></button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
