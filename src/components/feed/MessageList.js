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
          <h1>All User</h1>
          {
                error ? <p>
          {
                    error.message
                } </p> : null}  {
                    users.map(user => {
                        const {
                            userId,
                            title,
                            body
                        } = user;
                        return (
                        <div key={userId}>
                            <p>Titre: {title}</p>
                            <p>Message: {body}</p>
                            <hr />
                        </div>
                        );
                    })
                } </React.Fragment> );
    }
  }
export default MessageList;