import { FC, useCallback, useEffect } from 'react'

import PageContainer from '../PageContainer'
import PageHeaderContainer from '../PageHeaderContainer'
import ListItemContainer from '../ListItemContainer'
import UserAvatar from '../UserAvatar'

import { api, selectors, useAppSelector, useAppDispatch, resetFollowersStore } from '../../state'

import styles from './FollowersPage.module.scss'

const FollowersPage: FC = () => {
    const {
        userData: { loginName: userName, name, followersCount },
    } = useAppSelector(selectors.userSelector)
    const { followersList, isLoading } = useAppSelector(selectors.followersSelector)

    const dispatch = useAppDispatch()

    const handleLoad = useCallback(
        (page: number, pageLimit: number) => {
            dispatch(api.fetchFollowers({ userName, page, pageLimit }))
        },
        [dispatch, userName]
    )

    useEffect(
        () => () => {
            dispatch(resetFollowersStore())
        },
        [dispatch]
    )

    return (
        <PageContainer
            withPagination
            handleLoading={handleLoad}
            isLoading={isLoading}
            pageLimit={20}
            totalItemsAmount={followersCount}
            contentLoaded={Boolean(followersList)}
        >
            <PageHeaderContainer withSearch={false} title={`${name || userName}'s followers`}>
                <div className={styles['followers-grid']}>
                    <div></div>
                    <span className={styles['follower-name']}>Login Name</span>
                    <span className={styles['follower-link']}>Profile Link</span>
                </div>
            </PageHeaderContainer>

            {followersList?.map(follower => (
                <ListItemContainer key={follower.loginName}>
                    <div className={styles['followers-grid']}>
                        <UserAvatar avatarLink={follower.avatarLink} size={'regular'} />
                        <span className={styles['follower-name']}>{follower.loginName}</span>
                        <div className={styles['follower-link']}>
                            <a href={follower.profileLink}>GIT Profile</a>
                        </div>
                    </div>
                </ListItemContainer>
            ))}
        </PageContainer>
    )
}

export default FollowersPage
