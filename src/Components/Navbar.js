import React from 'react';
import '../Style/Navbar.css';
import { withRouter, Link } from 'react-router-dom';
// function namaFunction(){}

const Navbar = props => {
  return (
    <div className="div-style">
      <p className="font-text">{props.title}</p>
      <div>
        <p className="font-nav">Navigation Panel</p>
        <ul style={{listStyle: 'none'}}>
          <Link to='/'><li>Home</li></Link>
          <Link to='/profile'><li>Profile</li></Link>
        </ul>
        <button onClick={()=>{props.history.push('/')}} >Home</button>
        <button onClick={()=>{props.history.push('/profile')}}>Profile</button>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
