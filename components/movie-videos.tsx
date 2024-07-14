import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {

    console.log(`i'm fetching movies: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}`)

    return response.json();

}

async function getVideos(id: string) {
    console.log(`i'm fetching videos: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    throw new Error('Failed to fetch videos');
    // const response = await fetch(`${API_URL}/${id}/videos`)

    // return response.json();

}

export default async function MovieVideos({id}:{id:string}){
    const videos = await getVideos(id);

    return <h6>{JSON.stringify(videos)}</h6>

}