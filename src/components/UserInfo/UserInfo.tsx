import { FC } from 'react'

import UserAvatar from '../UserAvatar'

import { useAppSelector, selectors } from '../../state'

import styles from './UserInfo.module.scss'

const UserInfo: FC = () => {
    const {
        userData: { avatarLink, loginName },
    } = useAppSelector(selectors.userSelector)

    return (
        <div className={styles['info-container']}>
            <UserAvatar size='large' avatarLink={avatarLink} />
            <h2>{loginName}</h2>
        </div>
    )
}

export default UserInfo
