import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Comment from '../Comment/Comment';

const useStyles = makeStyles({
    media: {
        height: 320,
    },
});

const PostDetail = () => {
    const {postId} = useParams();

    const [posts, setPosts] = useState({});
    const [comment, setComment] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    useEffect(() => {
        const commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(commentUrl)
        .then(res => res.json())
        .then(data => setComment(data))
    }, [])

    const classes = useStyles();
    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm" className={classes.media} >
          <Typography component="div" className="each-card" >
           <h2>{posts.title}</h2>
           <p>{posts.body}</p>
           <h3>Comments: {comment.length}</h3>
          </Typography>
        </Container>
        {
            comment.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
        }
      </React.Fragment>
    );
};

export default PostDetail;