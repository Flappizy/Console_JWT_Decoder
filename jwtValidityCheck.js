export function checkJWTValidity(jwtObject) {
    if (!jwtObject.payload || !jwtObject.payload.nbf || !jwtObject.payload.exp) {
        return "Invalid Object";
    }

    const expiryTimeInSeconds = jwtObject.payload.exp;
    const expiryDate = new Date(expiryTimeInSeconds * 1000);
    
    return expiryDate < Date.now() ? `Token has expired, because it has an expiry date of ${expiryDate}`:
        `Token is still valid for use, because it has an expiry date of ${expiryDate}`;
}