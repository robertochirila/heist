import React, { Component } from 'react';
import './App.css';
import Post from './components/Post'
import { CSSTransition } from 'react-transition-group'


/**
 * Apart from the requirements which I have received I have also added animations and improved the UI a little bit
 * I have also changed the paddings for some elements a little bit, for example the date, if this 
 * doesn't look good please tell me and I can modify the paddings
 * Bellow I have commented my code, thank you very much
 */

class App extends Component {


  constructor(props){
    super(props);
    this.state={
      posts:[],
      index:1,
      counter:0
    }
    // A good practice to bind the methods in the constructor
    // Another good practice would have been to use arrow functions in the render method
    this.rightHandler=this.rightHandler.bind(this);
    this.leftHandler=this.leftHandler.bind(this);

  }

  componentDidMount(){
    // fetch data from the file
    // return a promise
    // convert the response to json
    // update state
    // this can be applied to any number of articles
    fetch('response.json')
    .then((resp)=>{ 
      return resp.json() })
      .then((data)=>{  
        this.setState({
          posts:data.articles,
          counter:data.articles.length
        })
      })
      
    

  }

  rightHandler(){

    // clicking the right arrow triggers this
    // updates the index by 1 if the index is less than the max number of articles

    if(this.state.index!==this.state.counter){
      this.setState({index:this.state.index+1})
    }

    

  }

  leftHandler(){
    // same as the righthandler
    if(this.state.index>1){
      this.setState({index:this.state.index-1})
    }
    

  }


  render() {
    // store the posts and index
    
    const { posts } = this.state;
    const { index } = this.state;
    

    return (
      <div className="App">
      {/*
      Loop through all the posts
      Return only the article that matches the index
      Array indexing starts at 0 while index at 1
      That is why I use i+1
      */}
      { posts.map((data,i)=>{
         if(i+1===index)
         /**
          * Return the post and animate it
          */
         return <div key={i}>
           <CSSTransition
           key={i}
           in={true}
           appear={true}
           timeout={2000}
           classNames='fade'
           >
           <Post data={data} key={i}/>
           </CSSTransition>
           </div>
         
      }) }
        
        
        <ul className='App-navigation'>
          <li className='App-navitem'><h4>{this.state.index}/{this.state.counter}</h4></li>
          <li className='App-navitem' id='viewAll'><h3>VIEW ALL POSTS</h3></li>
          <li className='App-navitem' onClick={this.leftHandler}><img src='../icons/arrow.svg' id='leftArrow' className='App-arrow'></img></li>
          <li className='App-navitem' onClick={this.rightHandler}><img src='../icons/arrow.svg' className='App-arrow'></img></li>
        </ul>
        
      </div>
    );
  }
}

export default App;
