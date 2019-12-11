import React from 'react';
import { TodoList } from './features/Todos/TodoList';
import { VisibilityFilter } from './features/VisibilityFilter/VisibilityFilter';
import { ThemeProvider } from 'styled-components';
import { purpleTheme } from './components/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <VisibilityFilter />
      <TodoList />
    </ThemeProvider>
  );
}

export default App;
