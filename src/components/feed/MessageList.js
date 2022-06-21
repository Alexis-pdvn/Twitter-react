import React from 'react';

class MessageList extends React.Component {
  
    //  getFetchUsers() {
    //      this.setState({
    //      }, () => {
    //          fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(json =>this.setState({tweets:json}))({
    //          }).catch(console.log);
    //      });
    //  }
    //  componentDidMount() {
    //      this.getFetchUsers();
    //  }
  
render() {
    let liste = this.props.tweets.map((item, index) => {
        return (
            <>
        <div className='feeditemlist'>
            <p>User : { item.title }</p>
            <p>Message : { item.body }</p>
        </div>
            </>
        )
    })

    return (
        <>
            {liste}
        </>
    )
    }
  }
export default MessageList;