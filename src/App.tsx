import { FC, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const Main = lazy(() => import('./components/Main'))
const Repositories = lazy(() => import('./components/Repositories'))
const Followers = lazy(() => import('./components/Followers'))
const Subscriptions = lazy(() => import('./components/Subscriptions'))
const About = lazy(() => import('./components/About'))

const App: FC = () => {
    return (
        <BrowserRouter>
            <Suspense fallback='Loading...' />
            <Routes>
                <Route path='/' element={<Main />}>
                    <Route index element={<Navigate to='repositories' replace />} />

                    <Route path='repositories' element={<Repositories />} />
                    <Route path='followers' element={<Followers />} />
                    <Route path='subscriptions' element={<Subscriptions />} />
                    <Route path='about' element={<About />} />

                    <Route path='*' element={<Navigate to='repositories' replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
