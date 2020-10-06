import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
<div>
        <Head>
            <title>Bitsprice</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"></link>
           
        </Head>

        <Navbar/>

        {props.children}
</div>


    
);


export default Layout;