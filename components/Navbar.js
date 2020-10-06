import Link from 'next/link';

const Navbar = () =>  (

    <div className="row">
       <div className="container">

        <ul className="nav nav-tabs">
                <li><Link href="/">Home</Link></li>
                <li><Link href="about">About Us</Link></li>
                <li><Link href="services">Services</Link></li>
                <li><Link href="porfolio">Portfolio</Link></li>
                <li><Link href="login">Dashboard Login</Link></li>
                <li><Link href="dashboard">Dashboard</Link></li>
        </ul>  
        </div>
    </div>

);


export default Navbar;