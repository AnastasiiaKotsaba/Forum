import styles from "./header.module.css"
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg"

export function Header() {
    return (
        <header className={styles.header}>
            <Logo width={150} height={58}/>

            <div className={styles.rightHeaderPart}>
                <div className={styles.links}>
                    <a href="#" className={`${styles.link} ${styles.active}`}>Home</a>
                    <a href="#" className={styles.link}>All Posts</a>
                    <a href="#" className={styles.link}>My Posts</a>
                    <a href="#" className={styles.link}>EN <span>▼</span></a>
                </div>


                <div className={styles.btnDiv}>
                    <button className={styles.btnReg}>SIGN UP</button>
                    <button className={styles.btnLog}>LOGIN</button>
                </div>
            </div>

        </header>
    )
}