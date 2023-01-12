import 'macro-css';
import Header from './components/Header';
import BannerSection from './components/SECTIONS/BannerSection';
import ShopSection from './components/SECTIONS/ShopSection';
import CartSection from './components/SECTIONS/CartSection';


function App() {
  return (
    <div className='main-section'>
      {/* <CartSection></CartSection> */}
      <Header></Header>
      <BannerSection></BannerSection>
      <ShopSection></ShopSection>
    </div>
  );
}

export default App;
