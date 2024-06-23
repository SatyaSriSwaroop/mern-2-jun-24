const verifyAuth = (req, res, next) => {
    if(req.headers.authorization !== process.env.ROUTE_PASSWORD)
        return  res.sendStatus(403);
    next();
} 

module.exports = verifyAuth;