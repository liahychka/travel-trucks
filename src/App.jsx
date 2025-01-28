import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from 'react';
import Navigation from './components/Navigation/Navigation';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const CampersDetailsPage = lazy(() => import('./pages/CampersDetailsPage/CampersDetailsPage'));
const ReviewsCampers = lazy(() => import('./components/ReviewsCampers/ReviewsCampers'));
const FeaturesCampers = lazy(() => import('./components/FeaturesCampers/FeaturesCampers'));

const App = () => {
  return (
      <div>
      <Navigation />
      <Suspense fallback={ <h2>Loading by suspense</h2> } >
                  <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="catalog/:id" element={<CampersDetailsPage />} >
          <Route path="features" element={<FeaturesCampers />} />
          <Route path="reviews" element={<ReviewsCampers />}/>
        </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

    </div>
  )
}


export default App;

