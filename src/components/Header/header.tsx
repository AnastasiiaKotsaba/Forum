import style from "./header.module.css"
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg"

export function Header() {
    return (
        <header className={style.header}>
            <Logo width={150} height={58}/>

            <div className={style.rightHeaderPart}>
                <div className={style.links}>
                    <a href="#" className={`${style.link} ${style.active}`}>Home</a>
                    <a href="#" className={style.link}>All Posts</a>
                    <a href="#" className={style.link}>My Posts</a>
                    <a href="#" className={style.link}>EN <span>▼</span></a>
                </div>


                <div className={style.btnDiv}>
                    <button className={style.btnReg}>SIGN UP</button>
                    <button className={style.btnLog}>LOGIN</button>
                </div>
            </div>

        </header>
    )
}