# Roll Cage

An experimental CSS grid system with focus on responsiveness,
simple and easy to read syntax, and getting the job done.

There is also a JavaScript implementation. (Coming soon.)

```
<roll flx='jc-around'>
	<cage cx=' xs12 '>
		I am 12 columns wide on xs screens.
	</cage>
	<cage cx=' xs12 md8 lg4+ '>
		I am 12 columns on xs, 8 on md, and
		4 on anything larger than lg screens.
	</cage>
	<cage cx=' -6md+ '>
		I am 6 columns wide on all screens!
	</cage>
</roll>
```
