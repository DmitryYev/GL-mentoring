import { FC, useLayoutEffect } from 'react'

import SideMenu from '../SideMenu'
import Loader from '../Loader'

import { api, selectors, useAppDispatch, useAppSelector } from '../../state'

import style from './Main.module.scss'

interface IMainProps {
    children: React.ReactNode
}

const Main: FC<IMainProps> = ({ children }) => {
    const { isLoading: isUserDataLoading } = useAppSelector(selectors.userSelector)
    const dispatch = useAppDispatch()

    useLayoutEffect(() => {
        dispatch(api.fetchUser('gaearon'))
    }, [dispatch])

    return (
        <div className={style['main']}>
            {isUserDataLoading ? (
                <Loader />
            ) : (
                <>
                    <SideMenu />
                    {children}
                </>
            )}
        </div>
    )
}

export default Main
