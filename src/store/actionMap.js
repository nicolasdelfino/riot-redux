import actions from './dedux/actions';

export const actionMap = (lib, store, action, value) => {
    lib === 'redux' ? log(store, action, value, actRedux) : log(store, action, value, actDedux)
}

// log(store, action, value)(actRedux)

const actRedux = (store, actionType, value) => {
    store.dispatch({type:actionType, payload:value})
}

const actDedux = (store, actionType, value) => {
    actions[actionType](value)
}

const log = (store, actionType, payload, action) => {
    console.group('%c ACTION ', 'font-size:10px; background: black; padding: 2px; color: white', '"' + actionType + '"');
    console.log('%c LIB: ' + store.getState().main.stateLib.toUpperCase() + ' ', 'font-size:10px; background: purple; padding: 2px; color: white');
    console.group('%c PAYLOAD ', 'font-size:10px; background: red; padding: 2px; color: white');
    console.info(payload === '' ? 'empty payload' : payload)
    console.groupEnd()
    console.log('%cOLD STATE', 'font-size:10px; font-weight:bold; color: blue', store.getState())
    action(store, actionType, payload)
    console.log('%cNEW STATE', 'font-size:10px; font-weight:bold; color: green', store.getState())
    console.groupEnd()
}