import React from 'react'

const About = () => {
  return (
    <div className='m-4 break-words rounded drop-shadow-md border-5'>
      <h1 className='text-5xl font-bold text-blue-900'>Sujamas S.A.</h1>
      <p className='text-lg text-gray-500 mt-2'>SUJAMAS S.A. es una empresa de soluciones informáticas fundada a mediados del año 2020, que ofrece los siguientes servicios: soluciones de Hardware y Software, contando con un taller de reparación y mantenimiento de computadoras y celulares, instalación de paquetes de Office, sistemas operativos y antivirus. Además, ofrece diseño, maquetación y administración de sitios web, desarrollo y gestión de Bases de Datos y de aplicaciones híbridas.</p>
      <br/>
      <h1 className='text-xl font-bold text-blue-900'>Misión</h1>
      <p className='text-lg text-gray-500 mt-2'>Ser una empresa capaz de brindar servicios, herramientas, ideas, que logren contribuir al desarrollo del área de la informática en las pequeñas, medianas y grandes empresas, así como ofrecer soluciones a cada problemática existente en el sector tecnológico.</p>
      <br/>
      <h1 className='text-xl font-bold text-blue-900'>Visión</h1>
      <p className='text-lg text-gray-500 mt-2'>Ser la empresa líder en soluciones tecnológicas a nivel nacional consciente de la constante evolución tecnológica, manteniendo información actualizada de cada tecnología usada en el desarrollo de las soluciones y cumpliendo constantemente el compromiso establecido como empresa, que es brindar soluciones informáticas satisfactorias.</p>
      <br/>
      <h1 className='text-xl font-bold text-blue-900'>Valores</h1>
      <ul className='text-gray-500 text-lg list-disc px-10'>
        <li><span>Logro: </span> Sentimos pasión por los resultados concretos</li>
        <li><span>Rentabilidad: </span> Generamos utilidades para promover el desarrollo y la prosperidad colectiva</li>
        <li><span>Calidad: </span> Realizamos nuestro trabajo con excelencia</li>
        <li><span>Cambio: </span> Enfrentamos proactivamente los retos, nos adaptamos y aprovechamos las oportunidades del entorno.</li>
        <li><span>Superación: </span> Establecimiento de metas por encima de los compromisos con un espíritu de excelencia y de autorrealización constante.</li>
        <li><span>Responsabilidad social: </span> Asumimos nuestro compromiso con la sociedad y el medio ambiente.</li>
      </ul>
    </div>
  )
}

export default About