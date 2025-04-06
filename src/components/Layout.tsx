import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className='my-16'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
