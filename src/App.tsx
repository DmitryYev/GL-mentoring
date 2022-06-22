import { FC, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Main from './components/Main'
import Loader from './components/Loader'

const Page = lazy(() => import('./components/Page'))
const Repositories = lazy(() => import('./components/Repositories'))
const Followers = lazy(() => import('./components/Followers'))
const Subscriptions = lazy(() => import('./components/Subscriptions'))
const About = lazy(() => import('./components/About'))

const App: FC = () => {
    return (
        <BrowserRouter>
            <Main>
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path='/' element={<Page />}>
                            <Route index element={<Navigate to='repositories' replace />} />

                            <Route path='repositories' element={<Repositories />} />
                            <Route path='followers' element={<Followers />} />
                            <Route path='subscriptions' element={<Subscriptions />} />
                            <Route path='about' element={<About />} />

                            <Route path='*' element={<Navigate to='repositories' replace />} />
                        </Route>
                    </Routes>
                </Suspense>
            </Main>
        </BrowserRouter>
    )
}

export default App
