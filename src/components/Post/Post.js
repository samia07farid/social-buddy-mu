import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import './Post.css'

const useStyles = makeStyles({
    media: {
        height: 320,
    },
});

const Post = (props) => {
    const {title, body, id} = props.post;

    const classes = useStyles();
    
    return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.media} >
        <Typography component="div" className="each-card" >
         <h2>{title}</h2>
         <p>{body}</p>
        <Link to={`/post/${id}`} className="button">
          <Button variant="contained" color="secondary">
             Read details
          </Button>
        </Link>
        </Typography>
      </Container>
    </React.Fragment>
    );
};

export default Post;


