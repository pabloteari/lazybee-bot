var app = Application.currentApplication();
app.includeStandardAdditions = true;

visualStudioCode = Application("Visual Studio Code");
simulatorIOS = Application("Simulator");
terminal = Application("Terminal");

terminal.Windows.miniaturized = true;
simulatorIOS.frontmost = true;

try {
  //if (!visualStudioCode.running()) {
  visualStudioCode.activate();
  //}

  //if (!simulatorIOS.running()) {
  simulatorIOS.activate();
  //}

  terminal.doScript(
    "npm start --prefix /Users/pabloteari/Desktop/EventoApp/Front/EventoApp/",
  );
  app.doShellScript(
    "xcrun simctl launch booted org.reactjs.native.example.EventoApp",
  );

  app.say("Have a great work, Pablo!", {
    using: "Alex",
    speakingRate: 190,
    pitch: 65,
    modulation: 127,
  });

  app.quit();
} catch (e) {
  app.say("Sorry Pablo! I did not make it!", {
    using: "Alex",
    speakingRate: 190,
    pitch: 65,
    modulation: 127,
  });
  app.quit();
}
