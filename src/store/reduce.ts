const defaultState = {
    num: 7,
}
export default (state = defaultState, action: IAction) => {
    const newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case 'add':
            newState.num++
            break
        default:
            break
    }
    return newState
}

interface IAction {
    type: 'add'
}
