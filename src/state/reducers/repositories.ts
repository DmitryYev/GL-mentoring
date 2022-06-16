import { createReducer } from '@reduxjs/toolkit'

import { IRepository } from '../../types'
import { fetchRepositories } from '../api'

interface IRepositoriesState {
    reposList: IRepository[]
    isLoading: boolean
}

const initialState: IRepositoriesState = {
    reposList: [],
    isLoading: false,
}

export const repositoriesReducer = createReducer(initialState, builder => {
    builder
        .addCase(fetchRepositories.pending, state => {
            state.isLoading = true
        })
        .addCase(fetchRepositories.fulfilled, (state, action) => {
            state.isLoading = false
            state.reposList = action.payload
        })
})
