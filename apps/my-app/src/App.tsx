import { Button, Preflight, ThemeProvider } from '@my-cool-lib/ui';

import './App.css';

function App() {
  return (
    <>
      <Preflight />
      <ThemeProvider>
        <div className="App">
          <Button>Push me bb</Button>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
