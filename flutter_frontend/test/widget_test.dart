import 'package:flutter_test/flutter_test.dart';
import 'package:flutter_frontend/main.dart';

void main() {
  testWidgets('Index lists generated screens', (WidgetTester tester) async {
    await tester.pumpWidget(const MyApp());
    await tester.pumpAndSettle();

    expect(find.text('Generated Screens'), findsOneWidget);
    // At least one of the known routes should be present
    expect(find.text('address-226-68'), findsWidgets);
  });
}
