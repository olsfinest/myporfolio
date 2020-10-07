import Layout from '../../components/Layout';
import Logout from '../../components/Logout';
import Authentication from '../../components/Authentication';
import EditPost from '../../components/dashboard/EditPost';

const editpost = () =>  

(
    <Layout>
         <div className="row">
            <div className="container">
                <div className="col-md-12">
                    <Logout></Logout><br/>
               
                    <h1>Edit Post</h1>
                    <EditPost></EditPost>

                    
                    <Authentication></Authentication>  

                </div>   
            </div>  
        </div>
      
    </Layout>

);



export default editpost;