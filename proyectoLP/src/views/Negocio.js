import React, {Fragment, useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(10),
  },
}));

export default function Formulario() {
  const classes = useStyles();
  const [datos, setDatos]=useState({
    nombre: '',
    descripcion: '',
    ciudad: '',
    direccion: '',
    diaApertura: '',
    diaCierre: '',
    horaApertura: '',
    horaCierre: '',
    costoAlquiler: ''
  })

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e)=>{
    setDatos({
      ...datos,
      [e.target.nombre]:e.target.checked,
    })
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    alert("Su negocio ha sido ingresado con exito");
  };

  return( 
    <>
      <DemoNavbar/>
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Ingresar Negocio</h2>
                <h5 className="description">
                  Aquí deberás llenar todos los campos para ingresar tu nuevo local. 
                  ¡Gracias por elegirnos!
                </h5>
              </Col>
            </Row>
            <div class="row justify-content-center">
              <form className="ml-auto mr-auto col-center" onSubmit={handleSubmit}>
                <div className="col-lg-100 col-center">
                  <label htmlFor="nombre">Nombre de Local: </label>
                    <input 
                      type="text" 
                      name="nombre" 
                      className="form-control my-2"
                      value={datos.nombre}
                      onChange={handleChange}
                    />
                </div>
                <div className="col-lg-100">
                  <label>
                    ¿Descripcion del Local:
                    <textarea className="form-control my-2" value={datos.descripcion} onChange={handleChange} />
                  </label>
                </div>
                <div className="col-lg-100">
                  <label htmlFor="ciudad">Ciudad: </label>
                    <input 
                      type="text" 
                      name="ciudad" 
                      className="form-control my-2"
                      value={datos.ciudad}
                      onChange={handleChange}
                    />
                </div>
                <div className="col-lg-100">
                  <label htmlFor="direccion">Direccion: </label>
                    <input 
                      type="text" 
                      name="direccion" 
                      className="form-control my-2"
                      value={datos.direccion}
                      onChange={handleChange}
                    />
                </div>
                <div className="col-lg-100">
                  <label htmlFor="diaApertura">Dia de Apertura: </label>
                    <input 
                      type="text" 
                      name="diaApertura" 
                      className="form-control my-2"
                      value={datos.diaApertura} 
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-100">
                  <label htmlFor="diaCierre">Dia de Cierre: </label>
                    <input 
                      type="text" 
                      name="diaCierre" 
                      className="form-control my-2"
                      value={datos.diaCierre} 
                      onChange={handleChange}
                    />
                </div>
                <div className="col-lg-100">
                  <label htmlFor="diaApertura">Hora de Apertura: </label>
                    <input 
                      type="text" 
                      name="diaApertura" 
                      className="form-control my-2"
                      value={datos.diaApertura} 
                      onChange={handleChange}
                    />
                  <div className="col-lg-100">
                  <label htmlFor="diaCierre">Hora de Cierre: </label>
                    <input 
                      type="text" 
                      name="diaCierre" 
                      className="form-control my-2"
                      value={datos.diaCierre} 
                      onChange={handleChange}
                    />
                </div>
                <div className="col-lg-100">
                  <label htmlFor="diaCierre">Costo de Alquiler: </label>
                    <input 
                      type="text" 
                      name="costoAlquiler" 
                      className="form-control my-2"
                      value={datos.costoAlquiler} 
                      onChange={handleChange}
                    />
                </div>
                </div>
               
                <button type="submit" className="btn btn-primary">Enviar</button>
                             
              </form>
              </div>
          </Container>
          <SimpleFooter />
        </div>
    </>
  );
}