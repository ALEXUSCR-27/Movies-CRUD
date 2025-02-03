import '../styles/CrudModule.css';
import { get_registry, create_registry , modify_registry} from '../services/crud_services';
import { CustomTable } from './CustomTable';
import Filters from './Filters';

import { useState, useEffect } from 'react';

export default function CrudModule() {
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
    const [id, setId] = useState(0)
    const [actualData, setActualData] = useState([]);

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
        setFlag(false);
    }

    const set_form = (data) => {
        setId(data.movieID)
        setTitle(data.title);
        setDirector(data.director);
        setLanguage(data.language);
        setReleaseDate(data.releaseDate);
        setGenre(data.genre);
        setRunningTime(data.durationMin);
        setMpaAge(data.ageRequired);
        setFlag(true);
    }

    const handleModifyMovie = async () => {
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
        const request_response = await modify_registry(movie);
        if (request_response.status === 200) {
            alert("The movie has been successfully modified!");
            setFlag(false);
            clean_form();
        }
    }

    const add_movie = async () => {
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
            const request_reponse = await create_registry(movie);
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
                    id="title" 
                    placeholder='Title' 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <input 
                    id="director"
                    placeholder='Director' 
                    value={director} 
                    onChange={(e) => setDirector(e.target.value)} 
                />
                <input 
                    id="language"
                    placeholder='Language' 
                    value={language} 
                    onChange={(e) => setLanguage(e.target.value)} 
                />
                <input
                    id="mpaAge"
                    type ="number" 
                    placeholder='Min age' 
                    value={mpaAge} 
                    onChange={(e) => setMpaAge(e.target.value)}
                    min="0"
                />
                <input
                    id="release_date"
                    type="date" 
                    placeholder='Release date' 
                    value={releaseDate} 
                    onChange={(e) => setReleaseDate(e.target.value)} 
                />
                <input 
                    id="genre"
                    placeholder='Genre' 
                    value={genre} 
                    onChange={(e) => setGenre(e.target.value)} 
                />
                <input 
                    id="runningTime"
                    type="number"
                    placeholder='Min duration' 
                    value={runningTime} 
                    onChange={(e) => setRunningTime(e.target.value)}
                />
                </div>
                <div className='crud__options'>
                    {!flag && (
                        <button onClick={add_movie}>Add</button>
                    )}
                    {flag && (
                        <button onClick={() => handleModifyMovie()}>Edit</button>
                    )}
                    <button onClick={clean_form}>Refresh</button>
                </div>
            </div>
            <div className='movies__container'>
                <Filters setData={setActualData}/>
                <CustomTable data={actualData} edit={set_form}/>
            </div>
        </div>
    );
}
