import React from 'react';
import 'tachyons';
import '../Linkbar/Link.css';

const Imre=({url,box})=>{
 return (<div class ='ce ma '>
 	<div class ="absolute mt2">
 	<img id='im' src={url} width='500px' height ='auto'/>
         <div class='bounding-box' style={{top:box.top , bottom:box.bottom, left: box.left, right:box.right}}>
         </div>
         </div> 

 	</div>);
}
export default Imre;