import React from 'react';
import {PostsResponse}from "../../../types";
import {Avatar, Divider, Grid, ListItem} from "@mui/material";

const PostBlock: React.FC<PostsResponse> = (props) => {
    return (
        <ListItem>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Avatar src='/broken-image.jpg' sx={{width: 50, height:50}}></Avatar>
                    <h2> {props.author} </h2>
                </Grid>
                <Grid item xs={4} textAlign='right' margin='normal'>
                    <p>Post #{props.index}</p>
                </Grid>
                <Grid item xs = {12} textAlign='center'>
            <p>{props.message}</p>
                </Grid>
            <Divider/>
                <Grid item xs ={12} textAlign='right'>
            <p> {props.datetime}</p>
                </Grid>
            </Grid>
        </ListItem>
    );
};

export default PostBlock;