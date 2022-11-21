import React, {useState} from 'react';
import {Posts} from "../../types";

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
               <label>Author Name:   <input type='text' onChange={authorChange} value={post.author}/> </label>
                <label> Message: <input type='text' onChange={messageChange} value={post.message}/></label>
                <button type='submit'>Post</button>
            </form>
        </div>
    );
};

export default PostForm;