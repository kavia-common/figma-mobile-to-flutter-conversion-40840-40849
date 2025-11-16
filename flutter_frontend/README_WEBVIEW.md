# WebView setup notes (Android/iOS)

Android:
- INTERNET permission added in android/app/src/main/AndroidManifest.xml
- No further changes needed; webview_flutter is configured and loads data URLs with a base href pointing to /assets/.

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

Note:
- This project serves HTML via a data URL with <base href="/assets/"> so that root-level images referenced as /assets/figmaimages/... resolve correctly from the Flutter bundle.
- All HTML/CSS/JS assets live in repository root /assets and are declared in pubspec.yaml under assets: - assets/ and - assets/figmaimages/
- Defensive logging is enabled for webview asset loads; failures will show a readable in-webview fallback error page indicating the missing asset path and error details. This helps diagnose typos like "aaddress-226-68.html" vs "address-226-68.html".
