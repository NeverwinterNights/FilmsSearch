import axios from 'axios';

// const configOMB = {
//     baseURL: 'http://www.omdbapi.com',
// };

export const axiosInstance = axios.create({
    baseURL: 'http://www.omdbapi.com',
});


const key = '183a2bb3';


const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`/?apikey=${key}&s=${title}`)
    },
    // searchFilmsByType: (title: string, type: string) => {
    //     return axiosInstance.get(`/?apikey=${key}&s=${title}&type=${type}`)
    //
    // },

    searchFilmsByType: (title: string, type: string, num: number) => {
        return axiosInstance.get(`/?apikey=${key}&s=${title}&type=${type}&page=${num}`)

    },



    getPoster: (title: string) => {
        return axiosInstance.get(`/?apikey=${key}&t=${title}`)
    },
    getPagination: (title: string, num: number) => {
        return axiosInstance.get(`/?apikey=${key}&s=${title}&page=${num}` )
    },
};


export default API;
