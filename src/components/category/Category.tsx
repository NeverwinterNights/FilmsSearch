import React, {useEffect, useState} from 'react';
import {Link, Navigate, useLocation, useParams} from "react-router-dom";
import {Main} from "../main/Main";
import {FilmType} from "../searchName/SearchName";
import {Location} from "history";
import styles from "./Category.module.scss";
import API from "../../api/API";
import {Pagination} from "../pagination/Pagination";


interface LocationParams extends Location {
    state: string
//FilmType[] | null
}


export const Category = React.memo(() => {
    const location = useLocation() as LocationParams
    const {movieName} = useParams()
    const [films, setFilms] = useState<FilmType[] | null>(null);
    const [totalPagesCount, setTotalPagesCount] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const [poster, setPoster] = useState<string>("");


    const pageHandler = (num: number) => {
        setPage(num)
    }


    useEffect(() => {


        // const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(movieName ? movieName : "", location.state, page)
            .then(({data}) => {
                const {Search, Response, Error, totalResults} = data


                if (Response === "True") {
                    setFilms(Search)
                    setTotalPagesCount(totalResults)
                } else {
                    alert(Error)
                }
            })
            .catch((error) => {
                alert(error)
            })

        // setFilms(location.state.searchResultByType)
    }, [movieName, location.state, page])


    const getPoster = (title: string) => {
        API.getPoster(title)
            .then(({data}) => {
                const {Poster, Response, Error} = data
                if (Response === "True") {
                    setPoster(Poster)
                } else {
                    alert(Error)
                }
            })
    }


    if (poster) {

        return <Navigate state={poster} to={'/poster'}/>;
    }

    return (
        <div className={styles.main}>
            <Main/>
            <Link className={styles.back} to='/'>
                Back
            </Link>
            <div className={styles.film__wrapper}>
                <div className={styles.film__item}>
                    {films && films.map((film, index) => {
                        return (
                            <div className={styles.column} key={index}>
                                <div className={styles.wrapper}>
                                    {/*<div key={index} className={"wrapper"}>*/}
                                    <div className={styles.title}>{film.Title}</div>
                                    <div className={styles.year}>{film.Year}</div>
                                    <div className={styles.type}>{film.Type}</div>
                                    <img onClick={() => {
                                        getPoster(film.Title)
                                    }} className={styles.image} src={film.Poster}
                                         alt=""/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Pagination totalPagesCount={totalPagesCount} pageHandler={pageHandler}
                        page={page}/>
        </div>
    );
});

