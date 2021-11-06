import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </>
  );
}
export default NavBar;