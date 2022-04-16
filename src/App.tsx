import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<h1>home page</h1>} />
                <Route path="/aboutMe" element={<h1>AboutMe</h1>} />
                <Route path="/photos/:id" element={<h1>photo page</h1>} />
            </Routes>
        </>
    );
};

export default App;
