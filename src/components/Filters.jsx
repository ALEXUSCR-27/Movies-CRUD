import '../styles/Filters.css';
import { useState } from 'react';
import React from 'react';
import { filter_registry } from '../services/crud_services';

export default function Filters({setData}) {
    const [director, setDirector] = useState("");
    const [releaseDate, setReleaseDate] = useState("1901-01-01");
    const [genre, setGenre] = useState("");
    const [language, setLanguage] = useState("");
    const [title, setTitle] = useState("");

    const handleFilterSearch = async () => {
        const movie = {
            title: title,
            language: language,
            director: director,
            releaseDate: releaseDate,
            genre: genre
        }
        const request_response = await filter_registry(movie);
        if (request_response.status === 200) {
            setData(request_response.data)
            clean_form();
        }
    }

    const clean_form = () => {
        setTitle("");
        setDirector("");
        setLanguage("");
        setReleaseDate("1901-01-01");
        setGenre("");
    }

    return (
        <div className="filters__container">
            <h2>Filters</h2>
            <div className='filters__inputs'>
                <div className="filters__input">
                    <label htmlFor="title">Title name</label>
                    <input
                        id="title" 
                        placeholder='Title' 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                </div>
                <div className="filters__input">
                    <label htmlFor="title">Director</label>
                    <input 
                        id="director"
                        placeholder='Director' 
                        value={director} 
                        onChange={(e) => setDirector(e.target.value)} 
                    />
                </div>
                <div className="filters__input">
                    <label htmlFor="title">Language</label>
                    <input 
                        id="language"
                        placeholder='Language' 
                        value={language} 
                        onChange={(e) => setLanguage(e.target.value)} 
                    />
                </div>
                <div className="filters__input">
                    <label htmlFor="title">Genre</label>
                    <input 
                        id="genre"
                        placeholder='Genre' 
                        value={genre} 
                        onChange={(e) => setGenre(e.target.value)} 
                    />
                </div>
                <div className="filters__input">
                    <label htmlFor="title">Release date</label>
                    <input
                        id="release_date"
                        type="date" 
                        placeholder='Release date' 
                        value={releaseDate} 
                        onChange={(e) => setReleaseDate(e.target.value)} 
                    />
                </div>
            </div>
            <div className='options__container'>
                <button onClick={() => handleFilterSearch()}>Search</button>
                <button onClick={() => clean_form()}>Refresh</button>
            </div>

        </div>
    )
}