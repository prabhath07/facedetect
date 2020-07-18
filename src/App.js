import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Logo from './Components/Logo/Logo';
import Imre from './Components/Imre/Imre';

import Link from './Components/Linkbar/Link';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


//const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: '746e437b7e994ec4bffffdf1e9d6648f'
});

const pro={"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}}}}
class  App extends React.Component {

constructor(){

super()
this.state={
  input:'',
  url:'',
  box:{}
}

}

faceloc=(data)=>{
     const image= document.getElementById('im');
      const width = Number(image.width);
     const height =Number(image.height);
      return{
        left:data.left_col*width,
        right:width-(data.right_col*width),
        top:data.top_row*height,
        bottom:height-(data.bottom_row*height)
      }

}


facebox=(loc)=>{
   this.setState({ box:loc});
    console.log(this.state.box);


}





Oninput=(event)=>{
  this.setState({ input:event.target.value});
  //console.log('hello');
}
Ontap=()=>{
 // console.log('helloooo');
   this.setState({ url:this.state.input});

app.models.predict("a403429f2ddf4b49b307e318f00e528b",
 this.state.input).then(response => 
     this.facebox(this.faceloc(response.outputs[0].data.regions[0].region_info.bounding_box)))
.catch(err=>console.log(err))

}
      // do something with response
    
   

  render(){
  return (<div>

<Navbar/>
<Logo/>
<Link Oninput={this.Oninput}
Ontap={this.Ontap}/>
<Particles  
className ='hoo' params={pro}/>
<Imre box={this.state.box} url={this.state.url}/>
    </div>)
    
  
}}

export default App;
