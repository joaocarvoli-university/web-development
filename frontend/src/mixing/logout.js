import Cookies from 'js-cookie'

export function doLogout () {
  Cookies.remove('idUser')
  Cookies.remove('token')
  location.reload()
}