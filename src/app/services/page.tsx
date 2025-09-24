import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';

export default function ServicesPage() {
  return (
    <div className="min-h-screen relative">
      <Header />
      <main>
        <Services />
      </main>
      <Footer />
    </div>
  );
}