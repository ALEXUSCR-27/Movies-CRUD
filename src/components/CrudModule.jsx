import '../styles/CrudModule.css';
import { get_registry } from '../services/crud_services';
import { CustomTable } from './CustomTable';

import { useState, useEffect } from 'react';

export default function CrudModule() {

    const [actualData, setActualData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await get_registry();
            if (response) {
                setActualData(response);
            } else {
                console.error("No data received from get_registry()");
            }
        };

        fetchData();
    }, []);

    const get_movies = async () => {
        const response = await get_registry();
        if (response) {
            setActualData(response);
        }
    };


    return (
        <div className='crud__container'>
            <div className='crud__form'>
                <div className='crud__inputs'>
                    <input placeholder='Title'></input>
                    <input placeholder='Director'></input>
                    <input placeholder='Language'></input>
                    <input placeholder='Min age'></input>
                    <input placeholder='Release date'></input>
                    <input placeholder='Genre'></input>
                    <input placeholder='Min duration'></input>
                </div>
                <div className='crud__options'>
                    <button>ADD</button>
                    <button>Refresh</button>
                </div>
            </div>
            <div className='table__container'>
                <CustomTable data={actualData}/>
            </div>
        </div>
    );
}
