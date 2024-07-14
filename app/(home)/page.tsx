//"use client";
//import { useEffect, useState } from "react";

import Link from "next/link";

export const metadata = {
    title: 'Home',
  }

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {

    //await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("i'm fetching");
    //return fetch(url).then(response => response.json());
    const response = await fetch(API_URL); //caching automatically in framework
    const json = await response.json();
    return json;

}


//CSR
// export default function Page(){
//     const [isLoading, setIsLoading] = useState(true);
//     const [movies, setMovies] = useState([]);
//     const getMovies = async () => { 
//         const response = await fetch(url);

//         const json = await response.json();
//         setMovies(json);
//         setIsLoading(false);

//     };
//     useEffect(() => {
//         getMovies();
//     },[]);

//     return (
//         <div>
//             {isLoading ? "Loading...": JSON.stringify(movies)}
//         </div>
//     );

// }

export default async function HomePage(){
    const movies = await getMovies();
    return (
        <div>
             {movies.map(movie=>
                <li key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>
                        {movie.title}
                    </Link>
                </li>
             )}
        </div>
    );

}