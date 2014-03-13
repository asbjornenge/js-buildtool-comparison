var fez  = require("fez"),
    less = require("fez-less");

process.chdir('input/less')

exports.build = function(spec) {
  spec.with("bootstrap.less").one(function(file) {
    spec.rule(file, less.imports(file), file.patsubst("%.less", "../../output/fez.css"), less());
  });

  // spec.with("dist/*.min.css").all(function(files) {
  //   spec.rule(files, "dist.min.css", concat());
  // });

  // spec.with("css/*.css").each(function(file) {
  //   spec.rule(file, file.patsubst("css/%.css", "dist/%.min.css"), clean());
  // });
};

exports.default = exports.build;

fez(module);