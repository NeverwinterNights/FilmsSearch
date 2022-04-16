import {useState} from "react";
import styles from "./Pagination.module.scss";

type  PaginationPropsType = {
    totalPagesCount: number
    pageHandler: (num: number) => void
    page: number
}


export const Pagination = ({
                               totalPagesCount,
                               pageHandler,
                               page
                           }: PaginationPropsType) => {

    let pagesCount = Math.ceil(totalPagesCount / 10)

    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / 10)
    const [portionNumber, setPortionNumber] = useState<number>(1);
    const leftPortionPageNumber = (portionNumber - 1) * 10 + 1
    const rightPortionPageNumber = portionNumber * 10

    const changePageHandler = (num: number) => {

        pageHandler(num)
    }

    return (
        <div className={"main"}>
            <div className={"pagination_wrapper"}>
                {portionNumber > 1 &&
                <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>PREV</button>}
                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((t) => {
                    return <span key={t}
                                 className={page === t ? styles.selectedPage : styles.page}
                                 onClick={() => {
                                     changePageHandler(t)
                                 }}

                    >{t}</span>
                })}
                {portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</button>}
            </div>
        </div>
    );
};