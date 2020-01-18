$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resource/InvalidLoginTest.feature");
formatter.feature({
  "line": 1,
  "name": "Tweetme Test",
  "description": "",
  "id": "tweetme-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Registration on Tweetme",
  "description": "",
  "id": "tweetme-test;registration-on-tweetme",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on Tweetme.co",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The user is Chosed the registration field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Entered Username: \"\u003cUsername\u003e\", Email: \"\u003cEmail\u003e\", Password: \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The user is registrated in Tweetme",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "tweetme-test;registration-on-tweetme;",
  "rows": [
    {
      "cells": [
        "Cases",
        "Username",
        "Email",
        "Password"
      ],
      "line": 12,
      "id": "tweetme-test;registration-on-tweetme;;1"
    },
    {
      "cells": [
        "Create new user1",
        "nowyLogin85",
        "nowy85@nowy.pl",
        "nowyLogin85"
      ],
      "line": 13,
      "id": "tweetme-test;registration-on-tweetme;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Registration on Tweetme",
  "description": "",
  "id": "tweetme-test;registration-on-tweetme;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on Tweetme.co",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The user is Chosed the registration field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Entered Username: \"nowyLogin85\", Email: \"nowy85@nowy.pl\", Password: \"nowyLogin85\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The user is registrated in Tweetme",
  "keyword": "Then "
});
formatter.match({
  "location": "FillOutFormTest.userIsOnTweetmeCo()"
});
formatter.result({
  "duration": 11976031293,
  "status": "passed"
});
formatter.match({
  "location": "FillOutFormTest.theUserIsChosedTheRegistrationField()"
});
formatter.result({
  "duration": 720118226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nowyLogin85",
      "offset": 19
    },
    {
      "val": "nowy85@nowy.pl",
      "offset": 41
    },
    {
      "val": "nowyLogin85",
      "offset": 69
    }
  ],
  "location": "FillOutFormTest.enteredUsernameEmailPassword(String,String,String)"
});
formatter.result({
  "duration": 3951559192,
  "status": "passed"
});
formatter.match({
  "location": "FillOutFormTest.theUserIsRegistratedInTweetme()"
});
formatter.result({
  "duration": 129958347,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 14,
      "value": "#        |Create new user2             |nowyLogin94     |nowy94@nowy.pl |nowyLogin94 |"
    }
  ],
  "line": 16,
  "name": "Login the user in cases: \"\u003cCases\u003e\"",
  "description": "",
  "id": "tweetme-test;login-the-user-in-cases:-\"\u003ccases\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User is on Tweetme.co",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Entered Login: \"\u003cUsername\u003e\" and Password: \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "The user is logged",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "tweetme-test;login-the-user-in-cases:-\"\u003ccases\u003e\";",
  "rows": [
    {
      "cells": [
        "Cases",
        "Username",
        "Password"
      ],
      "line": 23,
      "id": "tweetme-test;login-the-user-in-cases:-\"\u003ccases\u003e\";;1"
    },
    {
      "cells": [
        "Valid Username And Password",
        "krzysztofKordecki",
        "specjalnosciowe"
      ],
      "line": 24,
      "id": "tweetme-test;login-the-user-in-cases:-\"\u003ccases\u003e\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Login the user in cases: \"Valid Username And Password\"",
  "description": "",
  "id": "tweetme-test;login-the-user-in-cases:-\"\u003ccases\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User is on Tweetme.co",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Entered Login: \"krzysztofKordecki\" and Password: \"specjalnosciowe\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "The user is logged",
  "keyword": "Then "
});
formatter.match({
  "location": "FillOutFormTest.userIsOnTweetmeCo()"
});
formatter.result({
  "duration": 10446014156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "krzysztofKordecki",
      "offset": 16
    },
    {
      "val": "specjalnosciowe",
      "offset": 50
    }
  ],
  "location": "FillOutFormTest.enteredLoginAndPassword(String,String)"
});
formatter.result({
  "duration": 2106170337,
  "status": "passed"
});
formatter.match({
  "location": "FillOutFormTest.theUserIsLogged()"
});
formatter.result({
  "duration": 134278765,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Write message on Tweetme",
  "description": "",
  "id": "tweetme-test;write-message-on-tweetme",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "User is on Tweetme.co",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "The user is logged in Tweetme",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Entered message on Tweetme",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "The message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FillOutFormTest.userIsOnTweetmeCo()"
});
formatter.result({
  "duration": 9953483765,
  "status": "passed"
});
formatter.match({
  "location": "FillOutFormTest.theUserIsLoggedInTweetme()"
});
formatter.result({
  "duration": 2059292489,
  "status": "passed"
});
formatter.match({
  "location": "FillOutFormTest.enteredMessageOnTweetme()"
});
formatter.result({
  "duration": 1202963099,
  "status": "passed"
});
formatter.match({
  "location": "FillOutFormTest.theMessageIsDisplayed()"
});
formatter.result({
  "duration": 1068005467,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Inviled login the user in cases: \"\u003cCases\u003e\"",
  "description": "",
  "id": "tweetme-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "User is on Tweetme.co",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Entered Login: \"\u003cUsername\u003e\" and Password: \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "The user isn\u0027t logged",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "tweetme-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";",
  "rows": [
    {
      "cells": [
        "Cases",
        "Username",
        "Password"
      ],
      "line": 40,
      "id": "tweetme-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";;1"
    },
    {
      "cells": [
        "Empty Password",
        "krzysztofKordecki",
        ""
      ],
      "line": 41,
      "id": "tweetme-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";;2"
    },
    {
      "cells": [
        "Empty Username",
        "",
        "specjalnosciowe"
      ],
      "line": 42,
      "id": "tweetme-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";;3"
    },
    {
      "cells": [
        "Empty Username And Password",
        "",
        ""
      ],
      "line": 43,
      "id": "tweetme-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";;4"
    },
    {
      "cells": [
        "Invalid Username",
        "bdsgdfhfd",
        "specjalnosciowe"
      ],
      "line": 44,
      "id": "tweetme-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";;5"
    },
    {
      "cells": [
        "Invalid Password",
        "krzysztofKordecki",
        "4ererererer"
      ],
      "line": 45,
      "id": "tweetme-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";;6"
    },
    {
      "cells": [
        "Invalid Username And Password",
        "fgffbdfhghh",
        "bgh6tgj6q5"
      ],
      "line": 46,
      "id": "tweetme-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 41,
  "name": "Inviled login the user in cases: \"Empty Password\"",
  "description": "",
  "id": "tweetme-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "User is on Tweetme.co",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Entered Login: \"krzysztofKordecki\" and Password: \"\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "The user isn\u0027t logged",
  "keyword": "Then "
});
formatter.match({
  "location": "FillOutFormTest.userIsOnTweetmeCo()"
});
formatter.result({
  "duration": 10043801212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "krzysztofKordecki",
      "offset": 16
    },
    {
      "val": "",
      "offset": 50
    }
  ],
  "location": "FillOutFormTest.enteredLoginAndPassword(String,String)"
});
formatter.result({
  "duration": 679696944,
  "status": "passed"
});
formatter.match({
  "location": "FillOutFormTest.theUserIsnTLogged()"
});
formatter.result({
  "duration": 4485890987,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Inviled login the user in cases: \"Empty Username\"",
  "description": "",
  "id": "tweetme-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "User is on Tweetme.co",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Entered Login: \"\" and Password: \"specjalnosciowe\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "The user isn\u0027t logged",
  "keyword": "Then "
});
formatter.match({
  "location": "FillOutFormTest.userIsOnTweetmeCo()"
});
formatter.result({
  "duration": 9826967880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    },
    {
      "val": "specjalnosciowe",
      "offset": 33
    }
  ],
  "location": "FillOutFormTest.enteredLoginAndPassword(String,String)"
});
formatter.result({
  "duration": 662508664,
  "status": "passed"
});
formatter.match({
  "location": "FillOutFormTest.theUserIsnTLogged()"
});
formatter.result({
  "duration": 34059645422,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Inviled login the user in cases: \"Empty Username And Password\"",
  "description": "",
  "id": "tweetme-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "User is on Tweetme.co",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Entered Login: \"\" and Password: \"\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "The user isn\u0027t logged",
  "keyword": "Then "
});
formatter.match({
  "location": "FillOutFormTest.userIsOnTweetmeCo()"
});
formatter.result({
  "duration": 9752849757,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    },
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "FillOutFormTest.enteredLoginAndPassword(String,String)"
});
formatter.result({
  "duration": 635805418,
  "status": "passed"
});
formatter.match({
  "location": "FillOutFormTest.theUserIsnTLogged()"
});
formatter.result({
  "duration": 3733223377,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Inviled login the user in cases: \"Invalid Username\"",
  "description": "",
  "id": "tweetme-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "User is on Tweetme.co",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Entered Login: \"bdsgdfhfd\" and Password: \"specjalnosciowe\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "The user isn\u0027t logged",
  "keyword": "Then "
});
formatter.match({
  "location": "FillOutFormTest.userIsOnTweetmeCo()"
});
formatter.result({
  "duration": 9890900260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bdsgdfhfd",
      "offset": 16
    },
    {
      "val": "specjalnosciowe",
      "offset": 42
    }
  ],
  "location": "FillOutFormTest.enteredLoginAndPassword(String,String)"
});
formatter.result({
  "duration": 891826194,
  "status": "passed"
});
formatter.match({
  "location": "FillOutFormTest.theUserIsnTLogged()"
});
formatter.result({
  "duration": 3736409518,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Inviled login the user in cases: \"Invalid Password\"",
  "description": "",
  "id": "tweetme-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "User is on Tweetme.co",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Entered Login: \"krzysztofKordecki\" and Password: \"4ererererer\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "The user isn\u0027t logged",
  "keyword": "Then "
});
formatter.match({
  "location": "FillOutFormTest.userIsOnTweetmeCo()"
});
formatter.result({
  "duration": 9204859344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "krzysztofKordecki",
      "offset": 16
    },
    {
      "val": "4ererererer",
      "offset": 50
    }
  ],
  "location": "FillOutFormTest.enteredLoginAndPassword(String,String)"
});
formatter.result({
  "duration": 891225593,
  "status": "passed"
});
formatter.match({
  "location": "FillOutFormTest.theUserIsnTLogged()"
});
formatter.result({
  "duration": 3978509231,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Inviled login the user in cases: \"Invalid Username And Password\"",
  "description": "",
  "id": "tweetme-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "User is on Tweetme.co",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Entered Login: \"fgffbdfhghh\" and Password: \"bgh6tgj6q5\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "The user isn\u0027t logged",
  "keyword": "Then "
});
formatter.match({
  "location": "FillOutFormTest.userIsOnTweetmeCo()"
});
formatter.result({
  "duration": 9733563479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fgffbdfhghh",
      "offset": 16
    },
    {
      "val": "bgh6tgj6q5",
      "offset": 44
    }
  ],
  "location": "FillOutFormTest.enteredLoginAndPassword(String,String)"
});
formatter.result({
  "duration": 864104482,
  "status": "passed"
});
formatter.match({
  "location": "FillOutFormTest.theUserIsnTLogged()"
});
formatter.result({
  "duration": 4037530524,
  "status": "passed"
});
});