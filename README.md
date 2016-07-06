## Gains

Gains is a personal fitness mobile application. Powered by React Native, Flux, and Realm, users can input basic information like height and weight, select a series of workouts, and after recording their progress in the first day, a customized workout is created. The goal is to make it easier to achieve results by recording yoru progress and following along with each day's exercises.

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes. As this is an iOS application, you will only be able to work with Gains on a Mac.

#### Prerequisities

Facebook has an excellent resource for installing React Native [here](https://facebook.github.io/react-native/docs/getting-started.html). This will ready your machine for working with Gains by installing Homebrew, Node, React Native Command Line Tools, and Xcode.

It will also walk you through the installation for Watchman, Flow, and Nuclide, which are optional but recommended.

Install Homebrew
```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Install Node.js using Homebrew
```
$ brew install node
```

Install React Native Command Line Tools
```
$ npm install -g react-native-cli
```
Download Xcode 7.0 or higher via the [App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) or [Apple Developer downloads](https://idmsa.apple.com/IDMSWebAuth/login?appIdKey=891bd3417a7776362562d2197f89480a8547b108fd934911bcbea0110d07f757&baseURL=https://developer.apple.com/&path=%2Fdownload%2F&rv=1).

#### Installation

Follow these steps to get your development environment running.

Make sure you have the latest version of Homebrew
```
$ brew update
```

Clone the repo

```
$ git clone https://github.com/alfredlam42/gains.git
```

Change directories into the newly cloned repo and install `npm`

```
$ cd gains/ && npm install
```

Start the development server
```
$ npm start
```

Run the development simulator
```
$ run-ios react-native
```

If this fails, run the development simulator from Xcode
```
$ open ios/gains.xcodeproj/
```

You are now ready to begin development on Gains. If everything has been set up correctly, you will land on the signup screen.

### Authors

* [Alfred Lam](https://github.com/alfredlam42)
* [Gabriel Firmacion](https://github.com/gabrielfirmacion)
* [Bison Hubert](https://github.com/bisonh)