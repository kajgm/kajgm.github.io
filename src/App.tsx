import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from 'features/layout';
import Index from './pages/Index';
import PageNotFound from './pages/NotFound';
import 'styles/global.scss';

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Main />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
