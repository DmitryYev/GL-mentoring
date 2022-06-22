import { createAsyncThunk } from '@reduxjs/toolkit'

import apiClient from '../../utils/apiClient'
import { IUser } from '../../types'

interface IUserResponse {
    name: null | string
    login: string
    avatar_url: string
    company: null | string
    followers: number
}

interface IReceivedEventsResponse extends Array<{ [key: string]: unknown }> {}

const fetchUser = createAsyncThunk<IUser, string, { rejectValue: string }>(
    'user/fetchUser',
    async (userName: string, { rejectWithValue }) => {
        try {
            const { data: userData } = await apiClient.get<IUserResponse>(`/users/${userName}`)

            const { data: receivedEvents } = await apiClient.get<IReceivedEventsResponse>(
                `/users/${userName}/received_events`
            )

            return {
                name: userData.name,
                company: userData.company,
                followers: userData.followers,
                loginName: userData.login,
                avatarLink: userData.avatar_url,
                receivedEventsCount: receivedEvents.length,
            }
        } catch (error) {
            /**
             * @todo improve error handling
             */

            console.error(error)

            return rejectWithValue('Request Error')
        }
    }
)

export default fetchUser
