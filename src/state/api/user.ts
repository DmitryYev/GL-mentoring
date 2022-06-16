import { createAsyncThunk } from '@reduxjs/toolkit'

import apiClient from '../../utils/apiClient'
import { IUser } from '../../types'

interface IUserRaw {
    name: null | string
    login: string
    avatar_url: string
    company: null | string
    followers: number
}

const fetchUser = createAsyncThunk<IUser, string, { rejectValue: string }>(
    'user/fetchUser',
    async (userName: string, { rejectWithValue }) => {
        try {
            const { data } = await apiClient.get(`/users/${userName}`)

            const { name = null, login = '', avatar_url = '', company = null, followers = 0 } = data as IUserRaw

            return { name, company, followers, loginName: login, avatarLink: avatar_url }
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
