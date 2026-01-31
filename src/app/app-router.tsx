import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./Layout/layout"
import { HomePage, PostPage, OnePostPage } from "../pages"


export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route path="/" element={<HomePage />} />
                    <Route path="/posts" element={<PostPage />} />
                    <Route path="/post/:id" element = {<OnePostPage/>}/>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}