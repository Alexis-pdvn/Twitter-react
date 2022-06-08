import MessageList from "./MessageList";
const Feed = () => {
    return (
        <>
            <section className="feed">
                <h2 className="feedh2">Accueil</h2>
                <div className="feedinput">
                    <input type="text" placeholder="Quoi de neuf ?"/>
                    <button>Tweeter</button>
                </div>
                <MessageList/>
            </section>
        </>
    );
}

export default Feed;
