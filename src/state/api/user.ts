import { createAsyncThunk } from '@reduxjs/toolkit'

import { userApiClient } from '../../utils/apiClient'
import { IUser } from '../../types'

interface IUserResponse {
    name: null | string
    email: null | string
    login: string
    company: null | string
    html_url: string
    followers: number
    avatar_url: string
}

interface IReceivedEventsResponse extends Array<{ [key: string]: unknown }> {}

const fetchUser = createAsyncThunk<IUser, undefined, { rejectValue: string }>(
    'user/fetchUser',
    async (_, { rejectWithValue }) => {
        try {
            const { data: userData } = await userApiClient.get<IUserResponse>('')

            const { data: receivedEvents } = await userApiClient.get<IReceivedEventsResponse>(`/received_events`)

            return {
                name: userData.name,
                email: userData.email,
                company: userData.company,
                loginName: userData.login,
                avatarLink: userData.avatar_url,
                profileLink: userData.html_url,
                followersCount: userData.followers,
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
