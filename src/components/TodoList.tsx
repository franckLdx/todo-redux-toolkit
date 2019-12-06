import React from 'react';
import { Todo } from './Todo';

export const TodoList: React.SFC = () => {
  return <div>
    <Todo key="1" label="First" done={false}></Todo>
    <Todo key="2" label="Second" done={false}></Todo>
    <Todo key="3" label="Third" done={false}></Todo>
  </div >
}