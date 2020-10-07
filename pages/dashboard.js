import Layout from '../components/Layout';
import Logout from '../components/Logout';
import Authentication from '../components/Authentication';
import Post from '../components/dashboard/Post';

const Dashboard = () =>  

(
    <Layout>
         <div className="row">
            <div className="container">
                <div className="col-md-12">
                    <Logout></Logout><br/>

                    <h1>My Dashboard</h1>

                    <Post></Post>

                    <Authentication></Authentication>  

                </div>   
            </div>  
        </div>
      
    </Layout>

);



export default Dashboard;