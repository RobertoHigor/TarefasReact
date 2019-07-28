import React from 'react';
import './bootstrap.min.css';
import { Button, Input, ListGroup, ListGroupItem  } from 'reactstrap';

//Classe que renderiza um botão
class Botao extends React.Component {
    render() {
        return (
            //A funcionalidade e o nome do botão virá do onClick passado para ele    
            //Color especifica o tipo do botão do reactstrap       
                <Button            
                onClick={this.props.onClick}
                color={this.props.cor}>
                    {this.props.valor} 
                </Button>
            
        );
    }
}

class Tarefa extends React.Component {
    render() {
        return(
            <ListGroup>        
                {
                    //Mapeando e varrendo os dados do MockData
                    this.props.mockData.map(item =>(                         
                            <ListGroupItem key={item.id} className={item.done ? 'done' : 'hidden'}>

                                {/* Renderizar checkbox e titulo da tarefa */}
                                <Input name="tarefaCompleta" type="checkbox" checked={this.props.done} 
                                onChange={() => this.props.onChange(item.id)} /> 
                                {item.title}
                                
                                {/* Renderizar os botões com seus respectivos métodos */}
                                <Botao valor="Editar" onClick={(e) => this.props.atualizar(e, item.id, item.title)}
                                cor="primary" />
                                <Botao valor="Remover" onClick={(e) => this.props.deletar(item.id, e)}
                                cor="secondary"/>                          
                            </ListGroupItem >        
                    ))
                }      
            </ListGroup> 
        );
    }
}

export default Tarefa;