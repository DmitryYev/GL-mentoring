import { FC, useState, useMemo, useEffect, ChangeEvent } from 'react'

import PageContainer from '../PageContainer'
import PageHeaderContainer from '../PageHeaderContainer'
import ListItemContainer from '../ListItemContainer'
import UserAvatar from '../UserAvatar'

import { api, selectors, useAppSelector, useAppDispatch } from '../../state'

import styles from './SubscriptionPage.module.scss'

const SubscriptionPage: FC = () => {
    const [subscriptionFilter, setSubscriptionFilter] = useState('')

    const {
        userData: { loginName: userName, name },
    } = useAppSelector(selectors.userSelector)
    const { subsList, isLoading } = useAppSelector(selectors.subscriptionsSelector)

    const dispatch = useAppDispatch()

    const filteredSubscriptions = useMemo(
        () => (subsList ? subsList.filter(subscription => subscription.name.includes(subscriptionFilter)) : subsList),
        [subsList, subscriptionFilter]
    )

    useEffect(() => {
        dispatch(api.fetchSubscriptions())
    }, [dispatch])

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSubscriptionFilter(event.target.value)
    }

    return (
        <PageContainer withPagination={false} contentLoaded={!isLoading}>
            <PageHeaderContainer
                withSearch={true}
                onSearch={handleSearch}
                placeholder='Search by subscription'
                title={`${name || userName}'s subscriptions`}
            >
                <div className={`${styles['subscription-grid']}`}>
                    <span className={`${styles['table-cell']}`}>Owner</span>
                    <span className={`${styles['table-cell']}`}>Name</span>
                    <span className={`${styles['table-cell']}`}>Description</span>
                    <span className={`${styles['table-cell']}`}>Forks</span>
                    <span className={`${styles['table-cell']}`}>Private</span>
                </div>
            </PageHeaderContainer>

            {filteredSubscriptions?.map(subscription => (
                <ListItemContainer key={subscription.name}>
                    <div className={`${styles['subscription-grid']}`}>
                        <div className={`${styles['table-cell']} ${styles['table-cell__owner']}`}>
                            <UserAvatar avatarLink={subscription.owner.avatarLink} size={'regular'} />
                            <span>{subscription.owner.loginName}</span>
                        </div>
                        <a
                            href={subscription.repoLink}
                            className={`${styles['table-cell']} ${styles['table-cell__text-cell']}`}
                        >
                            {subscription.name}
                        </a>
                        <span className={`${styles['table-cell']} ${styles['table-cell__text-cell']}`}>
                            {subscription.description}
                        </span>
                        <span className={`${styles['table-cell']}`}>{subscription.forks}</span>
                        <span className={`${styles['table-cell']}`}>{String(subscription.isPrivate)}</span>
                    </div>
                </ListItemContainer>
            ))}
        </PageContainer>
    )
}

export default SubscriptionPage
