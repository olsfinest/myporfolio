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

            axios.get('https://www.baguiotransient.net/olsfinesttest/wp-json/wp/v2/posts')
                .then(res => this.setState({
                    post : res.data ,
                    isLoaded : true
                }))
            .catch(err => console.log(err));
    
        }



        onClickDeleteSubmit = (event) => {

            const id =  event.target.value;

            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3d3LmJhZ3Vpb3RyYW5zaWVudC5uZXRcL29sc2ZpbmVzdHRlc3QiLCJpYXQiOjE2MDE5OTcyMzIsIm5iZiI6MTYwMTk5NzIzMiwiZXhwIjoxNjAyNjAyMDMyLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.dwQ5OZhW78zQVQbNsLS6a1D2usmgbZEMFEiuYaNN7-4");

            var raw = "";

            var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch("https://www.baguiotransient.net/olsfinesttest/wp-json/wp/v2/posts/" + id, requestOptions)
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