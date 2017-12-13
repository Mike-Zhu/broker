const gd = localStorage.getItem('globalData');
const globalData = gd ? JSON.parse(gd) : {};
const defaultState = { globalData };
const reducer = (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "global_data":
            state.globalData = payload
            return state
        default:
            return state
    }
}
export default reducer