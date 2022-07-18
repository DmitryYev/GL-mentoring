import { FC, useRef, useEffect, useCallback, useState, PropsWithChildren } from 'react'

import { ReactComponent as PaginationLoader } from '../../assets/small-loader.svg'
import Loader from '../Loader'

import styles from './PageContainer.module.scss'

type PageContainerProps =
    | {
          withPagination: true
          contentLoaded: boolean
          handleLoading: (page: number, pageLimit: number) => void
          isLoading: boolean
          pageLimit: number
          totalItemsAmount: number
      }
    | {
          withPagination: false
          contentLoaded: boolean
          handleLoading?: never
          isLoading?: never
          pageLimit?: never
          totalItemsAmount?: never
      }

const PageContainer: FC<PropsWithChildren<PageContainerProps>> = ({
    children,
    handleLoading,
    isLoading,
    pageLimit,
    totalItemsAmount,
    withPagination,
    contentLoaded,
}) => {
    const [currentPage, setCurrentPage] = useState(1)

    const listContainerRef = useRef<HTMLDivElement | null>(null)
    const observerRef = useRef<IntersectionObserver | null>(null)

    const handleObserverRef = useCallback(
        (targetNode: HTMLDivElement) => {
            if (!withPagination) return

            if (observerRef.current) observerRef.current.disconnect()

            const hasMore = totalItemsAmount > pageLimit * currentPage

            if (!hasMore || isLoading) return

            const scrollableContainer = listContainerRef.current

            const observerOptions: IntersectionObserverInit = {
                root: scrollableContainer,
                threshold: 0,
            }

            observerRef.current = new IntersectionObserver(entries => {
                const observableNode = entries[0]

                if (observableNode.isIntersecting && hasMore) {
                    setCurrentPage(currentPage + 1)
                }
            }, observerOptions)

            if (targetNode) {
                observerRef.current.observe(targetNode)
            }
        },
        [currentPage, isLoading, pageLimit, withPagination, totalItemsAmount]
    )

    useEffect(() => {
        if (withPagination) {
            handleLoading(currentPage, pageLimit)
        }
    }, [handleLoading, withPagination, currentPage, pageLimit])

    return (
        <>
            {contentLoaded ? (
                <>
                    <section className={styles['page-container']} ref={listContainerRef}>
                        {children}
                        {withPagination && <div ref={handleObserverRef} />}
                    </section>
                    {withPagination && isLoading && <PaginationLoader />}
                </>
            ) : (
                <Loader />
            )}
        </>
    )
}

export default PageContainer
