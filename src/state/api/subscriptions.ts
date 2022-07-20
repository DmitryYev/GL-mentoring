import { createAsyncThunk } from '@reduxjs/toolkit'

import { userApiClient } from '../../utils/apiClient'
import { IRepository } from '../../types'

interface ISubscriptionRaw {
    name: string
    description: string
    html_url: string
    forks: number
    private: boolean
    owner: {
        avatar_url: string
        login: string
    }
}

const fetchSubscriptions = createAsyncThunk<IRepository[], undefined, { rejectValue: string }>(
    'user/fetchRepositories',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await userApiClient.get(`/subscriptions`)

            if (data && data.length) {
                return data.map(
                    (subscription: ISubscriptionRaw): IRepository => ({
                        name: subscription.name,
                        description: subscription.description,
                        repoLink: subscription.html_url,
                        isPrivate: subscription.private,
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
