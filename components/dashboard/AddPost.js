import axios from 'axios';
import Router from 'next/router'
import Link from 'next/link';

class AddPost extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                post : [],
                title : '',
                content : '', 
                deleteid : '', 
                editid : '', 
            }
        }



        onClickSubmit = () => {
 
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

    
            fetch("https://2cf441c504fa.ngrok.io/reactporfoliowp/wp-json/wp/v2/posts/", requestOptions).then((resp) => resp.json()).then(function(data) {
 
              alert("Added");
              Router.push('/dashboard');
        
            })
            .catch(function(error) {
                console.log(error);
            });


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


            return (
                <div>
                    
                    <span className="btn-danger"><Link  href="/dashboard">Return</Link></span>
               
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
                    <button class="btn btn-primary" onClick={this.onClickSubmit}>Add Post </button> 
                    </div>
                </div>
            );

            
      
    }

}

export default AddPost;