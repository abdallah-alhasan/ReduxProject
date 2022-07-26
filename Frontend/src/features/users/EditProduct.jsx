import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { useState } from "react";
import { updateProduct } from "./productsSlice";
import { useParams } from "react-router-dom";

export function EditProduct() {
  // const { pathname } = useLocation();
  const {id} = useParams();
  // console.log(id)
  // const userId = parseInt(pathname.replace("/edit-user/", ""));

  const product = useSelector((state) =>
  // console.log(state.products.products)
    state.products.products.find((product) => product.id === +id)
  );
  // console.log(product)

  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [category, setCategory] = useState(product.category);

//   const handleName = (e) => setName(e.target.value);
//   const handleEmail = (e) => setEmail(e.target.value);

  // const usersAmount = useSelector((state) => state.users.products.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData =  {
      id: +id,
      title: title,
      // price: price,
      description: description,
      image: 'https://i.pravatar.cc',
      category: category
      }
      dispatch(
        updateProduct(productData)
      );

    //   setError(null);
      history.push("/productList");
   

      setTitle("");
      setPrice(0);
      setDescription('');
      setCategory('');
  };

  return (
<form class="my-form" onSubmit={handleSubmit} >
<div class="container">
  <h1 class="ms-4">Update movie: <span>{product.title}</span></h1>
  <ul>
    <li>
        <input type="text"
            placeholder="title"
            id="title"
            onChange={(e)=>setTitle(e.target.value)}
            value={title}/> 

        {/* <input 
            type="number"
            placeholder=""
            id="price"
            min="0.0"
            step='0.01'
            onChange={(e)=>setPrice(e.target.value)}
            value={price} /> */}
    </li>
    <li>
    </li>    
    <li>
      <input type="text"
            placeholder=""
            id="description"
            onChange={(e)=>setDescription(e.target.value)}
            value={description}  />
    </li>   
    {/* <li>
        <div class="grid grid-2">
          <input type="file" name='image' required>  
        </div>
      </li> */}
    <li>
      <div class="grid grid-3">
          <button class="btn-grid"  >
              <span class="back">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg" alt=""/>
                </span>
                <span class="front">SUBMIT</span>
            </button>
      </div>
      
    </li>    
  </ul>
</div>
</form> 
  );
}
