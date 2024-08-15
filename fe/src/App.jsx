import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Delivery from "./pages/delivery/Delivery";
import Pleasure from "./pages/pleasure/Pleasure";
import Register from "./pages/register/Register";
import Share from "./pages/share/Share";
import Basket from "./pages/basket/Basket";
import Category from "./pages/category/Category";
import AdminLayout from "./layout/AdminLayout";
import Update from "./pages/admin/Update";
import Add from "./pages/admin/Add";
import Admin from "./pages/admin/Admin";
import Success from "./pages/Success";
import Detail from "./pages/Detail";
import PrivateRoute from "./routes/PrivateRoute";
import MainProvider from "./context/MainProvider";

function App() {
  return (
    <>
  
      <HelmetProvider>
            <BrowserRouter>
       <MainProvider>
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/success" element={<Success />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/pleasure" element={<Pleasure />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/delivery" element={<Delivery />} />
                  <Route path="/share" element={<Share />} />
                  <Route path="/basket" element={<Basket />} />
                  <Route path="/detail/:id" element={<Detail />} />
                  <Route path="/category/:categoryId" element={<Category />} />
                </Route>
               <Route element={<PrivateRoute/>}>
                <Route path="/adminLayout/" element={<AdminLayout />}>
                  <Route index element={<Admin />}/>
                  <Route path="/adminLayout/update/:id" element={<Update />} />
                  <Route path="/adminLayout/add" element={<Add />} />
                </Route>
                </Route>
                <Route  path="*" element={<h1 style={{textAlign:"center",marginTop:"200px",color:"#6D6B6B"}}>404 Not Found</h1>} />
              </Routes>
            </MainProvider>
            </BrowserRouter>
      </HelmetProvider>
      
    </>
  );
}

export default App;
