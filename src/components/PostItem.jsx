import React from 'react';
import {useHistory} from 'react-router-dom';
import Button from './UI/button/Button';

const PostItem = (props) => {
  const router = useHistory();
  const deletePost = () => {
    props.remove(props.post);
  };
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <Button onClick={() => router.push(`/posts/${props.post.id}`)}>
          Открыть
        </Button>
        <Button onClick={deletePost}>Удалить</Button>
      </div>
    </div>
  );
};

export default PostItem;
