---
layout: post
title:  "Paths, curves, and trajectories"
date:   2014-02-26 18:06:58
categories: path curve trajectory
---

A list of sources to study while thinking about implementing a
smooth trail for a player in the gravity-based XOnix remake
[vonix](https://github.com/valera-rozuvan/vonix).

- [Piecewise Bezier Curves Path Planning with Continuous Curvature Constraint for Autonomous Driving](http://users.soe.ucsc.edu/~elkaim/Documents/ChoiBezierChapter.pdf)
- [Collision-free and Smooth Trajectory Computation in Cluttered Environments](http://gamma.cs.unc.edu/SPATH/paper/ijrr.pdf)
- [Fast Smoothing of Motion Planning Trajectories using B-Splines](https://wwwx.cs.unc.edu/~panj/index_files/files/ICRA11.pdf)
- [Fast Smoothing of Manipulator Trajectories using Optimal Bounded-Acceleration Shortcuts](http://www.cs.indiana.edu/~hauserk/papers/icra10-smoothing.pdf)
- [HTML5 Canvas Bezier Curve Tutorial](http://www.html5canvastutorials.com/tutorials/html5-canvas-bezier-curves)
- [HTML5 Canvas Path Tutorial](http://www.html5canvastutorials.com/tutorials/html5-canvas-paths)
- [Curve and Circular Movement](https://www.inkling.com/read/html5-canvas-fulton-fulton-1st/chapter-5/curve-and-circular-movement)
- [Fluid curves with Smooth.js and HTML5 canvas](http://osuushi.github.io/2012/03/19/smoothjsdemo.html)

Basically the idea is that at any given time we can compute the path
a player is going to take if nothing acts upon him. Knowing that path,
we can draw the trail behind him as times goes on and he advances.
If something acts on the player, then we re-compute the path, and from
the point when something acted on him, use the new path to draw the
trail.
