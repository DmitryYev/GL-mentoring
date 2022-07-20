import { FC } from 'react'

import UserAvatar from '../UserAvatar'

import { useAppSelector, selectors } from '../../state'

import styles from './AboutPage.module.scss'

const AboutPage: FC = () => {
    const {
        userData: { name, loginName, company, avatarLink, email, profileLink },
    } = useAppSelector(selectors.userSelector)

    return (
        <div className={styles['about-page']}>
            <UserAvatar size='large' avatarLink={avatarLink} />

            <div className={styles['user-info-section']}>
                <span className={styles['user-name']}>{loginName}</span>
                <span className={styles['info-title']}>ACCOUNT DETAILS:</span>
                {name && (
                    <span>
                        <strong>Name: </strong>
                        {name}
                    </span>
                )}
                {company && (
                    <span>
                        <strong>Company: </strong>
                        {company}
                    </span>
                )}
                {email && (
                    <span>
                        <strong>Email: </strong>
                        {email}
                    </span>
                )}
                <a href={profileLink}>GitHub Account</a>
            </div>
        </div>
    )
}

export default AboutPage
