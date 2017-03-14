---
layout: page
title: Preparing an iOS App for Release
sidebar: home_sidebar
permalink: /iOS-release/
---

During the typical development cycle, you'll test an app using `flutter run` at
the command line, the Run and Debug toolbar buttons in IntelliJ, or both. By
default, Flutter builds a *debug* version of your app.

When you're ready to prepare a *release* version, for example to [publish to the
App Store][appstore], follow the steps on this page.

*Note*: Many of the steps below must be carried out in the Xcode IDE. To open your app in Xcode:

  * From Xcode: Invoke `File > Open` and select the `ios` folder located inside
  your main app dir.

  * From the terminal: `cd <app dir>; xcode ios/`

* TOC Placeholder
{:toc}

## Reviewing the project properties

When you create a new app, a default [Information Property List
(`Info.plist`)][plist] file is created at `<app dir>/ios/Runner/`. Before
releasing, review the contents of this file and verify the values are correct,
especially:

* TODO

## Adding an App Icon

When a new Flutter app is created, it has a default App Icon. To
customize this icon:

1. Review the [iOS App Icon][appicon] guidelines for icon design.

1. TODO

1. To verify the icon has been replaced, run your app using `flutter run`
and inspect the icon.

## Signing the app


## Building a release APK

This section describes how to build a release APK. If you completed the
signing steps in the previous section, the release APK will be signed.

Using the command line:

1. `cd <app dir>` (replace `<app dir>` with your application's directory).
1. Run `flutter build ios`.

The release APK for your app is created in `<app dir>/build/ios/Release-iphoneos/Runner.app`.

## Installing a release APK on a device

Follow these steps to install the app built in the previous step on a
connected iOS device.

Using the command line:

1. Connect your iOS device to your computer with a USB cable.
1. `cd <app dir>` where `<app dir>` is your application directory.
1. Run `flutter install` .

## Publishing an app to the App Store

For detailed instructions on uploading and publishing the release version of an
app to the App Store, see the [App Store documentation][appstore].

[appicon]: https://developer.apple.com/ios/human-interface-guidelines/graphics/app-icon/
[appstore]: https://developer.apple.com/app-store/submissions/
