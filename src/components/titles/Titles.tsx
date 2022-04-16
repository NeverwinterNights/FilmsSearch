import React, {useEffect, useState} from 'react';
import {Link, Navigate, useLocation, useParams} from "react-router-dom";
import {Main} from "../main/Main";
import {FilmType} from "../searchName/SearchName";
import {Location} from "history";
import styles from "./Titles.module.scss";
import API from "../../api/API";
import {Pagination} from "../pagination/Pagination";


interface LocationParams extends Location {
    state: {
        searchResult: FilmType[] | null
    }
}


export const Titles = React.memo(() => {
    const location = useLocation() as LocationParams
    const {filmName} = useParams()
    const [page, setPage] = useState<number>(1);
    const [totalPagesCount, setTotalPagesCount] = useState<number>(0);



    const [films, setFilms] = useState<FilmType[] | null>(null);
    const [poster, setPoster] = useState<string>("");


    const pageHandler = (num: number) => {
        setPage(num)
    }


    useEffect(() => {
        API.getPagination(filmName ? filmName : '', page)
            .then(({data}) => {

                const {Search, Response, Error, totalResults} = data
                if (Response === "True") {
                    setTotalPagesCount(totalResults)

                    setFilms(Search)
                } else {
                    alert(Error)
                }

            })
            .catch((error) => {
                alert(error)
            })
    }, [filmName, page])


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
                                    <span className={styles.title}>{film.Title}</span>
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

