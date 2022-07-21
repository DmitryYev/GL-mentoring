import { FC } from 'react'

import UserAvatar from '../UserAvatar'

import { useAppSelector, selectors } from '../../state'

import styles from './UserInfo.module.scss'

const UserInfo: FC = () => {
    const {
        userData: { avatarLink, loginName, name, email },
    } = useAppSelector(selectors.userSelector)

    return (
        <div className={styles['info-container']}>
            <UserAvatar size='large' avatarLink={avatarLink} />
            <h2>{name || loginName}</h2>
            {email && <span>{email}</span>}
        </div>
    )
}

export default UserInfo
