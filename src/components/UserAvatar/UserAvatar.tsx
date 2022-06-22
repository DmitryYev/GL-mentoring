import { FC } from 'react'
import classNames from 'classnames'

import styles from './UserAvatar.module.scss'

interface IUserAvatarProps {
    size: 'regular' | 'large'
    avatarLink: string
}

const UserAvatar: FC<IUserAvatarProps> = ({ size, avatarLink }) => {
    const avatarClassName = classNames(styles['avatar'], {
        [styles['regular-avatar']]: size === 'regular',
        [styles['large-avatar']]: size === 'large',
    })

    return <img src={avatarLink} alt='User Avatar' className={avatarClassName} />
}

export default UserAvatar
