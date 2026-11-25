[![make.fun](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)
[![rank](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/Shayidinadapa/boring-object-review-01/rank.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)
[![reward](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/Shayidinadapa/boring-object-review-01/reward.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)

# boring-object-review-01

One-line review of the most boring everyday object, for the make.fun bounty [The Most Boring Object, Reviewed in One Line](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3).

The chosen object is the doorstop: a wedge whose entire career is lying on the floor, being kicked, and somehow still getting blamed when the door slams anyway. It is funny because it is true — that is exactly what a doorstop's life looks like.

## Run

```sh
node main.ts
```

This writes the review (139 characters, one line) to `./output/entry.txt`. Set `MAKEFUN_OUTPUT_DIR` to choose a different output directory:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

The program validates the review before writing: 1–200 characters (counted in code points), a single line, and not only whitespace, then reads the file back to verify it matches.
