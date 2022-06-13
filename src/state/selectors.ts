import { createSelector } from '@reduxjs/toolkit'

import stateKeys from './stateKeys'
import { RootState } from '.'

const typedSelector = (state: RootState) => state

export const userSelector = createSelector(typedSelector, state => state[stateKeys.userStateKey])
export const repositoriesSelector = createSelector(typedSelector, state => state[stateKeys.repositoriesStateKey])
export const followersSelector = createSelector(typedSelector, state => state[stateKeys.followersStateKey])
export const subscriptionsSelector = createSelector(typedSelector, state => state[stateKeys.subscriptionsStateKey])
