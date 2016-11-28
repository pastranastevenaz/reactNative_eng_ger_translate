# Android English to German Translator
This is a simple React native application which I've used
To build an Android application to help translate English
to German.

This is the codebase for said project, and will be improved over time.

### Built With
* node v4.2.6
* npm v3.5.2
* react-native-cli v1.2.0
* react-native v0.38.0
* Android tools ADB

#### Additional NPM Packages
_beyond basic project packages and dependencies_
* [react-native-extended-stylesheet](https://www.npmjs.com/package/react-native-extended-stylesheet)  
* [react-native-button](https://www.npmjs.com/package/react-native-button)

### Future Add-ons
As with most projects, this can still use some work.
I would like to continue to develop this a bit and add the
following to the projects

* A navigation drawer or other way to navigate to different options
* German to English translation
* Improve the color Scheme
* If possible, implement Google's voice API

### Installing Locally
Feel free to clone this Repo and modify as desired.
The following instructions should get the project cloned and running on your local device.

Currently this application is only running on Android, anyone is free to create a similar ios applicaton by simply
modifying the _index.ios.js_ file.

This short guide assumes you have Android Studio setup, a work virtual device, and your React native environment setup and ready to rock.

#### Make a directory for your project and navigate into it.
`mkdir project && cd project`

#### Clone the project
`git clone https://github.com/pastranastevenaz/reactNative_eng_ger_translate.git`

#### Navigate into the project
`cd reactNative_eng_ger_translate`

You will need to create a local.properties file in the ./android directory, to let the application know where to find the Android SDK.

`touch local.properties`

In the new file you created, add the following line.

`sdk.dir = /_path_/_to your_/Android/Sdk`


#### Build the Android project
`react-native run-android`

#### Initialize the project
`npm start`

After the script runs, you should be able to start your project from you Android Virtual Device.

###### Be excellent!
