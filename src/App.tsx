import {Route, Routes} from 'react-router-dom';
import Header from '../Header/Header.tsx'

import Nav from "./component/Ex1/Nav.tsx";
import Home from "./component/Ex1/Home.tsx";
import Contact from "./component/Ex1/Contact.tsx";
import About from "./component/Ex1/About.tsx";
import Ex2 from "./component/Ex2.tsx";
import Ex3 from "./component/Ex3.tsx";
import Ex4 from "./component/Ex4.tsx";
import NotFound from "./component/NotFound.tsx";

import NavEx6 from "./component/Ex6/NavEx6.tsx"
import HomeEx6 from "./component/Ex6/HomeEx6.tsx"
import Product from "./component/Ex6/Product.tsx";
import Detail from "./component/Ex6/Detail.tsx";
import CustomLink from "./component/Ex7/CustomLink.tsx";
import HomePage from "./component/Ex7/HomePage.tsx";
import ListUser from "./component/Ex8/ListUser.tsx";
import UserDetail from "./component/Ex8/UserDetail.tsx";
function App() {


    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/ex1" element={<Nav />}>
                        <Route path="home" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                    <Route path="/ex2" element={<Ex2 />} />
                    <Route path="/ex3" element={<Ex3 />} />
                    <Route path="/ex4" element={<Ex4 />} />
                    <Route path="/ex6" element={<NavEx6 />}>
                        <Route path="homeEx6" element={<HomeEx6 />} />
                        <Route path="product" element={<Product />} />
                        <Route path="detail" element={<Detail />} />
                    </Route>
                    <Route path="/ex7" element={<CustomLink />} />
                    <Route path="/ex7/home-page" element={<HomePage />} />
                    <Route path="/ex8" element={<ListUser />} />
                    <Route path="/user/:id" element={<UserDetail />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

            </main>
        </>
    )
}

export default App