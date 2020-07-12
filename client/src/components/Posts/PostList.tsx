import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
        comments: PreComment
    }
};

export const PostList: React.FC<PostListProps> = () => {

}