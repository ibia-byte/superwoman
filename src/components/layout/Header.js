import React from "react";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
function Header() {
  return (
    <header style={headerStyle}>
      <h1>MovieLib</h1>
      <Link to="/">Home</Link>| <Link to="/About">About</Link>
    </header>
  );
}
const headerStyle = {
  background: "orange",
  color: "fff",
  textAlign: "center",
  padding: "10px"
};
export default Header;
