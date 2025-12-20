import { Outlet } from "react-router-dom" 
import styless from "./layout.module.css" 

import { Footer } from "../Footer/footer" 
import { Header } from "../Header/header" 
import { Main } from "../Main/main2" 

export function Layout() {
	return (
		<div className={styless.layoutContainer}>
			<Header />

            <Main>
                <Outlet></Outlet>
            </Main>

            <Footer />
		</div>
	) 
}
