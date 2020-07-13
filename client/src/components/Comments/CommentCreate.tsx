import React, { useState } from 'react';
import axios from 'axios';

interface CommentCreateProps {
    postId: string;
}

export const CommentCreate: React.FC<CommentCreateProps> =  ({ postId }) => {
    const [ content, setContent ] = useState<string>('');
    
          const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
                        content
                });

                setContent('');
          }
            return(
               <>
                   <form 
                    onSubmit={onSubmit}
                    >
                       <div
                       className="form-group"
                       >
                         <label>
                             New Comment
                         </label>   
                         <input
                         className="form-control"
                         value={content}
                         onChange={e => setContent(e.target.value)}
                         />
                       </div>
                       <button
                       className="btn-primary"
                       >
                           Submit
                      </button>
                   </form>
               </>     
            )
}