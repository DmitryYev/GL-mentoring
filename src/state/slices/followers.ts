import { createSlice } from '@reduxjs/toolkit'

import stateKeys from '../stateKeys'
import { Follower } from './../../types'

interface IFollowersState {
    followersList: Follower[]
    isLoading: boolean
}

const initialState: IFollowersState = {
    followersList: [],
    isLoading: false,
}

const followersSlice = createSlice({
    name: stateKeys.followersStateKey,
    initialState,
    reducers: {},
})

export const followersReducer = followersSlice.reducer
