import axios from "axios";
import { FAKE_POPULARS, FAKE_RECOMMENDED } from "./fake_data";
import { tmdbBaseUrl, api_key_params } from "../config";


class TVShowAPI {
    static async fetchPopular() {
        const response = await axios.get(`${tmdbBaseUrl}tv/popular${api_key_params}`);
        console.log(response.data.results)
        return response.data.results;
        // return FAKE_POPULARS;
    }

    static async fetchRecommended(tvShowId) {
        const response = await axios.get(`${tmdbBaseUrl}tv/${tvShowId}/recommendations${api_key_params}`);
        return response.data.results;
        // return FAKE_RECOMMENDED;
    }

    static async fetchByTitle(title) {
        const response = await axios.get(`${tmdbBaseUrl}search/tv${api_key_params}&query=${title}`);
        return response.data.results;
    }

}

export {TVShowAPI};