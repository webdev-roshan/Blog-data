module.exports = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://blog-app-git-main-webdev-roshans-projects.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
};
