import { FC, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Main from './components/Main'
import Loader from './components/Loader'

const RepositoriesPage = lazy(() => import('./components/RepositoriesPage'))
const FollowersPage = lazy(() => import('./components/FollowersPage'))
const SubscriptionsPage = lazy(() => import('./components/SubscriptionsPage'))
const AboutPage = lazy(() => import('./components/AboutPage'))

const App: FC = () => {
    return (
        <BrowserRouter>
            <Main>
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path='/repositories' element={<RepositoriesPage />} />
                        <Route path='/followers' element={<FollowersPage />} />
                        <Route path='/subscriptions' element={<SubscriptionsPage />} />
                        <Route path='/about' element={<AboutPage />} />

                        <Route path='*' element={<Navigate to='repositories' replace />} />
                    </Routes>
                </Suspense>
            </Main>
        </BrowserRouter>
    )
}

export default App
