import counter from './counter';

export function issues(state = [], action) {
    switch (action.type) {
        case 'ISSUES_LOADED':
            return action.data;
        default:
            return state;
    }
}

export {counter};
