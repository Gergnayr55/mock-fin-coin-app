# mock-fin-coin-app

A mock cryptocurrency tracking app built with React Native and Expo. Browse the top 100 coins by market cap, view interactive price charts across multiple time periods, and maintain a personal watchlist.

## Features

- Live coin data via the CoinGecko public API
- Interactive price charts with 1D / 1W / 1M / 3M / 1Y periods
- Tap-to-inspect tooltip showing price at any point on the chart
- Watchlist with persistent storage across sessions
- Search/filter across the full coin list

## Prerequisites

- [Node.js](https://nodejs.org/) (v20.19.4 or later)

## Running locally

```bash
# Install dependencies
npm install
```

### Expo Go (quickest — no build required)
```bash
npx expo start
```
Press `i` for iOS simulator, `a` for Android emulator, `w` for web, or scan the QR code with the [Expo Go](https://expo.dev/go) app on a physical device.

### Native iOS build (Mac only)
Requires [Xcode](https://apps.apple.com/us/app/xcode/id497799835) with a simulator runtime installed via Xcode → Settings → Components.
```bash
npx expo run:ios
```

### Native Android build
Requires [Android Studio](https://developer.android.com/studio) with an emulator running via Virtual Device Manager.
```bash
npx expo run:android
```

## Tech stack

- [Expo](https://expo.dev/) SDK 55
- [React](https://react.dev/) 19.2.0
- [React Native](https://reactnative.dev/) 0.83
- [React Navigation](https://reactnavigation.org/) (bottom tabs + stack)
- [react-native-gifted-charts](https://github.com/Abhinandan-Kushwaha/react-native-gifted-charts) for price charts
- [expo-linear-gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/) for gradient UI
- [Axios](https://axios-http.com/) for API requests
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) for watchlist persistence
- [CoinGecko API](https://www.coingecko.com/en/api) (public, no key required)
- [TypeScript](https://www.typescriptlang.org/) ~5.9
