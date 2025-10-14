import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AktuellesBanner from './AktuellesBanner';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AktuellesBanner />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
