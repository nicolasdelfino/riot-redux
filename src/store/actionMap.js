import actions from './dedux/actions';

export const actionMap = (lib, store, action, value) => {
    lib === 'redux' ? log(store, action, value, actRedux) : log(store, action, value, actDedux)
}

const actRedux = (store, actionType, value) => {
    store.dispatch({type:actionType, payload:value})
}

const actDedux = (store, actionType, value) => {
    actions[actionType](value)
}

const log = (store, actionType, payload, action) => {
    console.group('%c ACTION ', 'background: black; padding: 2px; color: white', '"' + actionType + '"');
    console.group('%c PAYLOAD ', 'background: red; padding: 2px; color: white');
    console.info(payload)
    console.groupEnd()
    console.log('%cOLD STATE', 'font-weight:bold; color: blue', store.getState())
    action(store, actionType, payload)
    console.log('%cNEW STATE', 'font-weight:bold; color: green', store.getState())
    console.groupEnd()
}