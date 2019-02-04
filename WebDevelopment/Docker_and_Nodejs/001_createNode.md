# Create Node.js app in a Linux Docker container

If you do not have Docker installed on a Linux machine as yet please do that now

Open a terminal. In your terminal download [Node.js](https://github.com/nodesource/distributions#installation-instructions)

For my Linux Mint 19 (based on Ubuntu) OS, I used:
`curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -`
`sudo apt-get install -y nodejs`

Check install
`node -v`

run the package initializer 
`npm init`

Answer the questions, don't think to hard. 

Check the package
`vi package.json`
At the end, you should have a package.json file that looks roughly like this:

```
{
  "name": "node docker app",
  "version": "1.0.0",
  "description": "whateva you want",
  "author": "First name Last name",
  "main": "index.js",
}
```