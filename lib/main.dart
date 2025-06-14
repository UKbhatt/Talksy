import 'package:chatting/Screens/home_screen.dart';
import 'package:chatting/Screens/splash_screen.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'LetsChat',
      theme: ThemeData(),
      // home: const Homescreen(),
      home: const SplashScreen(),
    );
  }
}
