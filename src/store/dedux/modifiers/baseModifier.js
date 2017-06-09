import { CHANGE_TITLE } from '../../actionTypes'

export default {
    CHANGE_TITLE: (payload, state) => {
        return { ...state, title: payload}  
    }
}