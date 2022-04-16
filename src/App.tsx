import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Photo from './pages/Photo';
import About from './pages/About';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/aboutMe" element={<About />} />
                <Route path="/photos/:id" element={<Photo />} />
            </Routes>
        </>
    );
};

export default App;
