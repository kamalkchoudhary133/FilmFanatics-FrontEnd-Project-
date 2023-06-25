"use strict";

const API_URL = "https://www.omdbapi.com/";
const API_KEY = "3ef4ab9e";

/**
 * Fetch movies from omdbapi
 *
 * @param trend
 * @param page
 * @returns {Promise}
 */
function getMovies(trend, page = 1) {
    return new Promise((resolve, reject) => {

        // Starting Global Loading....
        startLoading();

        let URL = `${API_URL}?apiKey=${API_KEY}&s=${trend}&page=${page}`;
        fetch(URL)
            .then(response => response.json())
            .then(res => {
                resolve({movies: res.Search || [], totalResults: res.totalResults || 0})
            })
            .catch(err => {
                reject(err)
            })
            .finally(() => {
                // Stopping Global loading
                stopLoading()
            })
    });
}

/**
 * To fetch single movie by ID from omdbapi
 *
 * @param id
 * @returns {Promise}
 */
function getSingleMovie(id) {
    return new Promise((resolve, reject) => {

        // Starting Global Loading....
        startLoading();

        let URL = `${API_URL}?apiKey=${API_KEY}&i=${id}`;
        fetch(URL)
            .then(response => response.json())
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
            .finally(() => {
                 // Stopping Global loading
                stopLoading()
            })
    });
}

function startLoading() {
    document.body.classList.add("loading")
}

function stopLoading() {
    document.body.classList.remove("loading")
}
