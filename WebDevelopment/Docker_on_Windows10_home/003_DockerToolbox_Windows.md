
# 2 Docker toolbox | Windows 10 Home | installation and mounting volume

## Configure the tools 

**Docker QuickStart Terminal** is your friend, not your real friend, your digital friend. You can use other CLI if you want, but I would suggest using Docker's tool for Docker. 

* If you haven't already, run the test commands.

```
docker run hello-world
```
* Let's configure the Oracle VM Virtual Box.
1. Open _Oracle VM Virtual Box_
2. You should see the _default_ machine
3. Right click on the machine and go to Settings > Shared Folders 
4. This is where you can [mount](https://docs.docker.com/storage/volumes/) your _guest_ [containers](http://www.floydhilton.com/docker/2017/03/31/Docker-ContainerHost-vs-ContainerOS-Linux-Windows.html) on your local _host_
5. **C/Users** should be setup, but you can amend or add another drive as needed
6. Once 5 is complete, go back to the Oracle Box settings. Settings > Network > Advanced > Port Forwarding
7. Configure protocols - _dont fill out the cells that are not shown below_
|Name | Protocol | Host port | Guest port |
|---|---|---|---|
|http|TCP|80|80|
|whateva|TCP|8080|8080|

Save and close Oracle VM virtual box.

## Mounting
Mounting an nginx container:  
```
docker container run -d -p 8080:80 -v //c/Users/M.\ Cameron/dockertest:/usr/share/nginx/html --name ngwebstart nginx
```

Check if image has been created:  
```
docker ps
```
Log into Docker Hub [account](https://hub.docker.com).

To run the docker [login](https://docs.docker.com/engine/reference/commandline/login/#extended-description) command non-interactively.
* You can set the --password-stdin flag to provide a password through STDIN. 
* Using STDIN prevents the password from ending up in the shell’s history, or log-files.  
```
$ cat ~/my_password.txt | docker login --username foo --password-stdin
```

Build and push to you docker hub repo:  
```
docker image build -t markcam1/nginxtest .
```

Check build:  
```
docker images
```