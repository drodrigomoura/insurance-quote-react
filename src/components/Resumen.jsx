import React from 'react';
import styled from '@emotion/styled';
import { capitalizar } from '../helper';
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838F;
  color: #fff;
  margin-top: 1rem;
`;

const Resumen = ({datos}) => {
  //extraer datos
  const {marca,year,plan} = datos;

  if(marca === '' || year === '' || plan === '') return null;

  return (
    <ContenedorResumen>
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>Marca: {capitalizar(marca)}</li>
        <li>Plan: {capitalizar(plan)}</li>
        <li>Año del auto: {year}</li>
      </ul>
    </ContenedorResumen>
  );
}


Resumen.propTypes = {
  datos: PropTypes.object.isRequired,
}


export default Resumen;