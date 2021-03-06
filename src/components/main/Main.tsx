import React from 'react';
import {SearchName} from "../searchName/SearchName";
import {SearchType} from "../searchType/SearchType";
import styles from './Main.module.scss';


export const Main =React.memo(() => {
 return (
        <div className={styles.main}>
            <SearchName/>
            <SearchType/>
        </div>
    );
});

