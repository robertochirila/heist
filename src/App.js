import React, { Component } from 'react';
import './App.css';
import Post from './components/Post'
import { CSSTransition } from 'react-transition-group'

class App extends Component {


  constructor(props){
    super(props);
    this.state={
      posts:[],
      index:1,
      counter:0
    }

    this.rightHandler=this.rightHandler.bind(this);
    this.leftHandler=this.leftHandler.bind(this);

  }

  componentDidMount(){

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

    if(this.state.index!==this.state.counter){
      this.setState({index:this.state.index+1})
    }

    

  }

  leftHandler(){

    if(this.state.index>1){
      this.setState({index:this.state.index-1})
    }
    

  }


  render() {

    const { posts } = this.state;
    const { index } = this.state;
    

    return (
      <div className="App">
      
      { posts.map((data,i)=>{
         if(i+1===index)
         
         return <div key={i}>
           <CSSTransition
           key={i}
           in={true}
           appear={true}
           timeout={1000}
           classNames='fade'
           >
           <Post data={data} key={i}/>
           </CSSTransition>
           </div>
         
      }) }
        
      
        <ul className='App-navigation'>
          <li className='App-navitem'><h4>{this.state.index}/{this.state.counter}</h4></li>
          <li className='App-navitem'><h3>VIEW ALL POSTS</h3></li>
          <li className='App-navitem' onClick={this.leftHandler}><img src='../icons/arrow.svg' id='leftArrow' className='App-arrow'></img></li>
          <li className='App-navitem' onClick={this.rightHandler}><img src='../icons/arrow.svg' className='App-arrow'></img></li>
        </ul>
        
      </div>
    );
  }
}

export default App;
