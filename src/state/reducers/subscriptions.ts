import { createReducer } from '@reduxjs/toolkit'

import { IRepository } from '../../types'
import { fetchSubscriptions } from '../api'

interface ISubscriptionsState {
    subsList: IRepository[]
    isLoading: boolean
}

const initialState: ISubscriptionsState = {
    subsList: [],
    isLoading: true,
}

export const subscriptionsReducer = createReducer(initialState, builder => {
    builder
        .addCase(fetchSubscriptions.pending, state => {
            state.isLoading = true
        })
        .addCase(fetchSubscriptions.fulfilled, (state, action) => {
            state.isLoading = false
            state.subsList = action.payload
        })
})
