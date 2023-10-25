const withAuth = (req, res, next) => {
    console.log(req.session.logged_in);
    // redirect the request to the login route if user isn't logged in
    if (!req.session.logged_in) {
        res.redirect("/login");
    } else {
        next();
    }
};

module.exports = withAuth;