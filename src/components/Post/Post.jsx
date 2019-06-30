import React, { Component } from 'react';
import { PostService } from './../../services'
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    
    async componentWillMount() {
        const { data } = await PostService.getAllPosts();
        this.setState({ posts: data });
    }
    
    postTitleStyle = () => {
        return {
            background: '#e3e3e3',
            padding: '10px',
            color: '#4e82ff',
            fontSize: '1.3em',
            fontWeight: 'bold'
        }
    };
    
    postBodyStyle = () => {
        return {
            color: '#000000',
            padding: '10px',
            paddingBottom: '20px',
            fontSize: '1em',
            textAlign: 'left'
        }
    };
    
    postStyle = () => {
        return {
            background: '#efefef',
            margin:'5px',
            borderRadius: '10px'
        }
    };
    
    createPosts = () => {
      return this.state.posts.map(post =>(
          <div style={this.postStyle()} key={post.id}>
              <p style={this.postTitleStyle()}>{post.title}</p>
              <p style={this.postBodyStyle()}>{post.body}</p>
          </div>
      ));
    };
    render() {
        const posts = this.createPosts();
        return(
            <div>
                <h1>Blog</h1>
                {posts}
            </div>
        )
    }
}

export default Post;
