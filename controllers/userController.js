const chalk = require("chalk");
const fetch = require("node-fetch");
module.exports.getHome = (req, res, next) => {
    const apikey = "fc2a8150f1761ad66d1627229b1e234d";
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`;
    let settings = { method: "GET" };
    fetch(url, settings)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            res.render("user/topRated", {
                docTitle: "Top Movies",
                path: "/",
                json: json,
            });
        })
        .catch((err) => console.log(err));
};
module.exports.postSearch = (req, res, next) => {
    const movieName = req.body.movie;
    const apikey = "fc2a8150f1761ad66d1627229b1e234d";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${movieName}`;
    let settings = { method: "GET" };
    fetch(url, settings)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            res.render("user/search", {
                docTitle: "Search",
                path: "/search",
                json: json,
            });
        })
        .catch((err) => console.log(err));
};

module.exports.getDetails = (req, res, next) => {
    const movieId = req.params.movieId;
    const img = req.query.img;
    const apiKey = "fc2a8150f1761ad66d1627229b1e234d";
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos,credits,reviews`;
    let settings = { method: "GET" };
    fetch(url, settings)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            res.render("user/details", {
                docTitle: "details page",
                path: "/details",
                json: json,
                img: img,
                credits: json.credits.cast,
                crew: json.credits.crew,
                reviews: json.reviews.results,
            });
        })
        .catch((err) => console.log(err));
};

module.exports.getPopular = (req, res, next) => {
    const apikey = "fc2a8150f1761ad66d1627229b1e234d";
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`;
    let settings = { method: "GET" };
    fetch(url, settings)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            res.render("user/popular", {
                docTitle: "Home page",
                path: "/popular",
                json: json,
            });
        })
        .catch((err) => console.log(err));
};

module.exports.getUpcoming = (req, res, next) => {
    const apikey = "fc2a8150f1761ad66d1627229b1e234d";
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1`;
    let settings = { method: "GET" };
    fetch(url, settings)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            res.render("user/upcoming", {
                docTitle: "Home page",
                path: "/upcoming",
                json: json,
            });
        })
        .catch((err) => console.log(err));
};
