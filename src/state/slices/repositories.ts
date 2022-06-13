import { createSlice } from '@reduxjs/toolkit'

import stateKeys from '../stateKeys'
import { Repository } from '../../types'

interface IRepositoriesState {
    reposList: Repository[]
    isLoading: boolean
}

const initialState: IRepositoriesState = {
    reposList: [],
    isLoading: false,
}

const repositoriesSlice = createSlice({
    name: stateKeys.repositoriesStateKey,
    initialState,
    reducers: {},
})

export const repositoriesReducer = repositoriesSlice.reducer
