export default (state, action) => {
    switch(action.type){

        case "SET_ARRAY":
            return {
                ...state,
                cards: action.cards,
                lucky_number: action.lucky_number
            };
        
        default:
            return state;
    }
};