export interface IUser {
    name: null | string
    loginName: string
    company: null | string
    avatarLink: string
    followers: number
}

export interface IFollower {
    loginName: string
    avatarLink: string
    profileLink: string
}

export interface IRepository {
    name: string
    description: string
    forks: number
    owner: {
        loginName: string
        avatarLink: string
    }
}
