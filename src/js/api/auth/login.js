import {headers} from "../../api/headers.js";
import {API_AUTH_LOGIN} from "../constants.js"

export async function login({ email, password }) {
    
    try {
        const response = await fetch(API_AUTH_LOGIN, {
          method: 'POST',
          headers: headers(),
          body: JSON.stringify({
            email,
            password
          })
        })
    
        if (!response.ok) {
          const error = await response.json();
          throw new Error(`Login failed: ${error.message}`);
        }

        const {data} = await response.json()
        const {accessToken: token, ...user} = data;
        localStorage.token = token;
        localStorage.user = JSON.stringify(user);
        console.log('Login successful!', data);
        
        // redirect to home page;
        window.location.pathname = '/fed2-js2-ca-Tuprosov/index.html';

      } catch(error) {
        console.error('Error during login:', error);
        throw error;
      }
}
