import React from 'react';
import { GlobalStorage } from './globalContext';
import Pergunta from './Components/pergunta';

function App() {
  return (
    <div>
      <GlobalStorage>
        <Pergunta />
      </GlobalStorage>
    </div>
  );
}

export default App;
