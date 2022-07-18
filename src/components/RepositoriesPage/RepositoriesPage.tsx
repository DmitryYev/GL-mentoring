import { FC, useState, useMemo, useEffect, ChangeEvent } from 'react'

import PageContainer from '../PageContainer'
import PageHeaderContainer from '../PageHeaderContainer'
import ListItemContainer from '../ListItemContainer'

import { api, selectors, useAppSelector, useAppDispatch } from '../../state'

import styles from './RepositoriesPage.module.scss'
import UserAvatar from '../UserAvatar'

const RepositoriesPage: FC = () => {
    const [repoNameFilter, setRepoNameFilter] = useState('')

    const {
        userData: { loginName: userName, name },
    } = useAppSelector(selectors.userSelector)
    const { reposList, isLoading } = useAppSelector(selectors.repositoriesSelector)

    const dispatch = useAppDispatch()

    const filteredRepositories = useMemo(
        () => (reposList ? reposList.filter(repository => repository.name.includes(repoNameFilter)) : reposList),
        [reposList, repoNameFilter]
    )

    useEffect(() => {
        dispatch(api.fetchRepositories(userName))
    }, [dispatch, userName])

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setRepoNameFilter(event.target.value)
    }

    return (
        <PageContainer withPagination={false} contentLoaded={!isLoading}>
            <PageHeaderContainer
                withSearch={true}
                onSearch={handleSearch}
                placeholder='Search by repo name'
                title={`${name || userName}'s repositories`}
            >
                <div className={`${styles['repos-grid']}`}>
                    <span className={`${styles['table-cell']}`}>Owner</span>
                    <span className={`${styles['table-cell']}`}>Name</span>
                    <span className={`${styles['table-cell']}`}>Description</span>
                    <span className={`${styles['table-cell']}`}>Forks</span>
                    <span className={`${styles['table-cell']}`}>Private</span>
                </div>
            </PageHeaderContainer>

            {filteredRepositories?.map(repository => (
                <ListItemContainer key={repository.name}>
                    <div className={`${styles['repos-grid']}`}>
                        <div className={`${styles['table-cell']} ${styles['table-cell__owner']}`}>
                            <UserAvatar avatarLink={repository.owner.avatarLink} size={'regular'} />
                            <span>{repository.owner.loginName}</span>
                        </div>
                        <a
                            href={repository.repoLink}
                            className={`${styles['table-cell']} ${styles['table-cell__text-cell']}`}
                        >
                            {repository.name}
                        </a>
                        <span className={`${styles['table-cell']} ${styles['table-cell__text-cell']}`}>
                            {repository.description}
                        </span>
                        <span className={`${styles['table-cell']}`}>{repository.forks}</span>
                        <span className={`${styles['table-cell']}`}>{String(repository.isPrivate)}</span>
                    </div>
                </ListItemContainer>
            ))}
        </PageContainer>
    )
}

export default RepositoriesPage
