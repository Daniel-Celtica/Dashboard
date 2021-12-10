import { createStore } from "redux";

const INITIAL_STATE = {
    data: 
    {
        ano: '',
        regiao: '',
        mes: '0'
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