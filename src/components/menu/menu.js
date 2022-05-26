import React from "react";

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
                <section>
                    <ul>
                        {
                            this.state.menu.map((item, i) => (
                                <li className="menu_link" key={i.toString()} item={item}>{item.name}</li>
                            ))
                        }
                    </ul>
                </section>
            </>
        );
    }
}

export default Menu;
