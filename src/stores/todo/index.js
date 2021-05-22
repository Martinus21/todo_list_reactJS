const initialState = {
    list: null,
};

const reducer = ((state = initialState, action) => {
    let { type, data } = action;
    switch (type) {
        case "SET_TODO":
            return {
                list: data
            }
        case "SET_TODOADD": 
            return {
                ...state,
                list: data
            }
        case "SET_TODOUPDATE": 
            return {
                ...state,
                kycList: data
            }
        case "SET_TODOREMOVE": 
            return {
                ...state,
                list: undefined
            }
        default : 
            return state;
    }
})

export default reducer;
