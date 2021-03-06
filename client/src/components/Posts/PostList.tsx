import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CommentCreate, CommentList } from '../Comments';


interface PreComment {
    id: string;
    content: string;
    status: string;
}

interface PostListProps {
    [key: string]: {
        id: string;
        title: string;
        comments: PreComment[];
    }
}

export const PostList: React.FC<PostListProps> = () => {
    const [posts, setPosts] = useState<PostListProps>({});
    const fetchPosts = async () => {
            const res = await axios.get('http://localhost:4002/posts');
            
            setPosts(res.data);
    };

        useEffect(() => {
                fetchPosts();
        }, []);

       const renderedPosts = Object.values(posts).map(post => {
            return(
                <div
                className="card"
                key={post.id}
                >
                    <div
                    className="card-body"
                    >
                     <h3>{post.title}</h3>
                     <CommentList 
                     comments={post.comments}
                     />
                     <CommentCreate
                     postId={post.id}
                     />
                    </div>
                </div>
            )
       });
            return (
                <div
                className="align"
                >
                    {renderedPosts}
                </div>
            )
};