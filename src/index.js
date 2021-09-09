import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sdata from"./Sdata";

// console.log(Sdata[0].sname)


ReactDOM.render(
  <React.StrictMode>

    <h1 className="heading_style"> List of Top 3 Netflix Series</h1>
    <App imgsrc= {Sdata[0].imgsrc}
    title={Sdata[0].title}
    sname={Sdata[0].sname}
    link={Sdata[0].link}
    />

    <App imgsrc="https://m.media-amazon.com/images/M/MV5BMzM2NTAzMzYtNWVlNi00NzFmLWE3MjgtMWI5NWI2MjAzZjdmXkEyXkFqcGdeQXVyODE2MzY0ODM@._V1_.jpg"  
    title="A Original Series"
    sname="Extra curricular" 
    link="https://www.netflix.com/in/title/80990668?source=35"/>

    <App imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEsBFMg9Ue7iarn9lBRxP03x_jEbGSOjEXGQ&usqp=CAU"  
    title="A Original Series"
    sname="Stranger Thing" 
    link="https://www.netflix.com/in/title/80057281?source=35" />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
