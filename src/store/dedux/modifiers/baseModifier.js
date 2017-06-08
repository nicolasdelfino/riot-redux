export default {
    changeTitle: (payload, state) => {
        console.log('CLICK ACTION')
        return { ...state, title: payload}  
    }
}