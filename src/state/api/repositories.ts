import { createAsyncThunk } from '@reduxjs/toolkit'

import { userApiClient } from '../../utils/apiClient'
import { IRepository } from '../../types'

interface IRepositoryRaw {
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

const fetchRepositories = createAsyncThunk<IRepository[], undefined, { rejectValue: string }>(
    'user/fetchRepositories',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await userApiClient.get(`/repos`)

            if (data && data.length) {
                return data.map(
                    (repository: IRepositoryRaw): IRepository => ({
                        name: repository.name,
                        description: repository.description,
                        repoLink: repository.html_url,
                        isPrivate: repository.private,
                        forks: repository.forks,
                        owner: {
                            loginName: repository.owner.login,
                            avatarLink: repository.owner.avatar_url,
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

export default fetchRepositories
