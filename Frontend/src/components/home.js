import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';

import { Link } from "react-router-dom";


const Home = ()=>{

const products = useSelector((state)=>state.products.products);

const showItems = products.map((product)=>{
    return(
        // <Link to={`/movie/${product.id}`}>
        //                 <button className="btn btn-primary">sss</button>
        //               </Link>
    <Link to={`/movie/${product.id}`}><img src={"http://localhost:8000/productImage/" + product.image} height={200} alt="movie" /></Link> 
    )
});

    return(
        <section className="main-container" >
        <div className="location" id="home">
            <h1 id="popular">Popular on Netflix</h1>
            <div className="box">
                {showItems}
            </div>
        </div>
        
        
        {/* <h1 id="trending">Trending Now</h1>
        <div className="box">
            {moviesList}
        </div>
        
        <h1 id="tvShows">TV Shows</h1>
        <div className="box">
            {tvList}           
        </div> */}
        </section>
    )
}

export default Home;