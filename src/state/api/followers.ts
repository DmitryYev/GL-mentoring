import { createAsyncThunk } from '@reduxjs/toolkit'

import apiClient from '../../utils/apiClient'
import { IFollower } from '../../types'

interface IFollowerRaw {
    login: string
    avatar_url: string
    html_url: string
}

const fetchFollowers = createAsyncThunk<
    IFollower[],
    { userName: string; page: number; pageLimit: number },
    { rejectValue: string }
>('user/fetchFollowers', async ({ userName, page, pageLimit }, { rejectWithValue }) => {
    try {
        const { data } = await apiClient.get(`users/${userName}/followers?per_page=${pageLimit}&page=${page}`)

        if (data && data.length) {
            return data.map(
                (follower: IFollowerRaw): IFollower => ({
                    loginName: follower.login,
                    avatarLink: follower.avatar_url,
                    profileLink: follower.html_url,
                })
            )
        } else return []
    } catch (error) {
        /**
         * @todo improve error handling
         */

        console.error(error)

        return rejectWithValue('Request Error')
    }
})

export default fetchFollowers
