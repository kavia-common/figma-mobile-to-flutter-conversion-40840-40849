# WebView setup notes (Android/iOS)

Android:
- INTERNET permission added in android/app/src/main/AndroidManifest.xml
- No further changes needed; webview_flutter is configured and loads data URLs with a base href pointing to /assets/.
- WebView background is set to transparent so page background colors and images show through.

iOS:
- Ensure the iOS Runner project includes NSAppTransportSecurity exceptions if loading remote content. For local bundled assets via data URLs, defaults typically work.
- If you encounter blank WebView screens, add the following to ios/Runner/Info.plist:
  <key>io.flutter.embedded_views_preview</key>
  <true/>
- If network access is required by embedded JS, include:
  <key>NSAppTransportSecurity</key>
  <dict>
    <key>NSAllowsArbitraryLoads</key>
    <true/>
  </dict>

Notes:
- The loader injects <base href="/assets/"> into each HTML if missing and rewrites relative href/src/url(...) to an absolute bundle path so CSS/JS/images resolve.
- All HTML/CSS/JS assets live in repository root /assets and are declared in pubspec.yaml under assets: - assets/ and - assets/figmaimages/
- Use the in-app route /diagnostics to check that linked CSS/JS/images from an HTML can be resolved via rootBundle.load.
- Defensive logging is enabled for webview asset loads; failures show a readable in-webview fallback error page with error details and asset path.
