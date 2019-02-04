# Exercism CLI setup
This is for using the Exercism.io site for C++ learning


## download installer
* for [windows](https://github.com/exercism/windows-installer)

## get token from your page
https://exercism.io/my/settings

run command once download is done
```
exercism configure --token=<yourToken>
```

---

## making cmake work
```
copy nul: bob.h
copy nul: bob.cpp
mkdir build
cd build
cmake -G "Visual Studio 15" ..
```