import { ChangeEvent, FC, PropsWithChildren } from 'react'

import styles from './PageHeaderContainer.module.scss'

type PageHeaderContainerProps =
    | {
          withSearch: true
          onSearch: (event: ChangeEvent<HTMLInputElement>) => void
          placeholder: string
          title: string
      }
    | {
          withSearch: false
          onSearch?: never
          placeholder?: never
          title: string
      }

const PageHeaderContainer: FC<PropsWithChildren<PageHeaderContainerProps>> = ({
    children,
    withSearch,
    onSearch,
    placeholder,
    title,
}) => (
    <header className={styles['header-backdrop']}>
        <div className={styles['header-body']}>
            <div className={styles['header-service-section']}>
                <div className={styles['header-title']}>{title}</div>
                {withSearch && (
                    <input
                        onChange={onSearch}
                        placeholder={placeholder}
                        type='text'
                        className={styles['header-search']}
                    />
                )}
            </div>

            <div className={styles['header-content-section']}>{children}</div>
        </div>
    </header>
)

export default PageHeaderContainer
