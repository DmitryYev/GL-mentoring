import { createSlice } from '@reduxjs/toolkit'

import stateKeys from '../stateKeys'
import { Subscription } from './../../types'

interface ISubscriptionsState {
    subsList: Subscription[]
    isLoading: boolean
}

const initialState: ISubscriptionsState = {
    subsList: [],
    isLoading: false,
}

const subscriptionsSlice = createSlice({ name: stateKeys.subscriptionsStateKey, initialState, reducers: {} })

export const subscriptionsReducer = subscriptionsSlice.reducer
