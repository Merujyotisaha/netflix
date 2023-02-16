const API_KEY = "795ae7ae25fdcb523deb5dce403fc136";


const requests = {
    fetchNewrelease: `discover/movie?api_key=${API_KEY}&primary_release_date.gte=2023-01-01&primary_release_date.lte=2023-02-15`,
    fetchPopularMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
    fetchTopRated: `/discover/movie/?api_key=${API_KEY}&certification_country=US&certification=R&sort_by=vote_average.desc`,
    fetchSciencefiction: `/discover/movie?api_key=${API_KEY}&with_genres=878&with_cast=500&sort_by=vote_average.desc`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&with_cast=23659&sort_by=revenue.desc`,
    fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18&sort_by=vote_average.desc&vote_count.gte=10`,
    fetchKidsMovies: `/discover/movie?api_key=${API_KEY}&certification_country=US&certification.lte=G&sort_by=popularity.desc`,
    
}


export default requests;  