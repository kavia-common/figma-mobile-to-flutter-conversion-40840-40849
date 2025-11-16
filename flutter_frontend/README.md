# flutter_frontend

A new Flutter project.

## HTML/Assets WebView Integration

This app renders Figma-exported HTML/CSS/JS stored at the repo root `/assets/` using `webview_flutter`.

What’s configured:
- pubspec.yaml includes `assets/` and `assets/figmaimages/`
- AndroidManifest adds INTERNET permission
- `lib/main.dart` includes a route index and a WebView screen that:
  - loads the requested HTML from assets
  - injects `<base href="/assets/">` so all relative paths like `figmaimages/...` work
  - enables JavaScript

How to run:
- flutter pub get
- flutter run

Notes:
- See README_WEBVIEW.md for iOS-specific notes if you need App Transport Security exceptions.
- All routes are visible on the home “Generated Screens” index; tap any to open its HTML in-app.
