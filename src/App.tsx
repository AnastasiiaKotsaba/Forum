import { Header } from "./components/Header/header"
import { PostList } from "./components/PostList/post-list"
import { Footer } from "./components/Footer/footer"
import { Main } from "./components/Main/main"

export function App(){
    return (
        <div>
            <Header></Header>
            <Main>
                <PostList />
            </Main>
            <Footer></Footer>
        </div>
    )
}