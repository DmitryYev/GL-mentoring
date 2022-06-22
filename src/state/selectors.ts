import { createSelector } from '@reduxjs/toolkit'

import { RootState } from './store'

const typedSelector = (state: RootState) => state

export const userSelector = createSelector(typedSelector, state => state.user)
export const repositoriesSelector = createSelector(typedSelector, state => state.repositories)
export const followersSelector = createSelector(typedSelector, state => state.followers)
export const subscriptionsSelector = createSelector(typedSelector, state => state.subscriptions)
