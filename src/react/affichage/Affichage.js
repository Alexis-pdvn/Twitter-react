import { connect } from 'react-redux'
const ConnectedAffichage = ({ taches }) => {

    const listeTaches = taches.map((item, index) => {
        return(
            <li key={index}>
                {item.libelle}
            </li>
        )
    })

    return (
        <>
            <ul>
                {listeTaches}
            </ul>
        </>
    )
}

// 3 facons de remplir le premier () de connect
// connect(1 param)() => param = State à récupérer
// connect(param1, param2)() => param1 = State à récupérer, param2 = fonctions à récupérer
// connect(null, param2)() => param2 = fonctions à récupérer

const mapStateToProps = (state) => {
    return {
        taches: state.taches
    }
}

const Affichage = connect(mapStateToProps)(ConnectedAffichage)

export default Affichage;