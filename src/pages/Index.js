import React from 'react';
import LeftMenu from '../components/Content/LeftMenu/LeftMenu';
import LeftMenuTitle from '../components/Content/LeftMenu/LeftMenuTitle'
import LeftMenuItem from '../components/Content/LeftMenu/LeftMenuItem';
import News from '../components/Content/Body/News';
import NewsItem from '../components/Content/Body/NewsItem';

class Index extends React.Component {
    render() {
        return (
            <div className='content'>
                <LeftMenu>
                    <LeftMenuTitle label='CALENDARIO'/>
                    <LeftMenuItem label='NOTICIAS'/>
                    <LeftMenuItem label='CALENDARIO 2018'/>
                    <LeftMenuItem label='CALENDARIO 2019'/>
                    <LeftMenuTitle label='FECHAS DE FINAL'/>
                    <LeftMenuItem label='PRÓXIMO TURNO'/>
                    <LeftMenuItem label='CRONOGRAMA'/>
                    <LeftMenuTitle label='INSCRIPCIÓN A CURSOS'/>
                    <LeftMenuItem label='PRÓXIMO TURNO'/>
                    <LeftMenuTitle label='OFICINAS'/>
                    <LeftMenuItem label='DIR. TITULOS'/>
                    <LeftMenuItem label='DIR. ALUMNOS'/>
                    <LeftMenuItem label='DIR. GESTIÓN ACADÉMICA'/>
                </LeftMenu>
                <News>
                    <NewsItem label='MEDIDAS GRAMIALES 29 DE MAYO'/>
                    <NewsItem label='MEMORIA VERDAD Y JUSTICIA'/>
                    <NewsItem label='MESAS DE FINAL MAYO 2019'/>
                    <NewsItem label='INSCRIPCION A SISTEMAS DE REPRESENTACION TUTORIA E INGLES TECNICO I TUTORIAS'/>
                    <NewsItem label='QUE ES UTNBA SUSTENTABLE'/>
                    <NewsItem label='ULTIMO FINAL DE LA CARRERA/EGRESODROMO'/>
                    <NewsItem label='PREGUNTAS FRECUENTES NUEVO REGLAMENTO DE ESTUDIOS'/>
                    <NewsItem label='FECHAS DE INSCRIPCION ESPECIALES Y TRAMITES DEPARTAMENTO ALUMNOS'/>
                    <NewsItem label='INFORMACION IMPORTANTE MATERIAS CON MODALIDAD VIRTUAL FECHAS DE ENCUENTROS PRESENCIALES'/>
                </News>
            </div>
        );
    }
}

export default Index;