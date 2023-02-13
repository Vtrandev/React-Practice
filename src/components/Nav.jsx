import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home </Link><br />
      <Link to='/about'>About</Link><br />
      <Link to="/users/ronaldo">Ronaldo </Link><br />
      <Link to="/users/messi">Messi</Link><br />
      <Link to="/users/br4gg">David </Link><br />
    </nav>
  )
}

export default Nav;
