const gd = localStorage.getItem('globalData');
const globalData = gd ? JSON.parse(gd) : {};
const defaultState = {
    globalData,
    initData: {
        page: 1,
        limit: 10
    },
    customearray:[]
};
const reducer = (state = defaultState, action) => {
    // console.log(action)
    const { type, payload } = action;
    switch (type) {
        case "global_data":
            state = {
                ...state,
                globalData: payload
            }
            return state
        case "load_customearray":
            state = {
                ...state,
                customearray: payload
            }
            return state
        default:
            return state
    }
}
export default reducer