import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./Layout/layout"

import { HomePage } from "../pages/home-page/home-page"
import { PostPage } from '../pages/posts-page/all-posts'

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route path="/" element={<HomePage />} />
                    <Route path="/posts" element={<PostPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}