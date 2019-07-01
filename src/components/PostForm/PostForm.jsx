import React, { Component, Fragment } from 'react';
import  { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  createPost } from './../../actions/postActions';

class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }
    
    formStyle = () => {
      return {
          background: '#f4f4f4',
          padding: '20px',
          margin: '5px',
          borderRadius: '10px',
          webKitBoxShadow: '0 8px 6px -6px black',
          MozBoxShadow: '0 8px 6px -6px black',
          boxShadow: '0 8px 6px -6px black',
      }
    };
    
    formInnerWrap = () => {
        return {
            width: '70%',
            margin: 'auto',
            padding: '5px'
        }
    };
    
    formGroupStyle = () => {
        return {
            display: 'flex',
            padding: '5px',
            justifyContent: 'flex-end',
        }
    };
    
    inputLabelStyle = () => {
        return {
            flex: '4'
        }
    };
    
    formInputStyle = () => {
        return {
            flex: '10',
            padding: '5px',
        }
    };
    
    formButtonStyle = () => {
        return {
            backgroundColor: '#4e82ff',
            color: '#fff',
            margin: '10px',
            marginRight: '0px',
            padding: '10px',
            borderRadius: '10px',
            fontWeight: 'bold',
            width: '100px',
            minWidth: '50px',
        }
    };
    
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    
    onSubmit = async () => {
        if(!(this.state.title && this.state.body)) {
            alert('Title and body is required');
            return;
        }
        this.props.createPost(this.state);
    };
    
    render() {
        return(
            <Fragment>
                <form style={this.formStyle()}>
                    <div style={this.formInnerWrap()}>
                        <div style={ this.formGroupStyle() }>
                            <label
                                style={ this.inputLabelStyle() }
                                htmlFor='title'>Title
                            </label>
                            <input
                                required='true'
                                style={ this.formInputStyle() }
                                id='title'
                                name='title'
                                value={this.state.title}
                                type='text'
                                onChange={this.onChange}
                            />
                        </div>
                        <div style={ this.formGroupStyle() }>
                            <label
                                style={ this.inputLabelStyle() }
                                htmlFor='body'>Content
                            </label>
                            <textarea
                                required='true'
                                style={ this.formInputStyle() }
                                id='body'
                                name='body'
                                value={this.state.body}
                                onChange={this.onChange}
                                type='text'>
                            </textarea>
                        </div>
    
                        <div style={ this.formGroupStyle() }>
                            <input
                                onClick={this.onSubmit}
                                value='Submit'
                                type='button'
                                style={ this.formButtonStyle() }/>
                        </div>
                    </div>
                </form>
            </Fragment>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);
