import React from 'react'
import '../App.css';


const Post=(props)=>{

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    //console.log(props);
    const date=new Date(props.data.data_time);
    date.setDate(date.getDate()-1)
    //console.log(date);
    const day=date.getDate();
    const month=date.getMonth();
    const year=date.getFullYear();
    //console.log(day,month,year);
    //console.log("The current month is " + monthNames[month]);
    //const title=props.data.title;
    //console.log(title);

    return(
        <div className='App-item'>
        <div className='row'>
        <div className='col-4'>
            <p className='App-date'><span id='specialDate'>{day}th </span> <br></br>{monthNames[month]} {year}</p>
        </div>
            <div className='col-4'>
            <img src={props.data.assets[0].image_url} className='App-image'/>
        </div>
            <div className='col-4'>
            <h2 className='App-title'>{props.data.title}</h2>
            <p className='App-body'>{props.data.body}</p>
        </div>
        </div>
        </div>
        

    ) 
    
}

export default Post;