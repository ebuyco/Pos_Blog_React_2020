import React, { useState } from 'react';
import axios from 'axios';

interface PostCreateProps {

}

export const PostCreate: React.FC<PostCreateProps> = () => {
        const [ title, setTitle ] = useState('');
        const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            await axios.post('http://localhost:4000/posts', {
                    title
            });

            setTitle('');
        }
        return(
            <div>
              <form 
              onSubmit={onSubmit}
              >
                  <div className="form-group">
                    <label htmlFor="form">Title</label>
                    <input 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="form-control"/>
                    </div>
                    <button className="btn btn-primary">Submit</button>
              </form>
            </div>
        )
}