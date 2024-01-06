export const redirectToRoute = (uri, isAuthenticated = true) => {
    return isAuthenticated ? `/admin/${uri}` : uri
}