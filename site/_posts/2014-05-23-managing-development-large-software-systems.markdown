---
layout: post
title:  "Managing the Development of Large Software Systems"
date:   2014-05-23 11:07:32
categories: managing development large software systems
---

http://en.wikipedia.org/wiki/SOLID_%28object-oriented_design%29

During the past couple of days I had some free time to read up material on
the process of software development. Such things as
[SOLID](http://en.wikipedia.org/wiki/SOLID_%28object-oriented_design%29)
design, and the [Agile](http://en.wikipedia.org/wiki/Agile_software_development)
methodology are very much discussed and used in the current programming world.
It is interesting to look back on the history of the computer programming field
and software development in general. I found an early work that influenced the
current trends. The work is entitled
**Managing the Development of Large Software Systems** by
[Dr. Winston W. Royce](http://en.wikipedia.org/wiki/Winston_W._Royce).

The process
-----------

Royce begins his thesis by arguing that for a simple program that is written with the
purpose of being used by the sole developer (or the few developers that write this program)
only two steps are necessary:

- analysis
- coding

Royce then goes on to point out that if a very large software system is to be built that is
mission-critical and will face a large user audience, then the two step process must be greatly
expanded:

- system requirements
- software requirements
- analysis
- program design
- coding
- testing
- operations

From a first glance, it is understandable that this multi step process will drive up
the development costs. Customers typically would rather not pay for the additional
steps, and developers would rather not implement them. Royce makes a remark that

> The prime function of management is to sell these concepts (steps) to both groups
and then enforce compliance on the part of developers.

Documentation
-------------

Besides going in depth for each step, Royce makes a point on documentation. The following
little excerpt shows just how much documentation is important in the view of Royce.

> Occasionally I am called upon to review the progress of other software design efforts.
My first step is to investigate the state of the documentation. If the documentation is in
serious default my first recommendation is simple. Replace project management. Stop all
activities not related to documentation. Bring the documentation up to acceptable
standards. Management of software is simply impossible without a very high degree of
documentation. As an example, let me offer the following estimates for comparison. In
order to produce a 5 million dollar hardware device, I would expect that a 30 page
specification would provide adequate detail to control the procurement. In order to
produce 5 million dollars of software I would estimate a 1500 page specification is about
right in order to achieve comparable control.

The work **Managing the Development of Large Software Systems** was written in 1970. Obviously,
much has changed in the software world since then. However, I found that Royce has some sound
advice that can be applied to today's projects. Then again, you can just read it for the sake
of having an understating of how management of software projects evolved.
