import Nav from './components/Nav';
import Home from './components/Home';
import BlogPost from './components/BlogPost';
import Sobre from './components/Sobre';
import Blog from './components/Blog';
import Assitir from './components/Assistir';
import Login from './components/Login';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function RoutesMap(){

    return (
        <BrowserRouter>
            <div className="App">   
                <Nav />
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog/:id" element={<PrivateRoute> <BlogPost /> </PrivateRoute>} />
                <Route path="/blog" element={<PrivateRoute> <Blog /> </PrivateRoute> } />
                <Route path="/sobre" element={<PrivateRoute> <Sobre /> </PrivateRoute> } />
                <Route path="/assistir" element={<PrivateRoute> <Assitir /> </PrivateRoute>} />
                <Route path="/login" element={ <Login /> } />
                <Route path="/logout" element={<PrivateRoute> <Logout /> </PrivateRoute>} />
                <Route path="*" element={
                    <div><h2>ERRO: 404 <br/> PAGINA NÃO ENCONTRADA</h2></div>
                } />
                </Routes>
            </div>
        </BrowserRouter>
    )
}