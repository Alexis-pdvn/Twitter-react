import React from "react";
import MessageList from "./MessageList";

class Feed extends React.Component{
    state = {
        texte: '',
     };
    handleChange(e){
        console.log(e)
        this.setState({
            texte: e.target.value
          })
          console.log(this.state.texte)
    }
    render(){
        console.log(this.props.tweets);
        return (
            <>
                <section className="feed">
                    <h2 className="feedh2">Accueil</h2>
                    <div className="feedinput">
                        <input onChange={(e) =>this.handleChange(e)} NewValeur={this.state.texte} value={this.state.texte} type="text" placeholder="Quoi de neuf ?"/>
                        <button onClick={ () => this.props.addTweet(this.state.texte)}>Tweeter</button>
                    </div>
                    <MessageList tweets={this.props.tweets}/>
                </section>
            </>
        );
    }
}

export default Feed;
