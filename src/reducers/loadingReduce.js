import {HIDE_LOADING, SHOW_LOADING} from "../helper/constant";

const initState = {
    loading: false,
}

export const loadingReduce = (state = initState, action) => {
    const {type} = action;
    switch (type) {
        case HIDE_LOADING:
            return {...state, loading: false}
        case SHOW_LOADING:
            return {...state, loading: true}
        default:
            return state
    }
}