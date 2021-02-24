Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Beats Studio 2 Over-Ear").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Beats Studio 2 Over-Ear")_;_script infofile_;_ZIP::ssf2.xml_;_
'Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").WaitProperty "innerhtml", 9.3, 10000
foo = Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").Exist(20)
currentScore = cDbl(Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").GetROProperty("innerhtml"))
Const desiredScore = 9.5
print currentScore &"|"& desiredScore &"|"&currentScore > desiredScore
If currentScore >= desiredScore Then
Reporter.ReportEvent micPass, "ScoreOK", "Score exceeded the desired value of "& desiredScore
Else
Reporter.ReportEvent micFail, "ScoreNotOk", "This product does not have the expected score. Found "& currentScore & " and need "& desiredScore
End If
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save_to_cart").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save to cart")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCart").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCart")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("REMOVE").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("REMOVE")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link")_;_script infofile_;_ZIP::ssf11.xml_;_
