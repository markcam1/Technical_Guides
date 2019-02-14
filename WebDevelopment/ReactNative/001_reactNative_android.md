# react native and android

## Prequ
## Node and Java Development Kit

## React Native CLI

```
npm install -g react-native-cli
```



## Android Development Environment

Installing Java

```
java -version
```
If it doesn't exist [install](https://www.java.com/en/download/help/download_options.xml#linux) it

### install android studio
[android-downloads](https://developer.android.com/studio/#downloads)
* Standard
* Select theme

React Native requires Android 6.0 (Marshmallow). 
[react-native-requirements](https://github.com/facebook/react-native#requirements)

In Android Studio, go to **Tools\Android\SDK Manager**. Select _SDK Platforms_ and check **Show Package Details** in the bottom right. Make sure that the following items are checked:

* Google APIs, 
* Android 23
* Android SDK Platform 23
* Intel x86 Atom_64 System Image (for 64 bit )
* Google APIs Intel x86 Atom_64 System Image


Next, select SDK Tools and check Show Package Details. Expand Android SDK Build-Tools and make sure 23.0.1 is selected.

Finally, tap Apply to install your selections.


Run the [emulator](https://www.raywenderlich.com/291-beginning-android-development-with-kotlin-part-one-installing-android-studio)

1. Create new project
2. Basic Activity
3. Enter "Activity Name"
4. Finish

Emulator
On IDE screen
* click AVD Manager
* Select Pixel 2
* choose and download OS
* verify config -> choose defaults > finish
* go to android ide and click run

---

### create app

Create a React Native application on your machine using the command below - where _appName_ is the name of your application.
```
react-native init appName
```

* add exports/path to your [system](https://www.dev2qa.com/how-to-set-android-sdk-path-in-windows-and-mac/)
* On Windows: enable _Windows Hypervisor Platform_

In order to run emulator from terminal you need to -

cd /usr/local/android-sdk-linux/tools/
./emulator -list-avds

This will show all emulators. To choose your emulator -

./emulator -avd <avd_name_shown>

```
react-native run-android
```

