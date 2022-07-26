import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { useState } from "react";
// import { updateProduct } from "./productsSlice";
import { useParams } from "react-router-dom";

function SingleMovie() {

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
    const [image, setimage] = useState(product.image);
  return (
    <div class="movie-card">
  
    <div class="container shows">
      
      <a href="/"><img src={`http://localhost:8000/productImage/${image}`} alt="cover" class="cover" width="150" height="200"/></a>
          
      <div class="hero" style={{backgroundImage: `url(http://localhost:8000/productImage/${image})` , backgroundRepeat: 'no-repeat', backgroundSize: 'cover',backgroundPosition: 'center'}}>
              
        <div class="details">
        
          <div class="title1">{title} <span>PG-13</span></div>
    
          
          <fieldset class="rating">
      <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
      <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
      <input type="radio" id="star4" name="rating" value="4" checked /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
      <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
      <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
      <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
      <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
      <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
      <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
      <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
    </fieldset>
          
          <span class="likes">109 likes</span>
          
        </div> 
        
      </div> 
      
      <div class="description">
        
        <div class="column1">
          <span class="tag">{category}</span>
        </div> 
        
        <div class="column2">
          
          <p>{description}</p>
          
            <div class="avatars">
            <a href="#" data-tooltip="Person 1" data-placement="top">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar1.png" alt="avatar1" />
            </a>
            
            <a href="#" data-tooltip="Person 2" data-placement="top">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar2.png" alt="avatar2" />
            </a>
            
            
            <a href="#" data-tooltip="Person 3" data-placement="top">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar3.png" alt="avatar3" />
            </a>
            
          </div> 
          
          
          
        </div> 
      </div> 
      
     
    </div> 
  </div> 
  )
}

export default SingleMovie