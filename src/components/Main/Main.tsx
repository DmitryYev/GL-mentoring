import { FC, useLayoutEffect } from 'react'

import SideMenu from '../SideMenu'
import Header from '../Header'
import Loader from '../Loader'

import { api, selectors, useAppDispatch, useAppSelector } from '../../state'

import styles from './Main.module.scss'

interface IMainProps {
    children: React.ReactNode
}

const Main: FC<IMainProps> = ({ children }) => {
    const { isLoading: isUserDataLoading, userData } = useAppSelector(selectors.userSelector)
    const dispatch = useAppDispatch()

    useLayoutEffect(() => {
        dispatch(api.fetchUser('gaearon'))
    }, [dispatch])

    return (
        <div className={styles['main']}>
            {isUserDataLoading ? (
                <Loader />
            ) : (
                <>
                    <div className={styles['menu-container']}>
                        <SideMenu />
                    </div>
                    <div className={styles['content-container']}>
                        <Header userData={userData} />
                        {children}
                    </div>
                </>
            )}
        </div>
    )
}

export default Main
