import React from 'react';
import 'tachyons';
import './Link.css';

const Link=({Oninput,Ontap})=>{
 return (<div>
           <p class='f3 he ce'>
           YOU GIVE A LINK I WILL GIVE U A FACE
           </p>
           <div class='ce '>
           <div class ='ba pa4 ce br3 '>
           
           <input type="text" class="pa2 f4 w-150 center " onChange={Oninput}/>
           <button class ="w-30 grow f4 link ph3 pv2 dib white bg-light-purple poi" onClick={Ontap} >Detect</button>
           </div></div>



 	</div>)







}
export default Link;