# Tables POC

## Motivation

Currently our tables have some limitations. For example, since we have fixed width on each column, we are not taking advantage of adapting column width to content.

![Current problem](images/current_problem.png)

We arrives at this place due a number of decisions that departed us for simple old HTML tables:

* Scroll bar inside table, to see the column headers all the time.
* Focus on small screens (~1024px) forgetting bigger ones.
* No enough knowledge about real data at the moment of design the screen.

We have been fixing particular cases, expanding some columns, reducing others and allow some of the to be defined based on screen width percentage, but it is not enough. It give us a lot of work, and sometimes we are missing things.

At the beginning we did not have pagination, so it was really important to make headers always visible. Now, we are showing only twenty items by page, so we think that we can sacrifice the inner table scroll and, instead, get the benefit of column widths adaptable to content.

It looks simple, but we still have some restrictions, so, we need to define how to deal with it, and how to mitigate edge cases.

## TODO:

* Documentation
* simulate left nav bars (3 different bars)

## Adaptative columns behavior

_I am working on this_

## Related readings

* [Tables (W3C recommendation)](http://www.w3.org/TR/CSS21/tables.html)
* [What is the behavior when sum of widths of columns != table width?](http://stackoverflow.com/questions/8251517/what-is-the-behavior-when-sum-of-widths-of-columns-table-width)
* [A Complete Guide to the Table Element](http://css-tricks.com/complete-guide-table-element/)