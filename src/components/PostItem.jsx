import React from 'react';
import Button from './UI/button/Button';

const PostItem = (props) => {
  const deletePost = () => {
    props.remove(props.post);
  };
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <Button onClick={deletePost}>Удалить</Button>
      </div>
    </div>
  );
};

export default PostItem;