# mock-fin-coin-app

A mock cryptocurrency tracking app built with React Native and Expo. Browse the top 100 coins by market cap, view interactive price charts across multiple time periods, and maintain a personal watchlist.

## Features

- Live coin data via the CoinGecko public API
- Interactive price charts with 1D / 1W / 1M / 3M / 1Y periods
- Tap-to-inspect tooltip showing price at any point on the chart
- Watchlist with persistent storage across sessions
- Search/filter across the full coin list

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) — `npm install -g expo-cli`

## Running locally

```bash
# Install dependencies
npm install

# Start the Expo dev server
npx expo start
```

From the dev server menu press the key for your target platform:

### Web
- Press `w` — opens at `http://localhost:8081`

### iOS Simulator (Mac only)
1. Install [Xcode](https://apps.apple.com/us/app/xcode/id497799835) from the Mac App Store
2. Open Xcode → Settings → Components and download a simulator
3. Press `i` in the dev server menu

### Android Emulator
1. Install [Android Studio](https://developer.android.com/studio)
2. Open Android Studio → Virtual Device Manager and create an emulator
3. Start the emulator, then press `a` in the dev server menu

### Physical device
- Install the [Expo Go](https://expo.dev/go) app and scan the QR code from the dev server

## Tech stack

- [Expo](https://expo.dev/) SDK 55
- [React Native](https://reactnative.dev/) 0.83
- [React Navigation](https://reactnavigation.org/) (bottom tabs + stack)
- [react-native-gifted-charts](https://github.com/Abhinandan-Kushwaha/react-native-gifted-charts) for price charts
- [Axios](https://axios-http.com/) for API requests
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) for watchlist persistence
- [CoinGecko API](https://www.coingecko.com/en/api) (public, no key required)
