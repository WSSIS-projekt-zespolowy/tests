Feature: Tweetme Test


  Scenario Outline: Registration on Tweetme

    Given User is on Tweetme.co
    When The user is Chosed the registration field
    When Entered Username: "<Username>", Email: "<Email>", Password: "<Password>"
    Then The user is registrated in Tweetme

    Examples:
        |Cases                        |Username	       |Email          |Password    |
        |Create new user1             |nowyLogin85     |nowy85@nowy.pl |nowyLogin85 |
        |Create new user2             |nowyLogin94     |nowy94@nowy.pl |nowyLogin94 |

  Scenario Outline: Login the user in cases: "<Cases>"

    Given User is on Tweetme.co
    When Entered Login: "<Username>" and Password: "<Password>"
    Then The user is logged

    Examples:
        |Cases                        |Username	        |Password        |
        |Valid Username And Password  |krzysztofKordecki|specjalnosciowe |

  Scenario: Write message on Tweetme

    Given User is on Tweetme.co
    When The user is logged in Tweetme
    When Entered message on Tweetme
    Then The message is displayed

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


