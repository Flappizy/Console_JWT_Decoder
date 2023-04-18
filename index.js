import { jwtDecoder } from "./decoder.js";
import { checkJWTValidity } from "./jwtValidityCheck.js";

const jwt = process.argv[2];
const decodedJWT = jwtDecoder(jwt);
console.log(decodedJWT);

console.log(checkJWTValidity(decodedJWT));