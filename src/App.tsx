import React from 'react';
import TodoList from './features/Todos/TodoList';
import VisibilityFilter from './features/VisibilityFilter/VisibilityFilter';
import { ThemeProvider } from 'styled-components';
import purpleTheme from './components/theme';
import { Box } from 'gestalt';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <div id="AppWrapper">
        <Box flex="none" marginTop={2}>
          <VisibilityFilter />
        </Box>
        <Box flex="grow" marginTop={3}>
          <TodoList />
        </Box>
      </div>
    </ThemeProvider >
  );
}

export default App;
