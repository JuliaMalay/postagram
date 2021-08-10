import React, {useState} from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Select from './components/UI/select/Select';

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
  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };
  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '10px 0'}} />
      <div>
        <Select
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
          ]}
        />
      </div>
      {posts.length !== 0 ? (
        <PostList posts={posts} title="Список постов" remove={removePost} />
      ) : (
        <h2 style={{textAlign: 'center'}}>Посты не найдены!</h2>
      )}
    </div>
  );
}

export default App;
