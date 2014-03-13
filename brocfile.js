module.exports = function (broccoli) {

    var t1 = Date.now()

    var compileSass = require('broccoli-sass');
    var sourceTree  = broccoli.makeTree('input')
    var sass        = compileSass([sourceTree], 'sass/bootstrap.scss', 'broccoli.css', {
        outputStyle : 'compressed'
    })

    var t2 = Date.now()
    console.log(t2 - t1)

    return [sass]
};