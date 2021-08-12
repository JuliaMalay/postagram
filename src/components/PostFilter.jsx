import React from 'react';
import Input from './UI/input/Input';
import Select from './UI/select/Select';

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <Input
        value={filter.query}
        placeholder="Поиск"
        onChange={(event) => {
          setFilter({...filter, query: event.target.value});
        }}
      />
      <Select
        value={filter.sort}
        onChange={(selectedSort) => setFilter({...filter, sort: selectedSort})}
        defaultValue="Сортировка"
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
        ]}
      />
    </div>
  );
};

export default PostFilter;
