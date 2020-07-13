import React from 'react';
import { PostCreate, PostList } from './components';

export default () => {
        return(
            <>
                 <div className="container">
                     <h1>Create Post</h1>
                     <PostCreate/>
                     <hr/>
                    <h1>Posts</h1>
                    <PostList/>
                </div>
                
            </>
        )
};

