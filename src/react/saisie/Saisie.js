import { ajouterTache } from "../../redux/actionCreator/actionCreator";
import { useState } from "react";
import { connect } from "react-redux";

const ConnectedSaisie = ({ addTask }) => {
    const [texte, setTexte] = useState("");

    const handleChange = (event) => {
        setTexte(event.target.value)
    }

    const handleClick = () => {
        let newTask = {
            id: 1,
            libelle: texte,
            termine: false
        }
        addTask(newTask)
    }

    return (
      <>
        <input
          type='text'
          placeholder='Votre tache ...'
          value={texte}
          onChange={(event) => handleChange(event)}
        />
        <button type='submit' onClick={() => handleClick()}>Ajouter la tache</button>
      </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (tache) => dispatch(ajouterTache(tache))
    }
}

const Saisie = connect(null, mapDispatchToProps)(ConnectedSaisie)

export default Saisie;