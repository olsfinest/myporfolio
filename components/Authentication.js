import Router from 'next/router'


class Authentication extends React.Component {


    componentDidMount() {

        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
              var c = ca[i];
              while (c.charAt(0) == ' ') {
                c = c.substring(1);
              }
              if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
              }
            }
            return "";
        }

        var id = getCookie("id");
        var username = getCookie("username");
        var authenticated = getCookie("authenticated");

       
        if(id == false && username == false && authenticated == false) {

            Router.push('login');

        }

    }

    render() {

      
        return (
            <div></div>
        );

      
    }

}

export default Authentication;