import React, {useEffect, useMemo, useState} from 'react';
import PostService from './API/PostService';
import {usePosts} from './components/hooks/usePosts';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Button from './components/UI/button/Button';
import Loader from './components/UI/Loader/Loader';
import Modal from './components/UI/modal/Modal';
import './styles/App.css';
const axios = require('axios');

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  async function fetchPosts() {
    setIsPostsLoading(true);
    const posts = await PostService.getAll();
    setPosts(posts);
    setIsPostsLoading(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <Button
        onClick={() => {
          setModal(true);
        }}
      >
        Создать новый пост
      </Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>
      <hr style={{margin: '10px 0'}} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostsLoading ? (
        <div
          style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          posts={sortedAndSearchedPosts}
          title="Список постов"
          remove={removePost}
        />
      )}
    </div>
  );
}

export default App;
