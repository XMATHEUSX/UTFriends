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

        control: (provided, state) => ({
            ...provided,
            border: '2px solid ' + "#a0a0a0",
            borderRadius: '5px',
            outline: 'none',
            backgroundColor: '#FFF',
            cursor: 'pointer',
            fontSize: '12px',
            fontFamily: 'Roboto Mono',
            boxShadow: 'rgba(0,0,0,0.2) -5px 5px 10px'
        }),
    }

    const custonStyles2 = {

        control: (provided, state) => ({
            ...provided,
            border: '2px solid ' + "#000",
            borderRadius: '0px 10px',
            outline: 'none',
            backgroundColor: '#FFF',
            cursor: 'pointer',
            fontSize: '12px',
            fontFamily: 'Roboto Mono',
            boxShadow: 'rgba(0,0,0,0.4) -5px 5px 10px'
        }),
    }

    const options = [

        {value: '1', label: 'Engenharia de Computação' },
        {value: '2', label: 'Engenharia Elétrica' },
        {value: '3', label: 'Engenharia Cívil' },
        {value: '4', label: 'Engenharia Mecânica' },
        {value: '5', label: 'Engenharia Cartográfica e de Agrimensura' },
        {value: '6', label: 'Análise e Desenvolvimento de Sistemas' },
    ]

    return(

        <div className={props.class}>
            <Select
                styles={selectClass(props.class)}
                className={props.class + 'Content'}
                value={props.selectedValue}
                onChange={props.onChange}
                options={options}
                placeholder={"Selecione uma opção"}
            />
        </div>
    )
}