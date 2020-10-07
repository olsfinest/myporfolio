import axios from 'axios'

class Form extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            title : '',
            content : '',
            status : 'publish'
        }

    }

  

    onClickSubmit = (event) => {

        var myHeaders = new Headers();

        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvMmNmNDQxYzUwNGZhLm5ncm9rLmlvXC9yZWFjdHBvcmZvbGlvd3AiLCJpYXQiOjE2MDIwNzY4NjAsIm5iZiI6MTYwMjA3Njg2MCwiZXhwIjoxNjAyNjgxNjYwLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.utKKN-pwqpIQW0wJ34ri3CDw0AlkWofOR9f4oUxW_NM");

        var raw = JSON.stringify({"title":this.state.title,"content":this.state.content,"status":this.state.status});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://2cf441c504fa.ngrok.io/reactporfoliowp/wp-json/wp/v2/posts/", requestOptions).then(response => response.text()).then(result => console.log(result)).catch(error => console.log('error', error));

        alert("Post Submitted");

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
                    <form method="post">
                        <label>Title</label>
                        <br/>

                        <input type="text" value={this.state.title} onChange={this.onChangeTitle}  />
                        <br/>
                        <label>Content</label>
                        <br/>
                        <input type="text" value={this.state.content}  onChange={this.onChangeContent} />
                        <br/>
                        <input type="submit" value="submit" name="submit" onClick={this.onClickSubmit} />

                    </form>
                </div>
            );

        
      
    }

}

export default Form;