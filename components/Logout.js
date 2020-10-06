import Router from 'next/router'

class Logout extends React.Component {

    onClickLogout = () => {
        
        function eraseCookie(name) {   
            document.cookie = name+'=; Max-Age=-99999999;';  
        }

        eraseCookie('id');
        eraseCookie('username');
        eraseCookie('authenticated');

        alert("Logout");

        Router.push('login');
      
    }


    render() {

            return (
                <div>
                    <br/>
                    <button class="btn btn-danger" onClick={this.onClickLogout} >Logout </button>
                    
                </div>
            );

      
    }

}

export default Logout;