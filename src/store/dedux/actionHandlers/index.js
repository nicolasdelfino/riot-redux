import actions from '../actions';

actions.changeTitle.subscribe(payload => {
    actions.updateApp({ title: 'asdasd' });
});