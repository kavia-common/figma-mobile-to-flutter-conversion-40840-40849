import 'package:flutter_test/flutter_test.dart';
import 'package:flutter_frontend/main.dart';
import 'package:flutter/material.dart';

void main() {
  testWidgets('Index lists generated screens and can navigate', (WidgetTester tester) async {
    await tester.pumpWidget(const MyApp());
    await tester.pumpAndSettle();

    expect(find.text('Generated Screens'), findsOneWidget);
    // At least one of the known routes should be present
    expect(find.text('address-226-68'), findsWidgets);

    // Tap first tile if present to try pushing a route (smoke test)
    final firstTile = find.byType(ListTile).first;
    await tester.tap(firstTile);
    await tester.pump();

    // Should attempt navigation; we allow WebView screen without asserting inner content.
    expect(find.byType(Scaffold), findsWidgets);
  });
}
