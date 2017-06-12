import React from 'react';

function Header(props) {
  return(
    <div className="header">

      <p className="begingin">{props.title}!!</p>
      <div className="nav">
        <a href="home"><button className="home btn">Home</button></a>
        <a href="body"><button className="body btn">Body</button></a>
        <a href="footer"><button className="bottom btn">Footer</button></a>
      </div>
    </div>
  );
}


export default Header;
