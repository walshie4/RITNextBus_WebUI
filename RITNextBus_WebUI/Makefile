clean:
	rm -rf *.pyc

run: clean
	bundle exec middleman

build: clean
	bundle exec middleman build

push:
	git push origin master

pull:
	git pull origin master

update: pull push

