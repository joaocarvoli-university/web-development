import axios from 'axios'

export const ApplicationError = {
  name: String,
  message: String,
  details: String,
}

export function isApplicationError(error) {
  return error.name !== undefined && error.message !== undefined
}

export function getAppError(error) {
    if (axios.isAxiosError(error)) {
      if(error.response) {
        const requestError = error.response.data.error
        const { name, message, details } = requestError 
        return { name, message, details}
      } else {
        return { name: error.name, message: error.message}
      }
    } 
    throw error
}