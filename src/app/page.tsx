import Image from 'next/image';
import Banner from './(components)/Banner';
import Collection from './(components)/Collection';
import Product from './(components)/Product';
import Footer from './(components)/Footer';
import Service from './(components)/Service';
import UpgradeProcess from './(components)/UpgradeProcess';
import CustomerPerception from './(components)/CustomerPerception';
import Navbar from './(components)/Navbar';
import Client from './(components)/Client';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <Banner />
      <Collection />
      <Product />
      <Service />
      <UpgradeProcess />
      <CustomerPerception />
      <Footer />
      <Client />
    </main>
  );
}
