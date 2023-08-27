import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductsProvider } from './context/ProductsContext/ProductsState'
import { UserProvider } from './context/UserContext/UserState'
import { OrdersProvider } from './context/OrdersContext/OrdersContext'
import Contact from './components/Contact/Contact';
import PageNotFound from './components/PageNotFound/PageNotFound'
import ProductsView from './components/ProductsView/ProductsView'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Profile from './components/Profile/Profile'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Search from './components/Search/Search'
import NavBar from './components/NavBar/NavBar'
import VideoBack from './components/VideoBack/VideoBack'
import Audio from './components/Audio/Audio'
import Image from './components/Image/Image'
import Paypal from './components/PayPal/PayPal'
import ProductsImage from './components/ProductsImage/ProductsImage';
import Carousel from "react-multi-carousel";
import { productData, responsive } from "./data";
import "react-multi-carousel/lib/styles.css";

function App() {

  const product = productData.map((item) => (
    <ProductsImage name={item.name}
      url={item.imageurl} price={item.price}
      description={item.description}
    />));

  return (
    <>

      <div className="GlobalContainer">
        <BrowserRouter>
          <UserProvider>
            <ProductsProvider>
              <OrdersProvider>
                <NavBar />
                <Routes>
                  <Route path="/paypal" element={<Paypal />} />
                  <Route path="/image" element={<Image />} />
                  <Route path="/audio" element={<Audio />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/home" element={<VideoBack />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/product/:productId" element={<ProductsView />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/*" element={<PageNotFound />} />
                </Routes>
                <Carousel showDots={true}
                  responsive={responsive}>
                  {product}</Carousel>
                <Footer />
              </OrdersProvider>
            </ProductsProvider>
          </UserProvider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
