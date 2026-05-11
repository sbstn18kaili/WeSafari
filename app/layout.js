import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'Great Roar Safaris | Tanzania Private Safari Operator',
    template: '%s | Great Roar Safaris'
  },
  description:
    'Great Roar Safaris is a Tanzania-based tour operator crafting private safaris, Kilimanjaro day hikes, cultural experiences, and Zanzibar beach extensions.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
