import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { userReducer, followersReducer, repositoriesReducer, subscriptionsReducer } from './reducers'

const rootReducer = combineReducers({
    user: userReducer,
    followers: followersReducer,
    repositories: repositoriesReducer,
    subscriptions: subscriptionsReducer,
})

const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export default store
