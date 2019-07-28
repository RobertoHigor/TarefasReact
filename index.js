import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Quadro from './quadro'

//Classe responsável por renderizar o quadro
class App extends React.Component {
    render() {
      return(
        <div>
          <h1>Lista de Tarefas</h1>                       
            <Quadro  />
        </div>
      );
    }
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
);