Feature: Login Test
  Scenario Outline: Inviled login the user in cases: "<Cases>"

    Given User is on Tweetme.co
    When Entered Login: "<Username>" and Password: "<Password>"
    Then The user isn't logged

      Examples:
        |Cases                        |Username	        |Password       |
        |Empty Password               |krzysztofKordecki|		        |
        |Empty Username	              |	                |specjalnosciowe|
        |Empty Username And Password  |	                |		        |
        |Invalid Username	          |bdsgdfhfd        |specjalnosciowe|
        |Invalid Password	          |krzysztofKordecki|4ererererer    |
        |Invalid Username And Password|fgffbdfhghh	    |bgh6tgj6q5     |


  Scenario Outline: Login the user in cases: "<Cases>"

    Given User is on Tweetme.co
    When Entered Login: "<Username>" and Password: "<Password>"
    Then The user is logged

    Examples:
        |Cases                        |Username	        |Password        |
        |Valid Username And Password  |krzysztofKordecki|specjalnosciowe |

