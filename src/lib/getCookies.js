export async function getCookies(req) {
    // Access cookies from the request
    const token = req.cookies.get('userToken');
    // Return the token if it exists, otherwise return null
    return token;
}
