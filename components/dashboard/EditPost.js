import axios from 'axios';
import Router from 'next/router'
import Link from 'next/link';

class EditPost extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                post : [],
                title : '',
                content : '', 
            }
        }

        componentDidMount() {

            function getUrlParameter(name) {
                name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
                var results = regex.exec(location.search);
                return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
            };
    
            const $id = getUrlParameter('id');
          
            axios.get('https://2cf441c504fa.ngrok.io/reactporfoliowp/wp-json/wp/v2/posts/' + $id)
            .then(res => this.setState({
                post : res.data ,
                isLoaded : true,
                title : res.data.title.rendered,
                content : res.data.content.rendered

            }))
            .catch(err => console.log(err));

        }


        onClickSubmit = () => {

            function getUrlParameter(name) {
                name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
                var results = regex.exec(location.search);
                return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
            };
    
            const $id = getUrlParameter('id');

            const urlfetch = "https://2cf441c504fa.ngrok.io/reactporfoliowp/wp-json/wp/v2/posts/" + $id;

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvMmNmNDQxYzUwNGZhLm5ncm9rLmlvXC9yZWFjdHBvcmZvbGlvd3AiLCJpYXQiOjE2MDIwNzY4NjAsIm5iZiI6MTYwMjA3Njg2MCwiZXhwIjoxNjAyNjgxNjYwLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.utKKN-pwqpIQW0wJ34ri3CDw0AlkWofOR9f4oUxW_NM");
            
            var raw = JSON.stringify({"title":this.state.title,"content":this.state.content,"status":"publish"});
            
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch(urlfetch, requestOptions)
            .then(response => response.text())
            .then(function(data) {
 
                alert("Updated");
                Router.push('/dashboard');
        
            })
            .catch(error => console.log('error', error));
            
           
 
        }


        onChangeTitle = (event) => {

            this.setState({
                title : event.target.value
            })

        }

        onChangeContent = (event) => {

            this.setState({
                content : event.target.value
            })

        }


    render() {

             const isLoaded = this.state.isLoaded;
             const post = this.state.post;

            if(isLoaded) {

            return (
                <div>
                   
                    <span className="btn-danger"><Link  href="/dashboard">Return</Link></span>
              
                    <br/>
                    <div className="form-group">
                        <label>Title</label>
                        <br/>
                        <input class="form-control" type="text" value={this.state.title} onChange={this.onChangeTitle}  />
                        <br/>
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <br/>
                        <textarea className="form-control" rows="6"  onChange={this.onChangeContent}>{this.state.content}</textarea>
                        <br/>
                    </div>
                    <div className="form-group">
                    <button class="btn btn-primary" onClick={this.onClickSubmit}>Edit Post </button> 
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

export default EditPost;