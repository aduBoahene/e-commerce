import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Hero from './Components/Hero';
import AdBanner from './Components/AdBanner';
import ProductList from './Components/ProductList';
import ReverserProductList from './Components/ReverseProductList';
import Watches from './Components/Watches';
import Oculus from './Components/Oculus';
import HeadPhones from './Components/HeadPhones';
import BlueSection from './Components/BlueSection';
import MyFooter from './Components/MyFooter';

function App() {

  return (
   <div className='bg-gray-100 md:h-full'>
      <Nav/>
      <Header/>
      <Hero/>
      <AdBanner />
      <ProductList/>
      <ReverserProductList/>
      <Watches/>
      <Oculus/>
      <HeadPhones/>
      <BlueSection/>
      <MyFooter/>
    </div>
  );
}

export default App;
