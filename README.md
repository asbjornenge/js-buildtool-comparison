# JS Buildtool Comparison

There is a growing number of available javascript buildtools our there.  
Trying to get a better overview, my local jug decided to have a hacknight and do some comparison.

## The Contenders

### [Grunt](http://gruntjs.com/) ★★★☆☆

Grunt is the current king of the buildtools.  
It is widely used and there are lots of available [grunt-tasks](https://www.npmjs.org/search?q=grunt).
Grunt has received some critique for being slow and for a complex configuration file.

<img src="http://gruntjs.com/img/grunt-logo.png" width="150" />

#### Summary

Even with our collective experience with Grunt it took us quite a while to get the task running as we wanted. 
It has by far the slowest build time of the group.

#### Timing

For timing Grunt we used the [time-grunt](https://www.npmjs.org/package/time-grunt) package.

### [Gulp](http://gulpjs.com/) ★★★★☆

Gulp's tagline is "The streaming build system" as it makes heavy use of node streams. 
It puts emphasis on *code over configuration* and tries to be easy to manage and manipulate.
One of the main tings about gulp is that a build pipe only reads once and writes once to the filesystem.

<img src="https://raw2.github.com/gulpjs/artwork/master/gulp.png" width="80" />

#### Summary

In general we really liked gulp. It has very nice syntax and is blazing fast. 
The one thing we found confusing was error reporting. The output wasn't very helpful.
Even so, gulp wins the *zero-to-hero* challenge.

#### Timing

Gulp spits out timing data by default, so we just trusted that.

### [Broccoli](https://github.com/joliss/broccoli) ★★☆☆☆

Broccoli was built for fast incremental rebuilds. It abstracts your files into trees instead of individual files and uses caching quite heavily
to provide these fast rebuilds.

<img src="http://www.asbjornenge.com/cdn/images/broccoli.png" width="130" />

#### Summary

To be fair our test case is not perfect for broccoli since we are not doing any incremental builds here. In a real-world scenario,
especially if your using [livereaload](http://livereload.com/) (like you should), this can be important. 
Still, it's quite fast. 
The syntax is easy to read and understand. A notch below gulp, but not bad.  
But we had some issue getting it up and running. 
We were unable to make it write the output as a single file, it had to be a directory. We also had to manually delete the output before re-running the task!? 
Broccoli is still beta software, so some of it can be excused. It's not ready yet, but we are excited to see where broccoli goes.

#### Timing

Broccoli itself doesn't report any timing data, and we could not find a plugin. So we ended up doing <code>t2 - t1</code> in the brocfile.
Please let us know (by opening an issue or PR) if this is not ideal for timing broccoli tasks.

### [Fez](http://fez.github.io/)

Fez is an über fast, highly configurable, extremely powerful, and somewhat weird general purpose build tool written in JavaScript. Build specs are created with a simple JavaScript-based DSL. The set of rules defined in the spec is used to construct a build graph which is efficiently traversable, enabling Fez to do only the work which needs to be done, and to do work in parallel when it can.

<img src="http://fez.github.io/fez.png" width="120" />

#### Summary

Fez is a bit of an oddball. The syntax is actually quite interesting, and it's crazy fast! It took us a while to get it working though. 
We were unable to find a suitable sass plugin, so we had to use less for fez.

#### Timing

We used the same approach as above and did the timing manullay in the fezfile. Again; please create an issue or PR if this is not a good way to time this buildtool.

## The metrics

* Buildspeed
* Time from zero to hero
* Small vs Large projects (increasing complexity)

## The tasks

* Process & minify a twitter bootstrap worth of sass files

## Results

|              | Gulp    | Grunt   | Broccoli  | Fez    |
|------------- | ------- | ------- | --------  | ------ |
| zero-to-hero | 19 min  | 22 min  | 31 min    | 36 min |
| taks: sass   | 5.65 ms | 127 ms  | 43 ms     | 3 ms   |
| total        |         | 234 ms  |           |        |

## Further reading

[Broccoli: First Beta Release](http://www.solitr.com/blog/2014/02/broccoli-first-release/index.html)  
[Using Grunt? Consider Fez](http://flippinawesome.org/2014/02/24/using-grunt-consider-fez/)
