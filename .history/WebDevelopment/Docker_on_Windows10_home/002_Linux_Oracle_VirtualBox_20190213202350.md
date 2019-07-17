# Get Linux and Configure Oracle VM Virtual Box

## Download a Linux disto. 
Here are a few options compatible with [Docker CE](https://store.docker.com/search?type=edition&offering=community):

[Linux Mint](https://www.linuxmint.com/download.php) - based on Ubuntu
[Ubuntu](https://www.ubuntu.com/download)
[Fedora](https://getfedora.org/en/workstation/download/)
[CentOS](https://www.centos.org/download/)
[Debian](https://www.debian.org/)

## Setup your virtual machine
1. Click on the icon and launch Virtual Box
2. Click _New_
3. Enter a name "Linux Mint 19", SelectType: Linux, SelectVersion: Ubuntu
<br>
<img src="https://github.com/markcam1/Technical_Guides/blob/master/media/images/ovm1.png">

---
1. **Memory Size**: 4096
2. **Hard Drive**: Choose _Create a virtual hard disk now_;
3. **Hard Disk file type**: VDI
4. **Storage on physical hard disk**: Dynamically allocated
5. **File location and size**: 20.00GB
6. Once the virtual machine is setup click _Start_ on the Virtual Box menu
<br>
<img src="https://github.com/markcam1/Technical_Guides/blob/master/media/images/ovm2.png">

---

7. Choose the linux file (.iso) on your local machine when Virtual Box asks for it
8. Install your Linux distro on your guest machine 

Skip to [Install-Docker](#idock) if your Linux environment is configured. 
---
## Linux Mint House Keeping
I used Linux Mint for my distro. Here are good [instructions](https://www.ceos3c.com/open-source/install-linux-mint-19-virtualbox/) for Linux Mint 19

Some other configuration you may want to consider..

Install VIM editor
```
sudo apt install vim
```
Configure **vimrc** file
```
vim ~/.vimrc
```
Add the following line `set nocompatible` to make sure arrow keys don't return characters.\

If you see a distorted/pixelated screen try remedies on my [gist](https://gist.github.com/markcam1/e237272677e5cf3fb97a8b503e278f77)

---

## <a name="idock"></a>Installing Docker CE on your Linux virtual machine

What is a [container](https://www.docker.com/resources/what-container)

1. Enter the linux VM that you installed above
2. Follow the instructions here from Docker for the latest [instructions](https://store.docker.com/search?type=edition&offering=community)
3. Or follow what I did below for my Linux Mint 19

### My install
Open a terminal in your Linux desktop

Update package utility  
```
sudo apt-get update
```

install packages  
```
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
```

Do the gpg key thing:  
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Check key; this is for what I installed. Visit the Docker page for the latest instructions.  
```
sudo apt-key fingerprint 0EBFCD88
```

Download the repo (below is when using ubuntu base version of Linux Mint 19 Tara):  
```
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable" 
```

Update:  
```
sudo apt-get update
```

Install the latest Docker CE:  
```
sudo apt-get install docker-ce
```

Verify Docker CE  
```
sudo docker run hello-world
```
If it works, you will get some text that tell you the installation is working. 

### Docker House Keeping
I don't like to enter _sudo_ before I enter the commands so I followed the docker directions and added my user to the docker group. Consult your local security expert or read the [docs](https://docs.docker.com/engine/security/security/#docker-daemon-attack-surface)

create the docker group  
```
sudo groupadd docker
```

Mine existed already, so I just added my username = $USER to the docker group  
```
sudo usermod -aG docker $USER`
```

Restart and test commands on your $USER without the _sudo_  
```
docker run hello-world
```

Run this command; it lists your docker images:  
```
docker images
``` 

Get information on your install:  
```
docker info
```

### Performance Oracle Virtualbox

1. Install guest additions on guest machine: [instructions](http://www.tomshardware.com/faq/id-1957309/install-virtualbox-guest-additions-linux-mint.html)
2. Enable 3D Acceleration,
3. Ensure that the video memory is at least 128 MBs, if not more. We chose 256 MBs, the max. You can adjust based on your usage. 