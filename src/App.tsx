import React from 'react';
import { TodoList } from './features/Todos/TodoList';
import { VisibilityFilter } from './features/VisibilityFilter/VisibilityFilter';
import { ThemeProvider } from 'styled-components';
import { appTheme } from './components/appTheme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <VisibilityFilter />
      <TodoList />
    </ThemeProvider>
  );
}

export default App;
