# ReactNative
Install Node  
$brew install node

Install Watchman  
$brew install watchman

Install React-Native  
$npm install -g react-native-cli  
$npm install -g react-native

Install yarn  
$brew install yarn

Create Project  
$react-native init AwesomeProject

Run ios Project  
$react-native run-ios

Run androi Project  
$react-native run-android

Start React Server  
$npm start

Configure ios project issue resolve  
$cd node_modules/react-native/third-party/glog-0.3.4/  
$./configure

Add Dependency  
$yarn add react-navigation

Link Dependency to the platform  
$react-native link

-------------------------------------------------------------------------------------------------------------
crete ios bundle for offline  

Add to scripts in package.json  
"ios-bundle": "react-native bundle --dev false --entry-file index.js --platform ios --bundle-output ios/main.jsbundle",  
"ios-dev-bundle": "react-native bundle --entry-file index.js --platform ios --bundle-output ios/main.jsbundle",  

$npm run ios-bundle  
Change app delegate to  

jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];  

-------------------------------------------------------------------------------------------------------------  

-------------------------------------------------------------------------------------------------------------  
create android bundle for offline  

"android-bundle": "react-native bundle --dev false --entry-file index.js --platform android --bundle-output android/app/src/main/assets/index.android.bundle",  
"android-dev-bundle": "react-native bundle --entry-file index.js --platform android --bundle-output android/app/src/main/assets/index.android.bundle",  

-------------------------------------------------------------------------------------------------------------  
