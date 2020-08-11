import React from 'react';
import Radio from '../Form/Radio';
import perguntas from '../PerguntasLista';
import { GlobalContext } from '../globalContext';

function Pergunta() {
  const global = React.useContext(GlobalContext);

  const handleClick = () => {
    if (global.resposta) {
      if (global.resposta === perguntas[global.pergunta].resposta) {
        global.setQTDCorretas(global.qtdCorretas + 1);
      }
      global.setresposta('');
      global.setPergunta(global.pergunta + 1);
    } else {
      alert('Pergunta nao respondida');
    }
  };

  const resetar = () => {
    global.setPergunta(0);
    global.setQTDCorretas(0);
  };

  return (
    <>
      {perguntas[global.pergunta] ? (
        <>
          <div style={{ border: '1px solid black', padding: '10px 10px' }}>
            <p>{perguntas[global.pergunta].id}</p>
            <p>{perguntas[global.pergunta].pergunta}</p>
            <Radio
              options={perguntas[global.pergunta].options}
              value={global.resposta}
              setValue={global.setresposta}
            />
          </div>
          <button style={{ marginTop: '10px' }} onClick={handleClick}>
            Proxima
          </button>
        </>
      ) : (
        <div>
          <h1>Resultado:</h1>
          <p>
            Você acertou {global.qtdCorretas} de {perguntas.length} questões!
          </p>
          <button onClick={resetar}>Começar Denovo</button>
        </div>
      )}
    </>
  );
}

export default Pergunta;
