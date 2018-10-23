import React from 'react'
import '../App.css';


/**
 * 
 * No need to use a statefull component
 * No need for lifecycle methods and state
 */

const Post=(props)=>{

    /**
     * I have created a date object with the param which I receive from props
     * I noticed that it return the time +1 day so I have subtracted 1
     * To get the name of the month instead of the number I have created the array bellow
     * I then get the index of the month and use the array to get the name
     */

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    
    const date=new Date(props.data.data_time);
    date.setDate(date.getDate()-1)
    
    const day=date.getDate();
    const month=date.getMonth();
    const year=date.getFullYear();
    //console.log("The current month is " + monthNames[month]);
    //const title=props.data.title;
    //console.log(title);

    return(
        <div className='App-item'>
        <div className='row'>
            <div className='col-6'>
            <p className='App-date'><span id='specialDate'>{day}th </span> <br></br><span id='monthYear'>{monthNames[month]} {year} </span></p>
            <img src={props.data.assets[0].image_url} className='App-image'/>
        </div>
            <div className='col-6'>
            <h2 className='App-title'>{props.data.title}</h2>
            <p className='App-body'>{props.data.body}</p>
        </div>
        </div>
        </div>
        

    ) 
    
}

export default Post;