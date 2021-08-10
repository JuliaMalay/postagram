import React, {useState} from 'react';
import Button from './UI/button/Button';
import Input from './UI/input/Input';

const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''});
  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({title: '', body: ''});
  };

  return (
    <form>
      <Input
        value={post.title}
        type="text"
        placeholder="Название поста"
        onChange={(event) => {
          setPost({...post, title: event.target.value});
        }}
      />
      <Input
        value={post.body}
        type="text"
        placeholder="Описание поста"
        onChange={(event) => {
          setPost({...post, body: event.target.value});
        }}
      />
      <Button onClick={addNewPost}>Создать пост</Button>
    </form>
  );
};

export default PostForm;
