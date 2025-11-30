import style from "./main.module.css"
import { ReactNode } from "react"

import { ReactComponent as CreatePostBtn } from "../../assets/icons/create-post-btn.svg"

import { ReactComponent as BackEndImage } from "../../assets/icons/backend-image.svg"
import { ReactComponent as FrontEndImage } from "../../assets/icons/frontend-image.svg"
import { ReactComponent as DataBaseImage } from "../../assets/icons/bd-image.svg"

import { ReactComponent as SearchImage } from "../../assets/icons/search-btn.svg"
import { ReactComponent as FilterImage } from "../../assets/icons/filter-btn.svg"


interface IMainProps {
    children: ReactNode
}

export function Main(props: IMainProps) {
    const { children } = props
    function showTagFilter() {
        console.log(props.children)
    }

    return (
        <main className={style.main}>
            <div className={style.mainBgDiv}>
                <h1>Find Your People</h1>

                <div className={style.searchBarDiv}>
                    <input type="text" placeholder="Search for new friends"/>
                    <button><SearchImage width={21} height={21}/></button>
                </div>

                <button className={style.createPostBtn}><CreatePostBtn width={70} height={70}/></button>
            </div>

            <div className={style.sectionLine}></div>

            <div className={style.mainInfo}>
                <h2 className={style.mainInfoHeader}>Experience the new adventure</h2>
                <p className={style.mainInfoDesc}>Welcome to our forum — a space for the free exchange of thoughts, experiences, and knowledge. Here you can create your own posts, share ideas, ask questions, and find like-minded people. </p>

                <div className={style.description}>

                    <div className={`${style.FrontEnd} ${style.cardBlock}`}>
                        <FrontEndImage width={100} height={102} />
                        <p className={style.PText}>Frontend створений на React з використанням TypeScript.
                            Ця частина буде доповнюватися в майбутньому.</p>
                    </div>

                    <div className={`${style.BackEnd} ${style.cardBlock}`}>
                        <BackEndImage width={100} height={102}/>
                        <p className={style.PText}>Backend реалізований на Node.js з використанням Express.js для створення API.</p>
                    </div>

                    <div className={`${style.DataBase} ${style.cardBlock}`}>
                        <DataBaseImage width={100} height={102}/>
                        <p className={style.PText}>Є декілька моделей, зокерма User, Tags, post. Основні запити клієнта будуть надсилаттись до БД через MiddleWare</p>
                        
                    </div>

                </div>
            </div>

            <div className={style.sectionLine}></div>

            <div className={style.posts}>
                <div className={`${style.searchBarDiv} ${style.searchBarPost}`}>
                    <input type="text" placeholder="Search for new friends"/>
                    <button><SearchImage width={21} height={21}/></button>
                    <button onClick={showTagFilter}><FilterImage width={21} height={21}/></button>
                </div>
                { children }
            </div>

        </main>
    )
}