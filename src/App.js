import React, {useMemo, useState} from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Button from './components/UI/button/Button';
import Modal from './components/UI/modal/Modal';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'JavaScript',
      body: 'Мультипарадигменный язык программирования',
    },
    {
      id: 2,
      title: 'HTML',
      body: 'Язык гипертекстовой разметки',
    },
    {
      id: 3,
      title: 'CSS',
      body: 'Каскадные таблицы стилей',
    },
  ]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);

  // useMemo первый аргумент - результат вычислений, второй - массив зависимостей
  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
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

      <PostList
        posts={sortedAndSearchedPosts}
        title="Список постов"
        remove={removePost}
      />
    </div>
  );
}

export default App;
