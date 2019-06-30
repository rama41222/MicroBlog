import React, { Component } from 'react';
import { PostService } from './../../services'
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }
    
    async componentWillMount() {
        const posts = await PostService.getAllPosts();
    }
    
    render() {
        return(
            <div>
                <h1>Blog</h1>
            </div>
        )
    }
    
    
}

export default Post;
