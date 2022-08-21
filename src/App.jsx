import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import CatDetail from './Pages/CatDetail';
import HomePage from './Pages/HomePage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="px-8 font-Montserrat">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cat/details/:breedId" element={<CatDetail />} />
        </Routes>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
