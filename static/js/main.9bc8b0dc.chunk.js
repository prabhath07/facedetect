(this.webpackJsonpface=this.webpackJsonpface||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},355:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),c=n(89),r=n.n(c),i=(n(103),n(90)),l=n(91),s=n(97),u=n(96),m=(n(104),n(24),function(){return o.a.createElement("nav",{style:{display:"flex",justifyContent:"center"}},o.a.createElement("p",{class:"f2   he  black  pa3 pointer"},"Face detector"))}),p=n(92),f=n.n(p),b=n(93),h=n.n(b),d=(n(105),function(){return o.a.createElement("div",{class:"ma4 mt0"},o.a.createElement(f.a,{class:"Tilt br2 shadow-2",options:{max:25},style:{height:150,width:150}},o.a.createElement("div",{class:"Tilt-inner"},o.a.createElement("img",{class:"hi",src:h.a}))))}),g=(n(47),function(e){var t=e.url,n=e.box;return o.a.createElement("div",{class:"ce ma "},o.a.createElement("div",{class:"absolute mt2"},o.a.createElement("img",{id:"im",src:t,width:"500px",height:"auto"}),o.a.createElement("div",{class:"bounding-box",style:{top:n.top,bottom:n.bottom,left:n.left,right:n.right}})))}),E=function(e){var t=e.Oninput,n=e.Ontap;return o.a.createElement("div",null,o.a.createElement("p",{class:"f3 he ce"},"YOU GIVE A LINK I WILL GIVE U A FACE"),o.a.createElement("div",{class:"ce "},o.a.createElement("div",{class:"ba pa4 ce br3 "},o.a.createElement("input",{type:"text",class:"pa2 f4 w-150 center ",onChange:t}),o.a.createElement("button",{class:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple poi",onClick:n},"Detect"))))},v=n(94),w=n.n(v),x=n(95),O=new(n.n(x).a.App)({apiKey:"746e437b7e994ec4bffffdf1e9d6648f"}),y={particles:{number:{value:80,density:{enable:!0,value_area:800}}}},k=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).faceloc=function(e){var t=document.getElementById("im"),n=Number(t.width),a=Number(t.height);return{left:e.left_col*n,right:n-e.right_col*n,top:e.top_row*a,bottom:a-e.bottom_row*a}},e.facebox=function(t){e.setState({box:t}),console.log(e.state.box)},e.Oninput=function(t){e.setState({input:t.target.value})},e.Ontap=function(){e.setState({url:e.state.input}),O.models.predict("a403429f2ddf4b49b307e318f00e528b",e.state.input).then((function(t){return e.facebox(e.faceloc(t.outputs[0].data.regions[0].region_info.bounding_box))})).catch((function(e){return console.log(e)}))},e.state={input:"",url:"",box:{}},e}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m,null),o.a.createElement(d,null),o.a.createElement(E,{Oninput:this.Oninput,Ontap:this.Ontap}),o.a.createElement(w.a,{className:"hoo",params:y}),o.a.createElement(g,{box:this.state.box,url:this.state.url}))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},47:function(e,t,n){},93:function(e,t,n){e.exports=n.p+"static/media/Logo.0ca6bee8.png"},98:function(e,t,n){e.exports=n(355)}},[[98,1,2]]]);
//# sourceMappingURL=main.9bc8b0dc.chunk.js.map