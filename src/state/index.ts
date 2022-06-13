import * as selectors from './selectors'
import store from './store'

export { selectors }
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
