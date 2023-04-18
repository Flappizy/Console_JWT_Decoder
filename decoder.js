export function jwtDecoder(token) {
    const jwt = token.split('.');

    const header =  Buffer.from(jwt[0], 'base64');
    const decodedHeaderString = header.toString('utf-8');

    const payload =  Buffer.from(jwt[1], 'base64');
    const decodedPayloadString = payload.toString('utf-8');

    //The signature part of a JWT is a Base64-encoded binary string that represents a cryptographic signature 
    //of the header and payload parts of the token. 
    //It is not a structured data format like JSON, and it cannot be parsed using JSON methods.
    const signature =  jwt[2];   

    //This is done to replace the Base64 URL-safe characters - and _ 
    //with their regular Base64 equivalents + and /, respectively, 
    // in order to get a valid Base64-encoded string.
    const base64Signature = signature.replace('-', '+').replace('_', '/');

    //The string representation of the signature
    const decodedSignatureString = base64Signature.toString('utf-8');

    //The Decoded JWT
    return { 
        header: JSON.parse(decodedHeaderString), 
        payload: JSON.parse(decodedPayloadString),
        signature: decodedSignatureString 
    };
}