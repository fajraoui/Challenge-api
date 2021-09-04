import { GET_WHEATHER_FAIL, GET_WHEATHER_SUCCESS, WHEATHER_LOAD } from "../constants/constant"

const initialState = {
    cityWheather: [],
    Loading: false,
    error: null,
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case WHEATHER_LOAD:
            return { ...state, Loading: true }
        case GET_WHEATHER_SUCCESS:
            return { ...state, cityWheather: payload, Loading: false }
        case GET_WHEATHER_FAIL:
            return { ...state, error: payload, Loading: false }
        default:
            return state
    }
}