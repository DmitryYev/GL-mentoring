import { FC } from 'react'

import { ReactComponent as LoaderIcon } from '../../assets/loader.svg'

import styles from './Loader.module.scss'

const Loader: FC = () => <LoaderIcon className={styles['app-loader']} />

export default Loader
