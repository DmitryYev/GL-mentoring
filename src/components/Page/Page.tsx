import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../Header'

const Page: FC = () => (
    <>
        <Header />
        <Outlet />
    </>
)

export default Page
