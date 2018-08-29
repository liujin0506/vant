import Cookies from 'js-cookie';

const TokenKey = 'Admin-Token';
const RedirectUri = 'Redirect-Uri';
const RedirectRoute = 'Redirect-Route';
const AuthCode = 'Auth-Code';

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

export function getRedirectUri() {
  return Cookies.get(RedirectUri);
}

export function setRedirectUri(uri) {
  return Cookies.set(RedirectUri, uri);
}

export function removeRedirectUri() {
  return Cookies.remove(RedirectUri);
}

export function getRedirectRoute() {
  return Cookies.get(RedirectRoute);
}

export function setRedirectRoute(route) {
  return Cookies.set(RedirectRoute, route);
}

export function removeRedirectRoute() {
  return Cookies.remove(RedirectRoute);
}

export function getAuthCode() {
  return Cookies.get(AuthCode);
}

export function setAuthCode(code) {
  return Cookies.set(AuthCode, code);
}

export function removeAuthCode() {
  return Cookies.remove(AuthCode);
}
