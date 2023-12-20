#!/bin/bash

source_paths=(
	./yarn
	./app
	./bin
	./config
	./db
	./lib
	./public
	./ruby-version
	./.yarnrc.yml
	./config.ru
	./Gemfile
	./Gemfile.lock
	./package.json
	./postcss.config.mjs
	./Rakefile
	./static.json
	./tsconfig.json
	./vite.config.ts
	./yarn.lock
)

destination_dir=/gratiuity/

cp "${source_paths[@]}" "$destination_dir"

mkdir ./log
mkdir ./tmp

rm -f /gratiuity/config/secrets/master.key
rm -f /gratiuity/config/secrets/credentials.yml.enc

exit 0
