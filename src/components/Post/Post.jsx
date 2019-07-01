import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from "../../actions/postActions";

class Post extends Component {
    async componentWillMount() {
     await this.props.fetchPosts();
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
      return this.props.posts.map(post =>(
          <div style={this.postStyle()} key={post.id}>
              <p style={this.postTitleStyle()}>{post.title}</p>
              <p style={this.postBodyStyle()}>{post.body}</p>
          </div>
      ));
    };
    render() {
        const p = this.createPosts();
        return(
            <Fragment>
                {p}
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    
});

export default connect(mapStateToProps, { fetchPosts })(Post);
