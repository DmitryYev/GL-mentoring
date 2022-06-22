import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faUsers, faLink, faUser } from '@fortawesome/free-solid-svg-icons'

import NavigationLink from '../NavigationLink'
import UserInfo from '../UserInfo'

import styles from './SideMenu.module.scss'

const SideMenu: FC = () => {
    return (
        <aside className={styles['side-menu']}>
            <UserInfo />

            <nav className={styles['nav-container']}>
                <NavigationLink to='repositories'>
                    <div className={styles['link-icon']}>
                        <FontAwesomeIcon icon={faCodeBranch} />
                    </div>
                    <span>Repositories</span>
                </NavigationLink>
                <NavigationLink to='followers'>
                    <div className={styles['link-icon']}>
                        <FontAwesomeIcon icon={faUsers} />
                    </div>
                    <span>Followers</span>
                </NavigationLink>
                <NavigationLink to='subscriptions'>
                    <div className={styles['link-icon']}>
                        <FontAwesomeIcon icon={faLink} />
                    </div>
                    <span>Subscriptions</span>
                </NavigationLink>
                <NavigationLink to='about'>
                    <div className={styles['link-icon']}>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <span>About</span>
                </NavigationLink>
            </nav>
        </aside>
    )
}

export default SideMenu
