export type User = {
    name: string | null
    loginName: string
    company: string | null
    avatarLink: string
    followers: number
}

export type Follower = {
    name: string
    avatarLink: string
    profileLink: string
}

export type Repository = {
    name: string
    description: string
    forks: number
    owner: {
        loginName: string
        avatarLink: string
    }
}

export type Subscription = Repository
