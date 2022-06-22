import { FC } from 'react'
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom'
import classNames from 'classnames'

import styles from './NavigationLink.module.scss'

interface INavigationLinkProps {
    to: string
    label?: string
    children?: React.ReactNode
}

const NavigationLink: FC<INavigationLinkProps> = ({ to, label, children }) => {
    const navigate = useNavigate()

    const resolvedPath = useResolvedPath(to)
    const isMatched = Boolean(useMatch({ path: resolvedPath.pathname }))

    const linkClassName = classNames(styles['link'], { [styles['active-link']]: isMatched })

    return (
        <div className={linkClassName} onClick={() => navigate(to)}>
            {children || label}
        </div>
    )
}

export default NavigationLink
