import {headers} from "../../api/headers.js";
import {API_AUTH_REGISTER} from "../constants.js"

export async function register({
  name,
  email,
  password,
}) {

  try {
    const response = await fetch(API_AUTH_REGISTER, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        name,
        email,
        password
      })
    })

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Registration failed: ${error.message}`);
    }

    window.location.pathname = './login.html';

    const data = await response.json();
    console.log('Registration successful!', data);
  } catch(error) {
    console.error('Error during registration:', error);
    throw error;
  }
}
