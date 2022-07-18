import { FC, PropsWithChildren } from 'react'

import styles from './ListItemContainer.module.scss'

const ListItemContainer: FC<PropsWithChildren> = ({ children }) => {
    return <div className={styles['list-item']}>{children}</div>
}

export default ListItemContainer
