import axios from 'axios'

/**
 * @todo implement user search
 */
const currentUser = 'gaearon'

const apiClient = axios.create({
    baseURL: 'https://api.github.com',
})

const userApiClient = axios.create({
    baseURL: `https://api.github.com/users/${currentUser}`,
})

export { apiClient, userApiClient }
