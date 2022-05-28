import axios from 'axios'

const API_KEY = 'AIzaSyCDRCHx_sTU9RmBSOXip8VTvbjphOznF9I'

export async function createUser(email, password) {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
    {
      email: email, 
      password: password, 
      returnSecureToken: true
    }
  )
}