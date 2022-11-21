import React, {useState} from 'react';
import {Posts} from "../../types";
import Button from '@mui/material/Button';
import {TextField} from "@mui/material";

const PostForm = () => {
    const url = 'http://146.185.154.90:8000/messages';

    const [post, setPost] = useState<Posts>({
        author:'',
        message:''
    })

    const postMessage = async (e: React.FormEvent,) => {
        e.preventDefault();
        const data = new URLSearchParams();
        data.set('message', post.message);
        data.set('author', post.author);
       const response = await fetch(url, {
            method: 'post',
            body: data,
        });
        if (response.ok){
            setPost(prev =>({ ...prev, message: ''
        }))
        }
    }

    const messageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPost(prev => ({...prev, message: e.target.value}))
    }

    const authorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPost(prev => ({...prev, author: e.target.value}))
    }


    return (
        <div>
            <form onSubmit={postMessage}>
                <TextField fullWidth label="Author Name: " id="fullWidth" onChange={authorChange} value={post.author} margin='normal'/>
                <TextField fullWidth label="Message: " id="fullWidth" onChange={messageChange} value={post.message} margin='normal'/>
                <Button type='submit' variant='contained'>Post</Button>
            </form>
        </div>
    );
};

export default PostForm;