// Create a new render method to render index.ejs
//
//You can require this module and use this function
//You'll need to use Express routing functionality to utilize the controller

exports.render = function (req, res) {
    //display index.ejs
    res.render('index', {
        title: 'Technopiles',
    });
};

exports.signout = (req, res) => {
    res.clearCookie('token');
    return res.status('200').json({ message: 'Logged Out' });
};
