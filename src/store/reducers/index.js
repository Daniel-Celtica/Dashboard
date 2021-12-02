import { createStore } from "redux";

const INITIAL_STATE = {
    data: 
    {
        ano: '2021',
        bairro: 'todos',
        mes: 'todos'
    }
};

function filtrar( state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CHANGE_FILTRO' :
            return{data: action.data}
        default:
            return state
    }
    
}

const store = createStore(filtrar);

export default store;