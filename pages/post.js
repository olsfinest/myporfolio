import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Single from '../components/Single';

const query = () => {
    const router = useRouter()
    const { pid } = router.query
    return pid
}

const Post = (props) =>  {
  console.log(props);
   return  (
    <Layout>
        <div>

            <Single />

        </div>
    </Layout>

    );
};





export default Post;