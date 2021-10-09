export const loadPosts = async () => {
    const postsResponse = fetch(`https://jsonplaceholder.typicode.com/posts`)
    const photosResponse = fetch(`https://jsonplaceholder.typicode.com/photos`)

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]); //chamando um arrya de promises
    
    const postsJson = await posts.json(); //garantindo que posts sera um json
    const photosJson = await photos.json(); //garantindo que photos sera um json

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    })

    return postsAndPhotos;
}