import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../Header'
import SideMenu from '../SideMenu'

const Main: FC = () => (
    <>
        <SideMenu />
        <div>
            <Header />
            <Outlet />
        </div>
    </>
)

export default Main
