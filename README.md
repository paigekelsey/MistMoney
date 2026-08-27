# MistMoney

> *Never miss your money. Keep recurring spending in sight.*

MistMoney is a cross-platform (iOS, Android, and web) mobile app for tracking subscriptions and recurring charges — so upcoming spend is easy to see before it hits your account. Think radar for bills and renewals, plus a forecast of what's coming next.

Built with **Expo (SDK 54)** and **React Native**, using **Expo Router** for file-based navigation, **TypeScript** throughout, and **NativeWind** (Tailwind CSS) for styling. The aim is a full product surface: auth, onboarding, subscription radar, forecasting, and settings — not a single demo screen.

## Stack

| Layer        | Choice                                      |
| ------------ | ------------------------------------------- |
| Framework    | [Expo](https://expo.dev) 54                 |
| Navigation   | [Expo Router](https://docs.expo.dev/router/introduction/) |
| UI           | React Native / React 19                     |
| Styling      | [NativeWind](https://www.nativewind.dev/) (Tailwind CSS) |
| Language     | TypeScript                                  |

## Getting started

**Requirements:** Node.js 20+ and npm.

```bash
npm install
npm start
```

Then open in:

- iOS Simulator (`i`)
- Android Emulator (`a`)
- Expo Go (scan the QR code)
- Web (`w`)

Useful scripts:

| Command           | Description               |
| ----------------- | ------------------------- |
| `npm start`       | Start the Expo dev server |
| `npm run ios`     | Open iOS simulator        |
| `npm run android` | Open Android emulator     |
| `npm run web`     | Open in the browser       |
| `npm run lint`    | Run ESLint                |

## Features 🚧 Coming soon

Not listed yet — Radar, Forecast, and auth are still early placeholders. Add a short bullet list once those flows ship.

## Screenshots 🚧 Coming soon

None yet — UI screens are mostly stubs. Drop images here when the main screens have a stable look.

## Environment 🚧 Coming soon

No env vars yet — nothing secret is wired up. When auth or APIs land, document variable _names_ here (never values).

| Variable | Description |
| -------- | ----------- |
| —        | —           |

## Backend / data 🚧 Coming soon

Not decided / documented yet — subscriptions and user data don't have a backend in this repo. Note the service (e.g. Supabase) and key tables/collections when that exists.

## Deep links 🚧 In progress

Scheme is already set to `mistmoney` in `app.json`. Paths and examples aren't documented yet because deep linking isn't in use beyond the scheme.

## Deploy / builds 🚧 Coming soon

No release pipeline yet — nothing ships to TestFlight or Play. Document EAS profiles and store steps when builds start.

## Docs

This project targets Expo SDK 54. Prefer the versioned docs: [Expo v54](https://docs.expo.dev/versions/v54.0.0/).
