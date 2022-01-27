import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";


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
    // const [searchResult, setSearchResult] = useState<FilmType[] | null>(null);
    const nav = useNavigate()


    //
    // const name = useParams()
    // if ( name.filmName || searchName) {
    //     setSearchName(name.filmName)
    // }


    const searchFilm = () => {
        //setSearchResult(null)
        if (searchName) {
            nav(`/titles/${searchName}`)
            localStorage.clear()
        } else {
            alert("Enter Name")
        }

        // API.searchFilmsByTitle(searchName)
        //     .then(({data}) => {
        //         const {Search, Response, Error, totalResults} = data
        //         if (Response === "True") {
        //             setSearchResult(Search)
        //
        //         } else {
        //             alert(Error)
        //         }
        //
        //     })
        //     .catch((error) => {
        //         alert(error)
        //     })
    };


    // if (searchResult) {
    //
    //     return <Navigate state={{searchResult }} to={'/titles'}/>;
    // }

    return (
        <div>
            <h3><p>Search by name:</p></h3>
            <input type="text" value={searchName}
                   onChange={(e) => setSearchName(e.currentTarget.value)}/>
            <button onClick={searchFilm}>Search</button>
        </div>
    );
});

