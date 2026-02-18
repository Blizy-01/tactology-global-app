# Tactology Global — Staff Scheduling App

A mobile application built for the **Tactology Global assignment**, implementing a healthcare staff scheduling and publications platform. Built with React Native + Expo.

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later)
- [Expo Go](https://expo.dev/go) installed on your Android/iOS device, **or** an Android emulator via Android Studio

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npx expo start
```

Then:
- **Android emulator**: Press `a` in the terminal
- **Physical device**: Scan the QR code with the Expo Go app
- **Web**: Press `w` in the terminal

To start with a cleared cache (recommended after config changes):
```bash
npx expo start -c
```

---

## Libraries Used

| Library | Purpose |
|---|---|
| `expo` ~54 | Core framework, build tooling, and native module management |
| `expo-router` ~6 | File-based navigation (tabs + modal stack) |
| `nativewind` 4 | Tailwind CSS utility classes for React Native styling |
| `react-native-reanimated` 4 | Smooth animations and gesture-driven interactions |
| `react-native-gesture-handler` | Touch gesture support (swipe, press, drag) |
| `expo-linear-gradient` | Gradient backgrounds (Shift Details hero section) |
| `lucide-react-native` | Consistent icon set across all screens |
| `react-native-safe-area-context` | Safe area insets for notch/status bar handling |
| `@react-navigation/bottom-tabs` | Tab bar navigator used under the hood by expo-router |
| `react-native-gifted-charts` | Chart components for data visualisation |
| `tailwind-variants` | Composable variant-based styling helpers |

---

## Architecture

### Folder Structure

```
app/                        # Expo Router screens (thin — layout + composition only)
│   _layout.tsx             # Root layout — ThemeProvider + Stack navigator
│   shift-details.tsx       # Modal screen (slide_from_bottom)
└── (tabs)/
    ├── _layout.tsx         # Tab bar configuration
    ├── home.tsx            # Dashboard / welcome screen
    ├── index.tsx           # Mijn Rooster (schedule)
    ├── publications.tsx    # Medical publications feed
    └── profile.tsx         # User profile & settings

components/
├── ui/                     # Reusable primitives
│   ├── Badge.tsx           # Colored pill badge (5 variants)
│   ├── EmptyState.tsx      # Empty state with icon + message
│   ├── LoadingStates.tsx   # Skeleton loaders + ErrorState
│   ├── PublicationCard.tsx # Publication list card
│   ├── SectionHeader.tsx   # Section title + optional "See all"
│   ├── ShiftCard.tsx       # Shift card with left-border accent
│   └── StatCard.tsx        # Stat display card
├── ThemeProvider.tsx       # NativeWind CSS vars theme wrapper
└── ThemeToggle.tsx         # Light/dark mode toggle

hooks/                      # Data hooks (simulated async, ready for real API)
├── useShifts.ts            # Shifts + calendar + loading/error state
├── usePublications.ts      # Publications + loading/error state
├── useUser.ts              # Current user data
└── useNotifications.ts     # Notifications + unread count

types/                      # Shared TypeScript interfaces
├── shift.ts
├── publication.ts
├── user.ts
└── notification.ts

constants/
└── mock-data.ts            # All mock data centralized (single source of truth)
```

### Navigation
The app uses **Expo Router's file-based routing**. The directory structure maps directly to routes. The Shift Details screen is a **bottom sheet modal** (`presentation: 'modal'`, `animation: 'slide_from_bottom'`).

### Theming
Theming is handled via **NativeWind + CSS custom properties**. Light and dark themes are defined in `theme.ts` as NativeWind `vars()` objects and applied at the root via `ThemeProvider`. Every component uses semantic tokens (`bg-background`, `text-foreground`, `text-primary`) — dark mode is automatic.

### Data Layer
All data hooks (`useShifts`, `usePublications`, etc.) simulate async fetching with a `setTimeout` delay, returning `{ data, isLoading, error, refetch }`. This pattern means swapping mock data for a real API requires only changing the hook internals — screens and components are untouched.

### State Management
State is managed locally via React's `useState`/`useEffect` within custom hooks. The hooks act as the single source of truth for each data domain. This is intentionally kept simple for a prototype — the hook interface is compatible with a future Zustand or React Query migration.

---

## Implementation Notes

- **React 19** is used alongside Expo 54. The New Architecture (`newArchEnabled`) is currently disabled for stability, as some dependencies (NativeWind, Reanimated 4) have partial React 19 support.
- The **React Compiler** (`reactCompiler`) is disabled for the same reason — it caused a render hang during the bundling phase.
- Shift cards use a **4px coloured left-border accent** (blue for morning, amber for afternoon) matching the Figma design spec.
- Dutch UI strings (`Mijn rooster`, `Beschikbaar`, `Beschrijving`, `Notities`) are used throughout to match the assignment's target locale.
- **TypeScript strict mode** is enabled — all types are explicit with no implicit `any`.
- **Edge cases** are handled on all data-driven screens: loading skeletons, empty states, and error states with retry.
