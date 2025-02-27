import { API_URL } from "../app/(common)/constants";
import styles from "../styles/movie-videos.module.css"
async function getMovie(id: string) {

    console.log(`i'm fetching movies: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}`)

    return response.json();

}

async function getVideos(id: string) {
    console.log(`i'm fetching videos: ${Date.now()}`);

    const response = await fetch(`${API_URL}/${id}/videos`)

    return response.json();

}

export default async function MovieVideos({id}:{id:string}){
    const videos = await getVideos(id);

    return <div className={styles.container}>
        {videos.map(
            (video) => 
                <iframe key={video.id} 
                        src={`https://youtube.com/embed/${video.key}`}
                        title={video.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                        gyroscope; picture-in-picture"
                        allowFullScreen/>
        )}
    </div>

}