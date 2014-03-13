var fez   = require("fez"),
    less  = require("fez-less"),
    clean = require("fez-clean-css");

process.chdir('input/less')

exports.build = function(spec) {

  var t1 = Date.now()
  spec.with("bootstrap.less").one(function(file) {
    spec.rule(file, less.imports(file), file.patsubst("%.less", "../../output/fez.css"), less());
  });

  process.chdir('../../output')

  spec.with("fez.css").one(function(file) {
    spec.rule(file, file.patsubst("fez.css", "fez.min.css"), clean());
  });
  var t2 = Date.now()
  console.log(t2 - t1)
};

exports.default = exports.build;

fez(module);