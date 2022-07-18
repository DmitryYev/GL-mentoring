import { createAction, createReducer } from '@reduxjs/toolkit'

import { IFollower } from '../../types'
import { fetchFollowers } from '../api'

interface IFollowersState {
    followersList: IFollower[] | null
    isLoading: boolean
}

const initialState: IFollowersState = {
    followersList: null,
    isLoading: true,
}

export const resetFollowersStore = createAction('resetFollowersStore')

export const followersReducer = createReducer(initialState, builder => {
    builder
        .addCase(fetchFollowers.pending, state => {
            state.isLoading = true
        })
        .addCase(fetchFollowers.fulfilled, (state, action) => {
            state.isLoading = false

            if (state.followersList) {
                state.followersList = state.followersList.concat(action.payload)
            } else {
                state.followersList = action.payload
            }
        })
        .addCase(resetFollowersStore, () => initialState)
})
