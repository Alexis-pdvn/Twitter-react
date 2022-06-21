import './App.css';
import Feed from './components/feed/feed';
import Menu from './components/menu/menu';
import Trend from './components/trend/trend';
import React from "react";
class App extends React.Component {
  state = {
    tweets: [],
 };
getFetchUsers() {
  this.setState({
  }, () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(json =>this.setState({tweets:json}))
  })
  console.log(this.state.tweets)
}

addTweet(NewValeur) {
  let NewValue = [{
    title: 'test' ,
    body: NewValeur
  }]
  
  let NewTableau = NewValue.concat(this.state.tweets);
  this.setState({
   tweets: NewTableau
})
console.log('ok')
}
componentDidMount() {
  this.getFetchUsers();
}
render() {
  
  return (
    <>
    <div className='container main'>
       <Menu />
       <Feed tweets={this.state.tweets} addTweet={(NewValeur)=>this.addTweet(NewValeur)}/>
       <Trend />
    </div>
    </>
  );
} 
}


export default App;

