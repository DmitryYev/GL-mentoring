import { FC } from 'react'
import classNames from 'classnames'

import { ReactComponent as Octocat } from '../../assets/octocat.svg'

import { IUser } from '../../types'

import styles from './Header.module.scss'

interface IHeaderProps {
    userData: IUser
}

const Header: FC<IHeaderProps> = ({ userData }) => {
    const greetingClassName = classNames(styles['header-section'], styles['greeting-section'])
    const shortInfoClassName = classNames(styles['header-section'], styles['info-section'])

    return (
        <header className={styles['header']}>
            <div className={greetingClassName}>
                <span>
                    <h3>Welcome to</h3>
                    <h1>GitCat</h1>
                </span>
                <Octocat className={styles['greeting-icon']} />
            </div>
            <div className={shortInfoClassName}>
                <table>
                    <tbody>
                        <tr>
                            <th scope='row'>Received events</th>
                            <td>{userData.receivedEventsCount}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Followers</th>
                            <td>{userData.followersCount}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </header>
    )
}

export default Header
