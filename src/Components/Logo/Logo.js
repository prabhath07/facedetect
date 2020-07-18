import React from 'react';
import 'tachyons';
import Tilty from "react-tilty";
import Logo2 from './Logo.png';
import './lo.css';

const Logo =()=>{
	 return(<div class ='ma4 mt0'><Tilty class='Tilt br2 shadow-2' options ={{max:25}} style ={{ height:150 , width : 150}}>
	 	<div class ='Tilt-inner'><img class='hi' src ={Logo2}/></div>
</Tilty>
</div>
);
}

export default  Logo;
