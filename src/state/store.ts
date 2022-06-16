import { configureStore, combineReducers } from '@reduxjs/toolkit'

import stateKeys from './stateKeys'
import { userReducer, followersReducer, repositoriesReducer, subscriptionsReducer } from './reducers'

const rootReducer = combineReducers({
    [stateKeys.userStateKey]: userReducer,
    [stateKeys.followersStateKey]: followersReducer,
    [stateKeys.repositoriesStateKey]: repositoriesReducer,
    [stateKeys.subscriptionsStateKey]: subscriptionsReducer,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store
