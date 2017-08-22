dev:
	# makefile echoing
	# starting develop enviroment
	@# this message will not show
	# cmd is:
	pm2-dev start index.js

env-dev:
	pm2 startOrRestart ecosystem.json --env development

env-prod:
	pm2 startOrRestart ecosystem.json --env production
