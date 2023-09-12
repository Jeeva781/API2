import React from "react";
import './App.css';
class App extends React.Component {
  
    // Constructor
    constructor(props) {
        super(props);
  
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
  
    componentDidMount() {
        fetch(
"https://jsonplaceholder.typicode.com/posts/1/comments")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    
    render() {
        const { DataisLoaded, items } = this.state;
  
        return (
        <div className = "App">
            <h1> Fetch data from an 2nd api in react </h1>{
                items.map((item) => (
                <ol key = { item.id } ><br></br>
                  <strong>PostId:</strong>   { item.postId },<br></br>
                   <strong>Id:</strong>  { item.id },<br></br>
                   <strong>Name:</strong> { item.namee },<br></br>
                   <strong>email:</strong> {item.email}<br></br>
                   <strong>Body:</strong> {item.body}<br></br>

                </ol>
                ))
            }
        </div>
    );
}
}
  
export default App;