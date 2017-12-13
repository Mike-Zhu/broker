
const defaultState = {};
const reducer = (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "global_data":
            state.globalData = payload
            return state
            break;
        
    }
}
export default reducer