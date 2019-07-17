# Docker toolbox | Windows 10 Home | install Docker toolbox

<a title="dotCloud, Inc. [Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0)], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Docker_(container_engine)_logo.png"><img width="512" alt="Docker (container engine) logo" src="https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png"></a>

You cannot install [Docker for Windows](https://docs.docker.com/docker-for-windows/install/) if you have Windows 10 _Home_ edition.

_See documentation_

System Requirements:
Windows 10 64bit: Pro, Enterprise or Education (1607 Anniversary Update, Build 14393 or later).

Note: If your system does not meet the requirements to run Docker for Windows, you can install **Docker Toolbox**, which uses Oracle Virtual Box instead of Hyper-V.

Here are two ways to use Docker Community Edition if you have Windows 10 Home edition. 

*Let's get started*


## Check that your system has Virtualization enabled.

* Enter your machine's bios and enable the virtualization

![bios](https://camo.githubusercontent.com/6694b2b795c128572432617bf2d00608fefc34d2/68747470733a2f2f676973742e6769746875622e636f6d2f6d61726b63616d312f66343530363735656561306533356638616434663135373337323235646337342f7261772f346135623631663661313937303931613261613436393134306234663763633231383765646363632f6c656e6f766f2e6a7067)

## Make sure that your Hypervisor is turned off

1. In Windows Search Box type _Turn Windows features on or off_
2. Make sure "Windows Hypervisor Platform" is **Unchecked**

![hyper](https://camo.githubusercontent.com/7c17343c298210c67871bc37a6e12d1f4fcacf95/68747470733a2f2f676973742e6769746875622e636f6d2f6d61726b63616d312f66343530363735656561306533356638616434663135373337323235646337342f7261772f656632633339393538323431386163656361383436633839353935643563333363656430393366372f7475726e57696e646f777346656174757265734f6e4f724f66662e706e67)


## Install Docker Toolbox 

1. Go to the [docker](https://docs.docker.com/toolbox/toolbox_install_windows/)
2. Download and make sure to follow the directions on the download page above
3. Make sure you have all 3 of the applications installed
    1. Docker Quickstart
    2. Oracle VM Virtual Box
    3. Kitematic (Alpha)

![apps](https://camo.githubusercontent.com/f30961df707f9dc7c3835ac422441e52c53edd8d/68747470733a2f2f676973742e6769746875622e636f6d2f6d61726b63616d312f66343530363735656561306533356638616434663135373337323235646337342f7261772f313333613039643537613531363165636130376230363534303438653232356636653635303538302f7468726565617070732e706e67)

## Two options 
From here we have two options to choose from:
1. Install Linux on our [Oracle Box](../2_1_Linux_in_oracle.md)
2. Continue with the Docker Toolbox on [Windows](../2_2_docker_windows.md)

I prefer option #1
