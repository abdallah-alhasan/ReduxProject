import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { logout } from "../features/users/userSlice";

const Navbar = () => {
  let history = useHistory();
  const isLogged = useSelector((state) => state.users.isLogged);
  const dispatch = useDispatch();
  const handleLogout = () => {

    dispatch(logout());
    // history.push("/home");
    // navigate('/home' , {replace:true})
  };

  return (
    <header>
    <div className="netflixLogo">
      <NavLink id="logo" to="/home"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true" alt="Logo" /></NavLink>
    </div>      
    <nav className="main-nav">                
      <NavLink to="/home">Home</NavLink>
      <NavLink to="#tvShows">TV Shows</NavLink>
      { isLogged && <NavLink to="/productList">Manage Movies</NavLink>}
    </nav>
    <nav className="sub-nav">
      
      <NavLink to="/"><i className="fas fa-search sub-nav-logo"></i></NavLink>
      <NavLink to="/"><i className="fas fa-bell sub-nav-logo"></i></NavLink>
      {isLogged && (
        <>
        <NavLink to="/home" onClick={handleLogout}>Logout</NavLink> 
        </>
      )}
      {!isLogged && (
        <NavLink to="/login">login</NavLink> 
      )}
    </nav>      
  </header>
  );
};

export default Navbar;
