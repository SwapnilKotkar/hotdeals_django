import { Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage";
import UserLoginPage from "./Forms/UserLoginPage";
import SignUpPage from './Forms/SignUpPage';
import AdminLoginPage from "./Forms/AdminLoginPage";
import DealSubmit from "./Forms/DealSubmit";
import DealDetails from "./deals components/DealDetails";
import UserHome from "./user components/UserHome";
import AdminHome from "./admin components/AdminHome";


const App = () =>{

    return(
        <>
        <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route exact path='/userlogin' element={<UserLoginPage/>}/>
            <Route exact path='/signup' element={<SignUpPage/>}/>
            <Route exact path='/adminlogin' element={<AdminLoginPage/>}/>
            <Route exact path='/submitdeal' element={<DealSubmit/>}/>
            <Route exact path='/dealdetails' element={<DealDetails/>}/>
            <Route exact path='/userhome' element={<UserHome/>}/>
            <Route exact path='/adminhome' element={<AdminHome/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        </>
    );
}

export default App;