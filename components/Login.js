
import Router from 'next/router'
import Logout from '../components/Logout';

class Login extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                username : '',
                password : '',  
            }
        }


        onClickSubmit = () => {

        function setCookie(cname, cvalue, exdays) {
                var d = new Date();
                d.setTime(d.getTime() + (exdays*24*60*60*1000));
                var expires = "expires="+ d.toUTCString();
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

        
        var myHeaders = new Headers();

        myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8yY2Y0NDFjNTA0ZmEubmdyb2suaW9cL3JlYWN0cG9yZm9saW93cCIsImlhdCI6MTYwMjA3NDQ3MSwibmJmIjoxNjAyMDc0NDcxLCJleHAiOjE2MDI2NzkyNzEsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.TKJNAqafBZiUGX_4pAtOdYhmoid-I4Z-C3KfBeA6dHQ");

        var formdata = new FormData();
        formdata.append("username", this.state.username);
        formdata.append("password", this.state.password);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };


        fetch("http://2cf441c504fa.ngrok.io/reactporfoliowp/wp-json/admin/loggedinuser", requestOptions).then((resp) => resp.json()).then(function(data) {

        console.log(data);

        if(data.authentication == "authenticated") {

          
            alert("login successfull");

            setCookie("authenticated", data.authentication, 365);
            setCookie("username", data.username, 365);
            setCookie("id", data.id, 365);

            Router.push('dashboard');


        } else {

            alert("login failed");

        }

        })
        .catch(function(error) {
            console.log(error);
        });


        }

        onChangeUsername = (event) => {
            this.setState({
                username : event.target.value
            })
        }

        onChangePassword = (event) => {

            this.setState({
                password : event.target.value
            })

        }


    render() {
      

            return (
                <div className="row">
                    <div className="container">
                        <div className="col-md-12">
                            <Logout></Logout>
                            <br/>
                            <label>Username</label>
                            <br/>
                            <input type="text" value={this.state.username} onChange={this.onChangeUsername}  />
                            <br/>
                            <label>Password</label>
                            <br/>
                            <input type="password" value={this.state.password}  onChange={this.onChangePassword} />
                            <br/><br/>
                            <button onClick={this.onClickSubmit} >Login </button>
                        </div>
                    </div>
                </div>
            );

        
      
    }

}

export default Login;