import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Menu from './Menu';
import App from './day3/App2';
import Test from './day3/App1';
import Main from './Main';

import StudentList from './component/student/List';
import StudentAdd from './component/student/Add';

import Login from './component/user/Login';

import ProductList from './component/product/List';
import ProductAdd from './component/product/Add';
import ProductView from './component/product/View';
import ProductEdit from './component/product/Edit';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/student/list" element={<StudentList />} />
        <Route path="/student/add" element={<StudentAdd />} />

        <Route path="/product/list" element={<ProductList />} />
        <Route path="/product/add" element={<ProductAdd />} />
        <Route path="/product/view/:productId" element={<ProductView />} />
        <Route path="/product/edit/:productId" element={<ProductEdit />} />

        <Route path="/login" element={<Login />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;