//    Name: Garrett Hall 
//    Date Created: 3-9-19
//    Most recent revision: 3-13-19


function rollDice() 
{
	return Math.floor(Math.random() * 6) + 1;
}

function play()
{
	var bet = Number(document.forms["luckySevens"]["bet"].value);
	var money = bet;
	var first;
	var second;
	var diceSum;
	var maxWon = 0;
	var rolls = 0;
	var rollsAtMax = 0;

	if(money<=0)
	{
		alert("Error: Starting Bet Less Than $0");
	}
	else
	{
		while(money > 0)
		{
			first = rollDice();
			second = rollDice();
			diceSum = first + second;
			rolls++;
			if(diceSum != 7)
			{
				money--;
				console.log("lost");
			}
			else
			{
				money += 4;
				if(money > maxWon)
				{
					maxWinnings += (money-maxWon);
					rollsAtMax = rolls;
				}
				console.log("win");
			}
		}
	}
	document.getElementById("results").style.display = "block";
	document.getElementById("submitButton").innerText = "Play Again!";
	document.getElementById("start").innerText = bet;
	document.getElementById("rollsNum").innerText = rolls;
	document.getElementById("max").innerText = maxWon;
	document.getElementById("rollsAtMax").innerText = rollsAtMax;
	return false;
}