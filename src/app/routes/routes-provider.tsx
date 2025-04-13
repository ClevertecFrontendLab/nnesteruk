import { BrowserRouter, Route, Routes } from 'react-router';

import { Home } from '~/pages/home/home';
import { Layout } from '~/pages/layout/layout';

export const RoutesProvider = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/vegan-food' element={<div>Вегетарианская кухня</div>} />
            </Route>
        </Routes>
    </BrowserRouter>
);
