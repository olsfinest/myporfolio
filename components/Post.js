import axios from 'axios';
import Link from 'next/link';


class Post extends React.Component {

    
    state = {
        post : [],
        isLoaded : false
    }

    componentDidMount() {
        axios.get('https://2cf441c504fa.ngrok.io/reactporfoliowp/wp-json/wp/v2/posts')
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

            const listItems = post.map((postlist) =>
            
            <div className="col-md-4 postlist">
              
                    <h2>{postlist.title.rendered}</h2>

                    <span dangerouslySetInnerHTML={{__html: postlist.excerpt.rendered}} />

                    <Link href={'/post/?id='+ postlist.id}>Click Here</Link>
                  
             </div>
            );

            return (
            <div>
                {listItems}
            </div>
            );

        } else {

            return (
                <div>
                
                </div>
            );

        }

      
    }

}

export default Post;