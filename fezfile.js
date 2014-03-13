var fez   = require("fez"),
    less  = require("fez-less"),
    clean = require("fez-clean-css");

process.chdir('input/less')

exports.build = function(spec) {
  spec.with("bootstrap.less").one(function(file) {
    spec.rule(file, less.imports(file), file.patsubst("%.less", "../../output/fez.css"), less());
  });

  process.chdir('../../output')

  spec.with("fez.css").one(function(file) {
    spec.rule(file, file.patsubst("fez.css", "fez.min.css"), clean());
  });
};

exports.default = exports.build;

fez(module);