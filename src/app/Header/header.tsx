import styles from "./header.module.css"
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg"
import { useMediaQuery } from "react-responsive"

export function Header() {
    const isDesktop = useMediaQuery({ minWidth: 1025 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
	const isMobile = useMediaQuery({ maxWidth: 767 });

    if (isDesktop) {
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

    if (isTablet) {
        return (
            <header className={styles.header}>
                <Logo width={130} height={50}/>
            </header>
        )
    }

    if (isMobile) {
        return (
            <header className={styles.header}>
                <Logo width={100} height={40}/>
            </header>
        )
    }

    return null
}
