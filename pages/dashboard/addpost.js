import Layout from '../../components/Layout';
import Logout from '../../components/Logout';
import Authentication from '../../components/Authentication';
import AddPost from '../../components/dashboard/AddPost';

const addpost = () =>  

(
    <Layout>
         <div className="row">
            <div className="container">
                <div className="col-md-12">
                    <Logout></Logout><br/>

                    <h1>Add Post</h1>

                    <AddPost></AddPost>
                    
                    <Authentication></Authentication>  

                </div>   
            </div>  
        </div>
      
    </Layout>

);



export default addpost;