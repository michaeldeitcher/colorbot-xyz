import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const exampleInitialState = {
    muiThemeType: 'dark'
}

export const actionTypes = {
    MUI_CHANGE_STYLE_TYPE: 'MUI_CHANGE_STYLE_TYPE'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
    switch (action.type) {
        case actionTypes.MUI_CHANGE_STYLE_TYPE:
            return {...state, muiThemeType: action.styleType }
        default:
            return state
    }
}

// ACTIONS
export const muiChangeStyleType = (styleType) => {
    return { type: actionTypes.MUI_CHANGE_STYLE_TYPE, styleType: styleType }
}

export function initializeStore (initialState = exampleInitialState) {
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware())
    )
}