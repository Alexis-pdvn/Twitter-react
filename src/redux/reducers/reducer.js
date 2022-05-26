const initalState = {
    publiations: [],
    utilisateurs: [],
    like: [],
    taches: []
}

const rootReducer = (state = initalState, action) => {
    switch(action.type) {
        case "updateTodo": // Ce qu'on recoit dans le payload = {id: 17, libelle: "j'adore les cookies", termine: false}
            return Object.assign({}, state, {
                taches: state.taches.concat(action.payload)
                // va générer {publications: [], utilisateurs: [], taches: [{...}]}
            })
        default:
            return state       
    }
}

export default rootReducer;