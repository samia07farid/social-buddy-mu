import React from 'react';
import { Avatar } from '@material-ui/core';
import './Comment.css'

const Comment = (props) => {
    const {name, email, body} = props.comment;
   
    
    return (
        <div className="comment-container">
            <div style={{display: 'flex'}}>
            <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"/>
            <h4 className="profile-name">Name: {name} </h4>
            </div>
            <span className="email">{email}</span>
            <h4>{body}</h4>
        </div>
    );
};

export default Comment;