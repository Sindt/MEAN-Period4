module.exports.jwtConfig = {
    secret: "ThisIsSecret",
    tokenExpirationTime : 60*15,
    audience: "yoursite.net",
    issuer: "yourcompany@somewhere.com"
};