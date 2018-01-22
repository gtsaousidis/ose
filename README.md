# Ose

This app shows all train departures from Athens to Larissa

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Requirements

* Install Node.js
* Install watchman
* Install Android Studio/Android SDK
* Requires gradle 3.0.1

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
	* `react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bu‌​ndle --assets-dest android/app/src/main/res/`
2. Run on device 
	* `react-native run-android`


