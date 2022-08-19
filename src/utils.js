

// API key from env or use DEMO_API_KEY 
const API_KEY = process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : "DEMO_API_KEY"

export const fetchCats = async (cb) => {
    const promise = await fetch(
        'https://api.thecatapi.com/v1/breeds',
        {
            headers: {
                "content-type": "application/json",
                'x-api-key': API_KEY
            }
        }
    )
    cb(await promise.json())
}