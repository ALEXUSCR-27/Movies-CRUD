import '../styles/CrudModule.css';
import { get_registry, create_registry , modify_registry} from '../services/crud_services';
import { CustomTable } from './CustomTable';

import { useState, useEffect } from 'react';

export default function CrudModule() {
    useEffect(() => {
        const fetchData = async () => {
            const response = await get_registry();
            if (response) {
                //console.log(response)
                setActualData(response);
            } else {
                console.error("No data received from get_registry()");
            }
        };
    
        fetchData();
    }, []);
    const [id, setId] = useState(0)
    const [actualData, setActualData] = useState([])
    const [director, setDirector] = useState("");
    const [runningTime, setRunningTime] = useState(0);
    const [mpaAge, setMpaAge] = useState(0);
    const [releaseDate, setReleaseDate] = useState("1901-01-01");
    const [genre, setGenre] = useState("");
    const [language, setLanguage] = useState("");
    const [title, setTitle] = useState("");
    const [flag, setFlag] = useState(false)

    const clean_form = () => {
        setTitle("");
        setDirector("");
        setLanguage("");
        setReleaseDate("1901-01-01");
        setGenre("");
        setRunningTime(0);
        setMpaAge(0);
    }

    const set_form = (data) => {
        setId(data.peliculaID)
        setTitle(data.titulo);
        setDirector(data.director);
        setLanguage(data.idioma);
        setReleaseDate(data.fechaEstreno);
        setGenre(data.genero);
        setRunningTime(data.duracionMin);
        setMpaAge(data.edadRequerida);
        setFlag(true);
    }

    const handleModifyMovie = () => {
        const movie = {
            id: id,
            title: title,
            language: language,
            director: director,
            releaseDate: releaseDate,
            genre: genre,
            runningTime: runningTime,
            mpaAge: mpaAge,
        }
        console.log(movie)
        const request_response = modify_registry(movie);
        if (request_response.status === 200) {
            alert("The movie has been successfully modified!");
            clean_form();
        }
    }

    const add_movie = () => {
        const movie = {
            title: title,
            language: language,
            director: director,
            releaseDate: releaseDate,
            genre: genre,
            runningTime: runningTime,
            mpaAge: mpaAge,
        }

        if (inputs_validation()) {
            const request_reponse = create_registry(movie);
            if (request_reponse.status === 200) {
                alert("The movie has been successfully registered!");
                clean_form();
            }
        }
        else {
            alert("Please fill out all fields before submitting.");
        }            
    }
    
    const inputs_validation = () =>  {
        return !(title === "" || language === "" || director === "" || genre === "" || runningTime === 0 || mpaAge === 0);
    }


    return (
        <div className='crud__container'>
            <div className='crud__form'>
                <div className='crud__inputs'>
                <input 
                    placeholder='Title' 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <input 
                    placeholder='Director' 
                    value={director} 
                    onChange={(e) => setDirector(e.target.value)} 
                />
                <input 
                    placeholder='Language' 
                    value={language} 
                    onChange={(e) => setLanguage(e.target.value)} 
                />
                <input
                    type ="number" 
                    placeholder='Min age' 
                    value={mpaAge} 
                    onChange={(e) => setMpaAge(e.target.value)}
                    min="0"
                />
                <input
                    type="date" 
                    placeholder='Release date' 
                    value={releaseDate} 
                    onChange={(e) => setReleaseDate(e.target.value)} 
                />
                <input 
                    placeholder='Genre' 
                    value={genre} 
                    onChange={(e) => setGenre(e.target.value)} 
                />
                <input 
                    type="number"
                    placeholder='Min duration' 
                    value={runningTime} 
                    onChange={(e) => setRunningTime(e.target.value)}
                />
                </div>
                <div className='crud__options'>
                    {!flag && (
                        <button onClick={add_movie}>ADD</button>
                    )}
                    {flag && (
                        <button onClick={() => handleModifyMovie()}>Edit</button>
                    )}
                    <button onClick={clean_form}>Refresh</button>
                </div>
            </div>
            <div className='table__container'>
                <CustomTable data={actualData} edit={set_form}/>
            </div>
        </div>
    );
}
