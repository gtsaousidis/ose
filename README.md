# Ose

This app shows all train departures from Athens to Larissa

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Requirements

* Install Node.js
* Install watchman
* Install Android Studio/Android SDK
* Requires gradle 2.3.3. To use different version, update `android/build.gradle` file.

### Running 

Navigate to the project folder, then:

1. Install dependencies 
	* Run `npm install`
2.	Run on Android 
	* `react-native run-android`
3. Run on iOS
	* `react-native run-ios`

### Running offline (Android)

1. Create bundle 
	* `react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --sourcemap-output android/app/src/main/assets/index.android.map --assets-dest android/app/src/main/res/`
2. Run on device 
	* `react-native run-android`


