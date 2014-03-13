module.exports = function (broccoli) {

    var compileSass = require('broccoli-sass');
    var sourceTree  = broccoli.makeTree('input')
    var sass        = compileSass([sourceTree], 'sass/bootstrap.scss', 'broccoli.css', {
        outputStyle : 'compressed'
    })

    return [sass]
};