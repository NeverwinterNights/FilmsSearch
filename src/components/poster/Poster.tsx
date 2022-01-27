import React from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import styles from "./Poster.module.scss";
import {Location} from "history";


interface LocationParams extends Location {
    state: string
//FilmType[] | null
}


export const Poster = React.memo(() => {

    const location = useLocation() as LocationParams
    const navigate  = useNavigate();


    return (
        <div className={styles.main}>
            <button className={styles.back} onClick={() => navigate(-1)}>
                Back
            </button>
            <img src={location.state} alt=""/>
        </div>
    );
});

