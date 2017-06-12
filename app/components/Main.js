import React from 'react';
import Hole_in_the_wall from './Hole_in_the_wall';
import Mexicana from './Mexicana';
import Mago from './Mago';

function Main(props) {

  return (
    <div className="main">
      <div className="hole">

        <div className="eats e1">
          <a href={Hole_in_the_wall.url} className="wall" target="blank" rel="noopener">
            <img className="headimg" src={Hole_in_the_wall.header} alt=""/>
          </a>
          <a href={Hole_in_the_wall.menu_url} className="hole_menu" target="blank" rel="noopener">
            <img className='holeimage' src={Hole_in_the_wall.photos} alt=""/>
          </a>
        </div>

        <div className="eats e2">
          <a href={Mexicana.url} className="mex_web" target="blank" rel="noopener">
            <img src={Mexicana.header} alt="" className="mexhead"/>
          </a>
          <a href={Mexicana.menu_url} className="mex_menu" target="blank" rel="noopener">
            <img className='meximage' src={Mexicana.photos} alt=""/>
          </a>
        </div>

        <div className="eats e3">
          <a href={Mago.url} className="mago_web" target="blank" rel="noopener">
            <img src={Mago.header} alt="" className="magohead"/>
          </a>
          <a href={Mago.menu_url} className="mago_menu" target="blank" rel="noopener">
            <img className='magoimage' src={Mago.photos} alt=""/>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Main;
