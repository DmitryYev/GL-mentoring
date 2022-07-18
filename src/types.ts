export interface IUser {
    name: null | string
    loginName: string
    company: null | string
    avatarLink: string
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
