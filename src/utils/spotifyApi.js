import constants from "./constants";

const token = constants.SpotifyAccessToken;

const fetchSpotifyData = async (limit = 20) => {
    const response = await fetch(
        `https://api.spotify.com/v1/search?q=q%3Dtrack%253AExpressosabrina&type=track&include_external=audio&limit=${limit}`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        },
    );

    const data = await response.json();
    const items = data.tracks.items;

    return {
        items,
    };
};

export default fetchSpotifyData;
