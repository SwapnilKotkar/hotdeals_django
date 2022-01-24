import Navbar from '../Navbar';
import AdminEditProfile from './AdminEditProfile';
import UsersandDealsList from './Users&DealsList';
import Footer from "../Footer";


const AdminHome = () => {

    return(
        <>
          <Navbar />
          <AdminEditProfile/>
          <UsersandDealsList/>
          <Footer/>
        </>
    );
}

export default AdminHome;