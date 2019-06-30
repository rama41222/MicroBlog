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
    
    createPosts = () => {
      return this.state.posts.map(post =>(
          <div key={post.id}>
              <p>{post.title}</p>
              <p>{post.body}</p>
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
