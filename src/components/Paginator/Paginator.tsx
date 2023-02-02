import { useEffect, useState } from "react"
import s from "../Users/Users.module.css"


type PaginatorPropsType = {
    totalItemCount: number
    pageSize: number
    currentPage: number
    portionSize: number
    choosePage: (page: number) => void
}


export const Paginator = (props: PaginatorPropsType) => {

    useEffect(() => setPortionNumber(Math.ceil(props.currentPage / props.portionSize)), [props.currentPage]);


    let pageCount = Math.ceil(props.totalItemCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pageCount / props.portionSize)
    const [portionNumber, setPortionNumber] = useState<number>(1)
    const leftBorderPage = (portionNumber - 1) * props.portionSize + 1;
    const rightBorderPage = portionNumber * props.portionSize
    console.log(Math.ceil(props.currentPage / props.portionSize));

    return (

        <div className={s.pageSwitch}>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)} className={s.paginatorButton}>BACK</button>}
            {pages.filter(p => p >= leftBorderPage && p <= rightBorderPage).map((p, index) => <span key={index} onClick={() => props.choosePage(p)} className={props.currentPage === p ? s.selectedPage : s.numberPage} > {p} </span>)}
            {portionNumber < portionCount && <button onClick={() => setPortionNumber(portionNumber + 1)} className={s.paginatorButton}>NEXT</button>}
        </div>
    )
}