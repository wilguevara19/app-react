import React, { Component } from 'react';
import { GetPersona } from './../Service/Persona Service';

class listado extends Component {
    state = { 
        Datos: GetPersona(),
     };

    handlerdelete=(persona)=>{
        const Datos= this.state.Datos.filter(p=>p.id!==persona.id);
        this.setState({Datos})
        console.log(persona);

    };

    handlerAdd=()=>{
        const Datos= this.state.Datos;
        const newPersona= {id:Math.random()*10,Nombre:'Mario Luigui',Apellido:'Bross',Deporte:'Videojuego',Municipio:'Jinotepe'};
        Datos.push(newPersona);
        this.setState({Datos});
    }

    render() { 
        return ( 

            /* listado de personas en tabla xD */
<main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <div >
                
               <h1>Listado de Personas: {this.state.Datos.length}</h1>
         
               <button onClick={this.handlerAdd} className="btn btn-info">Agregar</button>
               <br/>
               <br/>
               <div >
               <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>Identificador</th>
                  <th>Nombres</th>
                  <th>Apellidos</th>
                  <th>Deporte</th>
                  <th>Municipio</th>
                  <th>Opcion</th>
                </tr>
              </thead>
              <tbody>
              {this.state.Datos.map(persona=>(<tr key={persona.id}>{persona.id}
               <td>{persona.Nombre}</td>
               <td>{persona.Apellido}</td>
               <td>{persona.Deporte}</td>
               <td>{persona.Municipio}</td>
                 <button onClick={()=>this.handlerdelete(persona)} className="btn btn-danger ">Eliminar</button>
                    </tr>))}
                </tbody>
                </table>
                </div>
           </div>
           </main>
         );
    }
}
 
export default listado;