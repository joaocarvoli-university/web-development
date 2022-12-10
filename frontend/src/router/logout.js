import Cookies from 'js-cookie'

export function doLogout () {
  Cookies.remove('idUser')
  Cookies.remove('token')
  Cookies.remove('role')
  location.reload()
}