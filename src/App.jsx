import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomePage from './HomePage/HomePage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="px-8 font-Montserrat">
        <Header />
        <HomePage />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
