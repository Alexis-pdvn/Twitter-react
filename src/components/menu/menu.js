import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
class Menu extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            menu: [
                {
                    "name": 'Accueil',
                    "id": 1,
                    "img": "",
                },
                {
                    "name": 'Explorer',
                    "id": 2,
                    "img": "",
                },
                {
                    "name": 'Communautés',
                    "id": 2,
                    "img": "",
                },
                {
                    "name": 'Notifications',
                    "id": 2,
                    "img": "",
                },
                {
                    "name": 'Messages',
                    "id": 2,
                    "img": "",
                },
                {
                    "name": 'Profil',
                    "id": 2,
                    "img": "",
                },
                {
                    "name": 'Plus',
                    "id": 2,
                    "img": "",
                },
            ]
        }
    }

    render() {
        return (
            <>
            <div className="sidebar">
                {/* Icon de Twitter */}
                    <TwitterIcon className="icon-Twitter"/>
                <section>
                    {/* option de Twitter */}
                    <ul>
                        {
                            this.state.menu.map((item, i) => (
                                <li className="menu_link" key={i.toString()} item={item}>{item.name}</li>
                            ))
                        }
                    </ul>
                </section>
            </div>
            </>
        );
    }
}

export default Menu;
