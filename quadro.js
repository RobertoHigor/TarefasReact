import React from 'react';
import Tarefa from './tarefa'
import Formulario from './formulario'
class Quadro extends React.Component{
    
    //Construtor da classe Tarefa
    constructor(props){ 
        super(props)  
        //Valores de estado da classe
        this.state = {    
            //Valor para saber se é para mostrar ou não o formulário de editar
            edit: false,            
            mockData: [
                {      
                    id: '1',      
                    title: 'Estudar',      
                    done: false,                     
                },
                {      
                    id: '2',      
                    title: 'Exercitar',      
                    done: false,        
                }                 
            ]  
        }
    }

    //Método de inserção de dados
    onSubmitHandle(event){
        event.preventDefault();
        this.setState(
            {
                //Espalha os valores do estado de mockData nos cambox entre chaves.
                mockData: [...this.state.mockData,
                {
                    id: Date.now(),
                    title: event.target.item.value,
                    done: false                  
                }]
            }
        );
        
        //Limpa o campo de inserir a tarefa
        event.target.item.value = '';
    }

    //Método de remoção de dados
    onDeleteHandle(event, itemId) {
        let id = arguments[0];

        //Cria um novo array do mockData sem as tarefas removidas
        this.setState({
            mockData: this.state.mockData.filter(
                item => {
                    if (item.id !== id) {
                        return item;
                    }
                }
            )
        });
    }

    //Método para mostrar o formulário de edição
    renderEditForm() {
        if (this.state.edit) {
            return(                       
                <Formulario 
                onSubmit={(e) => this.onUpdateHandle(e)}
                title={this.state.title}
                edit={this.state.edit} />
            );
        }
    }

    //Método executado ao clicar em editar
    onEditHandle(event, itemId, itemTitle,) {
        //Colocar edit em verdadeiro, o que irá gerar o formulario
        //Preencher o formulário com os dados da tarefa
        this.setState(
            {
                edit:true,
                id: arguments[1],
                title: arguments[2]
            }
        );
    }

    onUpdateHandle(event) {
        //Previne com que a página recarregue
        event.preventDefault();

        this.setState(
            {
                mockData: this.state.mockData.map(item => {
                    //Se o ID do item for igual ao ID do estado
                    if (item.id === this.state.id) {
                        //Alterar titulo para o do input item
                        item['title'] = event.target.item.value;
                        return item;
                    }
                    return item;
                })
            }
        );
        this.setState({
            edit:false
        });
    }

    onCompleteHandle() {
        let id = arguments[0];

        this.setState(
            {
                mockData: this.state.mockData.map(item => {
                    //Se o id do item for igual ao recebido
                    if (item.id === id) {
                        //Se já estiver pronto, então colocar como false.
                        if (item.done === true){
                            item['done'] = false;
                            return item;
                        } else {
                        //Se não estiver pronto, colocar como true.
                            item['done'] = true;
                            return item;
                        }
                    }
                return item;
                })
            }
        );
    }

    render(){
        return(
            <div>  
                {this.renderEditForm()}

                {/*Formulário que envia os dados digitados para o estado*/}       
                <Formulario value={this.state.title}
                onSubmit={(e) => this.onSubmitHandle(e)}
                />

                {/*Renderiza as Tarefas*/}
                <Tarefa mockData={this.state.mockData}
                done={this.state.done}
                onChange={(itemId) => this.onCompleteHandle(itemId)}
                deletar={(itemId, e) =>this.onDeleteHandle(itemId, e)}
                atualizar={(e, itemId, itemTitle) => this.onEditHandle(e, itemId, itemTitle)}/> 

            </div>
        );
    }
}

export default Quadro;