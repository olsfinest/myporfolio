import React, {Component} from 'react'
import axios from 'axios';
import { useRouter } from 'next/router'

class Single extends React.Component {
    
    
    state = {
        post : [],
        isLoaded : false
    }

    componentDidMount() {

        function getUrlParameter(name) {
            name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            var results = regex.exec(location.search);
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        };

        const $id = getUrlParameter('id');
       
        axios.get('http://2cf441c504fa.ngrok.io/reactporfoliowp/wp-json/wp/v2/posts/' + $id)
        .then(res => this.setState({
            post : res.data ,
            isLoaded : true
        }))
        .catch(err => console.log(err));

    }
    
    render() {
     
        const isLoaded = this.state.isLoaded;
        const post = this.state.post;

      

        if(isLoaded) {


            return (
            <div className="row">
                <div className="container">
                    <div className="col-md-12">
                        <h1>{post.title.rendered}</h1>
                        <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
                    </div>
                </div>
            </div>
            );

        } else {

            return (
                <div></div>
            );

        }

      
    }

}

const Single1 = (props) => {
    return props.name;
}


export default Single;