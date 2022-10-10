$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/final.feature");
formatter.feature({
  "line": 2,
  "name": "check sky color",
  "description": "\r\nbackground : Given User is on techfios test page",
  "id": "check-sky-color",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FinalExam"
    }
  ]
});
formatter.before({
  "duration": 2356592200,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "1  Sky Blue Background",
  "description": "",
  "id": "check-sky-color;1--sky-blue-background",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Set SkyBlue Background button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on the button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.buttons_exist()"
});
formatter.result({
  "duration": 155484100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_the_button()"
});
formatter.result({
  "duration": 121301800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 78044300,
  "status": "passed"
});
formatter.before({
  "duration": 1708816700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "2 White Background Change",
  "description": "",
  "id": "check-sky-color;2-white-background-change",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "Set SkyWhite Background button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on the button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.set_SkyWhite_Background_button_exists()"
});
formatter.result({
  "duration": 80847700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_the_button()"
});
formatter.result({
  "duration": 95024600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 3076195200,
  "status": "passed"
});
});