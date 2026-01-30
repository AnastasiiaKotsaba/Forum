import styles from "./home.module.css"
import { Link } from "react-router-dom"

import { ICONS } from '../../shared';

export function HomePage() {
    return (
        <div>
            <div className={styles.mainBgDiv}>
                <h1>Find Your People</h1>
                <div className={styles.searchBarDiv}>
                    <input type="text" placeholder="Search for new friends"/>
                    <button><ICONS.SearchImage width={21} height={21}/></button>
                </div>
                <button className={styles.createPostBtn}><ICONS.CreatePostBtn width={70} height={70}/></button>
            </div>
    
            <div className={styles.sectionLine}></div>
    
            <div className={styles.mainInfo}>
                <h2 className={styles.mainInfoHeader}>Experience the new adventure</h2>
                <p className={styles.mainInfoDesc}>Welcome to our forum — a space for the free exchange of thoughts, experiences, and knowledge. Here you can create your own posts, share ideas, ask questions, and find like-minded people. </p>
                <div className={styles.description}>
                    <div className={`${styles.FrontEnd} ${styles.cardBlock}`}>
                        <ICONS.FrontEndImage width={100} height={102} />
                        <p className={styles.PText}>Frontend створений на React з використанням TypeScript.
                            Ця частина буде доповнюватися в майбутньому.</p>
                    </div>
                    <div className={`${styles.BackEnd} ${styles.cardBlock}`}>
                        <ICONS.BackEndImage width={100} height={102} />
                        <p className={styles.PText}>Backend реалізований на Node.js з використанням Express.js для створення API.</p>
                    </div>
                    <div className={`${styles.DataBase} ${styles.cardBlock}`}>
                        <ICONS.DataBaseImage width={100} height={102} />
                        <p className={styles.PText}>Є декілька моделей, зокерма User, Tags, post. Основні запити клієнта будуть надсилаттись до БД через MiddleWare</p>
                        
                    </div>
                </div>
            </div>
    
            <div className={styles.sectionLine}></div>

            <div className={styles.howItWorks}>
                <h2 className={styles.howItWorksTitle}>How it works</h2>
                <p className={styles.howItWorksSubtitle}>
                    Start your journey in just a few simple steps
                </p>

                <div className={styles.stepsGrid}>
                    <div className={styles.stepCard}>
                        <span className={styles.stepNumber}>01</span>
                        <h3>Create profile</h3>
                        <p>Tell about yourself and your interests to let others know you.</p>
                    </div>

                    <div className={styles.stepCard}>
                        <span className={styles.stepNumber}>02</span>
                        <h3>Find people</h3>
                        <p>Search by interests, topics and tags to find like-minded people.</p>
                    </div>

                    <div className={styles.stepCard}>
                        <span className={styles.stepNumber}>03</span>
                        <h3>Join discussions</h3>
                        <p>Comment, react and take part in conversations that matter to you.</p>
                    </div>

                    <div className={styles.stepCard}>
                        <span className={styles.stepNumber}>04</span>
                        <h3>Share & grow</h3>
                        <p>Create posts, share ideas and grow together with the community.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
