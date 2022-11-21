import React from 'react';
import {PostsResponse}from "../../../types";

const PostBlock: React.FC<PostsResponse> = (props) => {
    return (
        <div>
            <h1> {props.author} #{props.index}</h1>
            <p>{props.message}</p>
            <p> {props.datetime}</p>
        </div>
    );
};

export default PostBlock;