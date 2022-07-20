import { createAction, createReducer } from '@reduxjs/toolkit'

import { IUser } from '../../types'
import { fetchUser } from '../api'

interface IUserState {
    userData: IUser
    isLoading: boolean
}

const initialState: IUserState = {
    userData: {
        name: null,
        email: null,
        company: null,
        loginName: '',
        avatarLink: '',
        profileLink: '',
        followersCount: 0,
        receivedEventsCount: 0,
    },
    isLoading: true,
}

export const resetUserStore = createAction('resetUserStore')

export const userReducer = createReducer(initialState, builder => {
    builder
        .addCase(fetchUser.pending, state => {
            state.isLoading = true
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.userData = action.payload
        })
        .addCase(resetUserStore, () => initialState)
})
