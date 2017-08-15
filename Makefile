dev:
	# makefile echoing
	# starting develop enviroment
	@# this message will not show
	# cmd is:
	pm2-dev start index.js

prod:
	pm2 start index.js
