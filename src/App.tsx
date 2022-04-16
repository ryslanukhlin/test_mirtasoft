import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Photo from './pages/Photo';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/aboutMe" element={<h1>AboutMe</h1>} />
                <Route path="/photos/:id" element={<Photo />} />
            </Routes>
        </>
    );
};

export default App;
