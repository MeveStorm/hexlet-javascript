install:
	npm ci

lint:
	npx eslint .

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest --passWithNoTests

fix:
	eslint --fix
