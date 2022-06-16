import { createReducer } from '@reduxjs/toolkit'

import { IUser } from '../../types'
import { fetchUser } from '../api'

interface IUserState {
    userData: IUser
    isLoading: boolean
}

const initialState: IUserState = {
    userData: {
        name: null,
        loginName: '',
        company: null,
        avatarLink: '',
        followers: 0,
    },
    isLoading: false,
}

export const userReducer = createReducer(initialState, builder => {
    builder
        .addCase(fetchUser.pending, state => {
            state.isLoading = true
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.userData = action.payload
        })
})
