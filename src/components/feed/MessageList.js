import React from 'react';

class MessageList extends React.Component {
    
      state = {
        isLoading: true,
        users: [],
        error: null
    };
  
    getFetchUsers() {
        this.setState({
            loading: true
        }, () => {
            fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(result => this.setState({
                loading: false,
                users: result
            })).catch(console.log);
        });
    }
    componentDidMount() {
        this.getFetchUsers();
    }
  
    render() {
        const {
            users,
            error
        } = this.state;
        return (
          <React.Fragment>
          {
                error ? <p>
          {
                    error.message
                } </p> : null}  {
                    users.map(user => {
                        const {
                            title,
                            body
                        } = user;
                        return (
                        <div className='feeditemlist'>
                            <p>User: {title}</p>
                            <p>Message: {body}</p>
                        </div>
                        );
                    })
                } </React.Fragment> );
    }
  }
export default MessageList;