import React from "react";


class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            results: [
                {
                    "name": 'Tous sur les OGM',
                    "tweets": 6535,
                    "img": "",
                },
                {
                    "name": 'Baptiste trop fort',
                    "tweets": 54,
                    "img": "",
                },
                {
                    "name": "Macron c'est le president",
                    "tweets": 8888,
                    "img": "",
                },
                {
                    "name": 'Alexis il est fort en CSS',
                    "tweets": 945,
                    "img": "",
                },
                {
                    "name": 'On est en examens',
                    "tweets": 754,
                    "img": "",
                },
                {
                    "name": 'Les chats sont mignions',
                    "tweets": 9087,
                    "img": "",
                },
                {
                    "name": "zzz",
                    "tweets": 8856666,
                    "img": "",
                },
            ]
        }
    }
    handleClick(e) {

 

  let AllName = [];
  for( let i=0; i< 7; i++){
AllName.push(this.state.results[i].name)
  }

  var valueInput = document.querySelector('.search')
  const NewTableau = AllName.filter(name => name.indexOf(valueInput.value) >= 0 );
  console.log(NewTableau)


//   this.setState({
//     results: NewTableau
//  })
    
      }
    render() {
       
        return (
            <>
            <form>
                <input className="search" onKeyPress={() => this.handleClick()} type="text" placeholder="Rechercher dans Twitter"></input>
                
            </form>
            <div className="resultSearch">
            <ul>
                        {
                            this.state.results.map((item, i) => (
                                <li>
                                <h4 className="menu_link" key={i.toString()} item={item}>{item.name}</h4>
                               <h6 className="nbrTweets">{item.tweets} Tweets</h6> 
                                </li>
                            ))
                        }
                    </ul>
            </div>
            </>
        );
    }
}

export default Search;
