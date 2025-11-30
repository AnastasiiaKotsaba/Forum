import style from "./footer.module.css"

import { ReactComponent as InstImage } from "../../assets/icons/inst-footer.svg"
import { ReactComponent as FacebookImage } from "../../assets/icons/facebook-footer.svg"
import { ReactComponent as XImage } from "../../assets/icons/twt-footer.svg"


export function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.footerMedia}>
                <InstImage width={25} height={25}/>
                <FacebookImage width={25} height={24}/>
                <XImage width={26} height={22} />
            </div>

            <hr />

            <div className={style.footerLinks}>
                <a href="#">MAIN</a>
                <a href="#">ABOUT US</a>
                <a href="#">CONTACT US</a>
                <a href="#">POSTS</a>
                <a href="#">ALL POSTS</a>
            </div>
        </footer>
    )
}