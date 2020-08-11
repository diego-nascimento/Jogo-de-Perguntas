import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [pergunta, setPergunta] = React.useState(0);
  const [resposta, setresposta] = React.useState('');
  const [qtdCorretas, setQTDCorretas] = React.useState(0);

  return (
    <GlobalContext.Provider
      value={{
        pergunta,
        setPergunta,
        resposta,
        setresposta,
        qtdCorretas,
        setQTDCorretas,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
