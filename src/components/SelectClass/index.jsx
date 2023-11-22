import React from "react";
import Select from 'react-select'
import './selectclass.css'

export default function SelectClass(props) {

    function selectClass(classe) {

        if (classe == 'selectSC-SU') {

            return(custonStyles1)

        } else if (classe == 'selectSC-FB') {

            return(custonStyles2);
        }
    }

    const custonStyles1 = {

        control: (provided, state, base) => ({
            ...provided,
            border: '2px solid ' + "#a0a0a0",
            borderRadius: '5px',
            backgroundColor: '#FFF',
            cursor: 'pointer',
            fontSize: '12px',
            fontFamily: 'Roboto Mono',
            boxShadow: 'rgba(0,0,0,0.2) -5px 5px 10px',
        }),
    }

    const custonStyles2 = {

        control: (provided, base, state) => ({
            ...provided,
            border: '2px solid ' + "#000",
            borderRadius: '0px 10px',
            backgroundColor: '#FFF',
            cursor: 'pointer',
            fontSize: '12px',
            fontFamily: 'Roboto Mono',
            boxShadow: 'rgba(0,0,0,0.4) -5px 5px 10px',
        }),
    }

    const options = [

        {value: '1', label: 'Administração' },
        {value: '2', label: 'Agronomia' },
        {value: '3', label: 'Ciências Contábeis' },
        {value: '4', label: 'Engenharia Cartográfica e de Agrimensura' },
        {value: '5', label: 'Engenharia Civil' },
        {value: '6', label: 'Engenharia de Computação' },
        {value: '7', label: 'Engenharia Mecânica' },
        {value: '8', label: 'Licenciatura em Letras Português e Ingles' },
        {value: '9', label: 'Licenciatura em Matemática' },
        {value: '10', label: 'Química' },
        {value: '11', label: 'Tecnologia em Análise e Desenvolvimento de Sistemas' },
        {value: '12', label: 'Tecnologia em Manutenção Industrial' },
    ]

    return(

        <div className={props.class}>
            <Select
                styles={selectClass(props.class)}
                className={props.class + 'Content'}
                value={props.selectedValue}
                onChange={props.onChange}
                options={options}
                maxMenuHeight={200}
                placeholder={"Selecione uma opção"}
            />
        </div>
    )
}