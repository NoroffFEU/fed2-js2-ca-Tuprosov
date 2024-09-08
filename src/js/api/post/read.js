import { API_SOCIAL_POSTS } from "../constants.js";
import { headers } from "../headers.js";
import { displayPosts } from "./displayPosts.js";

export async function readPost(id) {}

export async function readPosts(limit = 12, page = 1, sortOrder = "desc") {
    try {
        const response = await fetch(API_SOCIAL_POSTS, {
           method: "GET",
           headers: headers(),
        })

        if (!response.ok) {
            const error = await response.json();
            throw new Error(`Error displaying posts: ${error.message}`);
        }

        const data = await response.json();
        displayPosts(data);

    } catch (error) {
        console.error('Error getting post', error);
        throw error;
    }
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
