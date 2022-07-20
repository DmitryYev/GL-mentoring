export interface IUser {
    name: null | string
    email: null | string
    company: null | string
    loginName: string
    avatarLink: string
    profileLink: string
    followersCount: number
    receivedEventsCount: number
}

export interface IFollower {
    loginName: string
    avatarLink: string
    profileLink: string
}

export interface IRepository {
    name: string
    description: string
    repoLink: string
    isPrivate: boolean
    forks: number
    owner: {
        loginName: string
        avatarLink: string
    }
}
