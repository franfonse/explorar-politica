import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Politicians from '../pages/Politicians/Politicians';
import Parties from '../pages/Parties/Parties';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/politicians" element={<Politicians />} />
            <Route path="/parties" element={<Parties />} />
        </Routes>
    )
}

export default AppRoutes;
