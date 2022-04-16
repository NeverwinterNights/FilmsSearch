import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import styles from "./SearchName.module.scss";


export type  FilmType = {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}


export const SearchName = React.memo(() => {
    const name = useParams()

    const [searchName, setSearchName] = useState<string>(name.filmName ? name.filmName : "");
    const nav = useNavigate()




    const searchFilm = () => {
        if (searchName) {
            nav(`/titles/${searchName}`)
            localStorage.clear()
        } else {
            alert("Enter Name")
        }
    };


    return (
        <div>
            <h3><p>Search by name:</p></h3>
            <input type="text" value={searchName}
                   onChange={(e) => setSearchName(e.currentTarget.value)}/>
            <button className={styles.btn} onClick={searchFilm}>Search</button>
        </div>
    );
});

