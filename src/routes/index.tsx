import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom';
import Portfolio from '../pages/Portfolio';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Portfolio />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default Routes;