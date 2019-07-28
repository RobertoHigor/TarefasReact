import React from 'react';
import './bootstrap.min.css';
import { Button, Form, Input } from 'reactstrap';

class Formulario extends React.Component {
    render(){
        return(
            <div class="input-group" >
                <Form onSubmit={(e) => this.props.onSubmit(e)}>
                <div class="input-group-append">
                    <Input type="text" placeholder="Adicionar Tarefa" name="item" className="item" defaultValue={this.props.title}/>

                    <Button color="success" className="btn-add-item">
                        {this.props.edit ? "Atualizar": "Adicionar"}
                    </Button>  
                    </div>              
                </Form> 
                
            </div>          
        )
    }
}

export default Formulario;