import { createAsyncThunk } from '@reduxjs/toolkit'

import apiClient from '../../utils/apiClient'
import { IRepository } from '../../types'

interface ISubscriptionRaw {
    name: string
    forks: number
    description: string
    owner: {
        avatar_url: string
        login: string
    }
}

const fetchSubscriptions = createAsyncThunk<IRepository[], string, { rejectValue: string }>(
    'user/fetchRepositories',
    async (userName: string, { rejectWithValue }) => {
        try {
            const { data } = await apiClient.get(`/users/${userName}/subscriptions`)

            if (data && data.length) {
                return data.map(
                    (subscription: ISubscriptionRaw): IRepository => ({
                        name: subscription.name,
                        description: subscription.description,
                        forks: subscription.forks,
                        owner: {
                            loginName: subscription.owner.login,
                            avatarLink: subscription.owner.avatar_url,
                        },
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
    }
)

export default fetchSubscriptions
