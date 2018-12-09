import { HttpRequest } from './axios'

export const handleError = (error) => {
  if (error.response) {
    console.log(error.response.status)
    console.log(error.response.headers)
  } else if (error.request) {
    console.log(error.request)
  } else {
    console.log('Error', error.message)
  }
}

export const httpClient = new HttpRequest()
