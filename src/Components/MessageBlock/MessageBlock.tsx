import React, {useEffect, useState} from 'react';
import {PostsResponse} from "../../types";
import PostBlock from "./PostBlock/PostBlock";

const MessageBlock = () => {
    const [posts, setPosts] = useState<PostsResponse[]>([]);

    let url = 'http://146.185.154.90:8000/messages';

    useEffect(() => {
        setInterval(() => {
            const fetchData = async (urlValue: string) => {
                const response = await fetch(urlValue);
                if (response.ok) {
                    const postsResponse: PostsResponse[] = await response.json();
                    if (postsResponse.length > 0) {
                        url = 'http://146.185.154.90:8000/messages?datetime=' + postsResponse[postsResponse.length-1]?.datetime
                        setPosts(prev => (prev.concat(postsResponse).reverse()));
                    }
                }
            };
            fetchData(url).catch(e => console.error(e))
        }, 2000)

    }, []);
    return (
        <div>
            {posts.map((item, index) => (
                <PostBlock key={Math.random()} message={item.message} author={item.author} datetime={item.datetime} index={index}/>))}

        </div>
    );
};

export default MessageBlock;