import axios from 'axios';
import Router from 'next/router'
import Link from 'next/link';



class Post extends React.Component {

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

        

        componentDidMount() {

            axios.get('https://2cf441c504fa.ngrok.io/reactporfoliowp/wp-json/wp/v2/posts')
                .then(res => this.setState({
                    post : res.data ,
                    isLoaded : true
                }))
            .catch(err => console.log(err));
    
        }



        onClickDeleteSubmit = (event) => {

            const id =  event.target.value;

            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvMmNmNDQxYzUwNGZhLm5ncm9rLmlvXC9yZWFjdHBvcmZvbGlvd3AiLCJpYXQiOjE2MDIwNzY4NjAsIm5iZiI6MTYwMjA3Njg2MCwiZXhwIjoxNjAyNjgxNjYwLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.utKKN-pwqpIQW0wJ34ri3CDw0AlkWofOR9f4oUxW_NM");

            var raw = "";

            var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch("https://2cf441c504fa.ngrok.io/reactporfoliowp/wp-json/wp/v2/posts/" + id, requestOptions)
            .then((resp) => resp.json()).then(function(data) {
                
                alert("Deleted");
                window.location.reload(false);
          
            })
              .catch(function(error) {
                  console.log(error);
            });

        }

    

    render() {

            const isLoaded = this.state.isLoaded;
            const post = this.state.post;
      
            if(isLoaded) {

            const listItems = post.map((postlist) =>
            
            <tr>
                <td>{postlist.id}</td>
                <td>{postlist.title.rendered}</td>
                <td><button class="btn btn-primary"><Link  href={'dashboard/editpost/?id='+ postlist.id}>Edit</Link></button></td>
                <td><button class="btn btn-danger" onClick={this.onClickDeleteSubmit} value={postlist.id}>Delete</button></td>
            </tr>
            );
                


            return (
                <div>
                    <br/>
                    <span className="btn-danger"><Link  href="dashboard/addpost">Add Post</Link></span>
                    <h2>Show Post List</h2>
                    <br/>
                    <div className="table-responsive">
                    <table className="table">
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {listItems}
                    </table>
                    </div>
                    <br/><br/>
                  
                </div>
            );

            } else {
                return (<div></div>)
            }
        
      
    }

}

export default Post;