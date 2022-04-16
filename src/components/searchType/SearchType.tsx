import React, {ChangeEvent, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import styles from "./SearchType.module.scss";

export const SearchType = React.memo(() => {

    const dataLocalStorage: string | null = localStorage.getItem('name')
    const [searchNameByType, setSearchNameByType] = useState<string | null>(dataLocalStorage);
    const nav = useNavigate()
    const [type, setType] = useState<string>("");


    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (searchNameByType) {
            
            const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
            nav(`/category/${searchNameByType}`, {state: type})
            setType(type)
            localStorage.setItem('name', searchNameByType)

        } else {
            alert("Enter Name")
        }
    }

    
    const searchButtonInput = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.clear()
        setSearchNameByType(e.currentTarget.value)
    }

    useEffect(() => {
        if (dataLocalStorage) {
            setSearchNameByType(dataLocalStorage)
        }
    })

    return (
        <div>
            <h3><p>Search by type:</p></h3>
            <input type="text" value={searchNameByType ? searchNameByType : ""}
                   onChange={searchButtonInput}/>
            <button className={styles.btn} onClick={searchByType} data-t='movie'>Movie</button>
            <button className={styles.btn}  onClick={searchByType} data-t='series'>Series</button>
        </div>
    );
});

