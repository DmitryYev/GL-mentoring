import { createReducer } from '@reduxjs/toolkit'

import { IFollower } from '../../types'
import { fetchFollowers } from '../api'

interface IFollowersState {
    followersList: IFollower[]
    isLoading: boolean
}

const initialState: IFollowersState = {
    followersList: [],
    isLoading: false,
}

export const followersReducer = createReducer(initialState, builder => {
    builder
        .addCase(fetchFollowers.pending, state => {
            state.isLoading = true
        })
        .addCase(fetchFollowers.fulfilled, (state, action) => {
            state.isLoading = false
            state.followersList = action.payload
        })
})
