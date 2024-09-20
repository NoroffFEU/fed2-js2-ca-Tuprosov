import {API_SOCIAL_POSTS} from "../constants.js";
import {headers} from "../headers.js";
import {displayPosts} from "./displayPosts.js";
import {displayTargetPost} from "./displayPosts.js";

export async function readPost(id) {
    const url = API_SOCIAL_POSTS + '/' + id
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers()
        })

        if (! response.ok) {
            const error = await response.json();
            throw new Error(`Error displaying the post: ${
                error.message
            }`)
        }

        const data = await response.json();
        displayTargetPost(data.data)

    } catch (error) {
        console.error('Error getting post', error);
        throw error;
    }
}

export async function readPosts(limit = 12, page = 1, sortOrder = "desc") {
    const url = new URL(API_SOCIAL_POSTS);
    url.searchParams.append('limit', limit);
    url.searchParams.append('page', page);
    url.searchParams.append('sortOrder', sortOrder);
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers()
        })

        if (! response.ok) {
            const error = await response.json();
            throw new Error(`Error displaying posts: ${
                error.message
            }`);
        }

        const data = await response.json();
        displayPosts(data.data);

    } catch (error) {
        console.error('Error getting post', error);
        throw error;
    }
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
