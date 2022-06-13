import { createSlice } from '@reduxjs/toolkit'

import stateKeys from '../stateKeys'
import { User } from './../../types'

interface IUserState {
    userData: User
    isLoading: boolean
}

const initialState: IUserState = {
    userData: {
        name: '',
        loginName: '',
        company: '',
        avatarLink: '',
        followers: 0,
    },
    isLoading: false,
}

const userSlice = createSlice({
    name: stateKeys.userStateKey,
    initialState,
    reducers: {},
})

export const userReducer = userSlice.reducer
