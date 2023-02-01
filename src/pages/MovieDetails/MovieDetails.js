import React from 'react'
import "./MovieDetails.css"
import { useParams } from 'react-router-dom'
import axios from 'axios';

// ${baseURL}/movie/${movieID}?api_key=${apiKey}

function MovieDetails() {
    const apiKey = process.env.REACT_APP_API_KEY;
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const imageUrl = process.env.REACT_APP_IMAGE_BASE;
    
    //Create state to hold the movie information
    const [movie, setMovie] = React.useState('');

    //I need the movie ID from the URL
    const { movieID } = useParams();
    console.log(movieID);
    // React.useEffect(
    //     ()=>{

    //     }
    // ), []


    //Next step:     React.useEffect(
    //     () => {
    //         //Get information from the API for this movie based on the movieID
    //         axios.get(`${baseUrl}/movie/${movieID}?api_key=${apiKey}`)
    //     }, []
    // )

    // React.useEffect(
    //     () => {
    //         //Get information from the API for this movie based on the movieID
    //         axios.get(`${baseUrl}/movie/${movieID}?api_key=${apiKey}`)
    //             .then(res => {
    //                 console.log(res.data)
    //                 // save this data in state
    //             })
    //             .catch(err =>console.log(err))
    //     }, []
    // )

    React.useEffect(
        () => {
            //Get information from the API for this movie based on the movieID
            axios.get(`${baseUrl}/movie/${movieID}?api_key=${apiKey}`)
                .then(res => {
                    console.log(res.data)
                    // save this data in state
                    setMovie(res.data)
                })
                .catch(err => console.log(err))
        }, []
    )
    return (
        <div className='details-container'>
            <p>{movie?.original_title}</p>
            <p>{movie?.tagline}</p>
        </div>
    )
}

export default MovieDetails