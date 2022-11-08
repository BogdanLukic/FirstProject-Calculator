// Toggle
var selectedToggle = 0;
function moveToggle(x)
{
	selectedToggle++;
	if(selectedToggle == 3)
		selectedToggle = 0;
	switch(selectedToggle)
	{
		case 0:
			x.style.setProperty('left','10%');
			document.documentElement.style.setProperty('--backgrounColor','#434A59');
			document.documentElement.style.setProperty('--mainDropShadow','drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))');

			document.documentElement.style.setProperty('--hederTextColor','white');
			document.documentElement.style.setProperty('--hederTogglePlace','#242D44');

			document.documentElement.style.setProperty('--cursorColor','#D03F2F');
			document.documentElement.style.setProperty('--cursorColorHover','#F96B5B');

			document.documentElement.style.setProperty('--resultField','#181F33');
			document.documentElement.style.setProperty('--resultText','#FFFFFF');

			document.documentElement.style.setProperty('--buttonsField','#242D44');

			document.documentElement.style.setProperty('--buttons','#EAE3DC');
			document.documentElement.style.setProperty('--buttonsShadow','inset 0px -4px 0px #B3A497');
			document.documentElement.style.setProperty('--buttonsText','#434A59');
			document.documentElement.style.setProperty('--buttonsHover','#FFFFFE');

			document.documentElement.style.setProperty('--buttonsSpecialText','#FFFFFF');

			document.documentElement.style.setProperty('--buttonReset','#647198');
			document.documentElement.style.setProperty('--buttonResetShadow','inset 0px -4px 0px #414E73');
			document.documentElement.style.setProperty('--buttonResetHovar','#A2B2E1');

			document.documentElement.style.setProperty('--buttonEqual','#D03F2F');
			document.documentElement.style.setProperty('--buttonEqualShadow','inset 0px -4px 0px #93261A');
			document.documentElement.style.setProperty('--buttonEqualHover','#F96B5B');

			document.documentElement.style.setProperty('--buttonDelete','#647198');
			document.documentElement.style.setProperty('--buttonDeleteShadow','inset 0px -4px 0px #414E73');
			document.documentElement.style.setProperty('--buttonDeleteHover','#A2B2E1');
			break;
			
		case 1:
			x.style.setProperty('left','40%');
			document.documentElement.style.setProperty('--backgrounColor','#E6E6E6');
			document.documentElement.style.setProperty('--mainDropShadow','none');

			document.documentElement.style.setProperty('--hederTextColor','#36362C');
			document.documentElement.style.setProperty('--hederTogglePlace','#D2CDCD');

			document.documentElement.style.setProperty('--cursorColor','#C85402');
			document.documentElement.style.setProperty('--cursorColorHover','#FF8A38');

			document.documentElement.style.setProperty('--resultField','#EEEEEE');
			document.documentElement.style.setProperty('--resultText','#36362C');

			document.documentElement.style.setProperty('--buttonsField','#D2CDCD');

			document.documentElement.style.setProperty('--buttons','#E5E4E1');
			document.documentElement.style.setProperty('--buttonsShadow','inset 0px -4px 0px #A79E91');
			document.documentElement.style.setProperty('--buttonsText','#36362C');
			document.documentElement.style.setProperty('--buttonsHover','#FFFFFF');

			document.documentElement.style.setProperty('--buttonsSpecialText','#FFFFFF');

			document.documentElement.style.setProperty('--buttonReset','#378187');
			document.documentElement.style.setProperty('--buttonResetShadow','inset 0px -4px 0px #1B6066');
			document.documentElement.style.setProperty('--buttonResetHovar','#62B5BC');

			document.documentElement.style.setProperty('--buttonEqual','#C85402');
			document.documentElement.style.setProperty('--buttonEqualShadow','inset 0px -4px 0px #873901');
			document.documentElement.style.setProperty('--buttonEqualHover','#FF8A38');

			document.documentElement.style.setProperty('--buttonDelete','#378187');
			document.documentElement.style.setProperty('--buttonDeleteShadow','inset 0px -4px 0px #1B6066');
			document.documentElement.style.setProperty('--buttonDeleteHover','#62B5BC');

			break;
		case 2:
			x.style.setProperty('left','70%');	
			document.documentElement.style.setProperty('--backgrounColor','#17062A');
			document.documentElement.style.setProperty('--mainDropShadow','none');

			document.documentElement.style.setProperty('--hederTextColor','#FFE53D');
			document.documentElement.style.setProperty('--hederTogglePlace','#1E0936');

			document.documentElement.style.setProperty('--cursorColor','#00DED0');
			document.documentElement.style.setProperty('--cursorColorHover','#93FFF8');

			document.documentElement.style.setProperty('--resultField','#1E0936');
			document.documentElement.style.setProperty('--resultText','#FFE53D');

			document.documentElement.style.setProperty('--buttonsField','#1E0936');

			document.documentElement.style.setProperty('--buttons','#331C4D');
			document.documentElement.style.setProperty('--buttonsShadow','inset 0px -4px 0px #881C9E');
			document.documentElement.style.setProperty('--buttonsText','#FFE53D');
			document.documentElement.style.setProperty('--buttonsHover','#6C34AC');

			document.documentElement.style.setProperty('--buttonsSpecialText','#FFFFFF');

			document.documentElement.style.setProperty('--buttonReset','#56077C');
			document.documentElement.style.setProperty('--buttonResetShadow','inset 0px -4px 0px #BE15F4');
			document.documentElement.style.setProperty('--buttonResetHovar','#8631AF');

			document.documentElement.style.setProperty('--buttonEqual','#00DED0');
			document.documentElement.style.setProperty('--buttonEqualShadow','inset 0px -4px 0px #6CF9F1');
			document.documentElement.style.setProperty('--buttonEqualHover','#93FFF8');

			document.documentElement.style.setProperty('--buttonDelete','#56077C');
			document.documentElement.style.setProperty('--buttonDeleteShadow','inset 0px -4px 0px #BE15F4');
			document.documentElement.style.setProperty('--buttonDeleteHover','#8631AF');
	}
    

}

// ENGINE

function is_num(character)
{
	return !isNaN(parseFloat(character))
}

function is_operation(character)
{
	return character=="+" || character=="-" || character=="x" || character=="/";
}

var expression = [];
var expressionText="";

var ind = -1;	// -1=nema decimale 1=ima decimale
var decimalVal = 0;
var degree = 0;

var first = -1;
var temp;

function print(character)
{
	document.querySelector('#result').innerHTML+=character;
}

function engine(x)
{
	character = x.innerHTML;

	if(expression.length == 0 && character == "-")
	{
		first*=-1;
		expressionText+="-";
		print("-");
		return;
	}	
	if(first==1 && expression.length == 0)
	{
		expression.push(parseFloat(character)*-1);
		expressionText+=character;
		print(character);
		return;
	}

	if(is_operation(character))
	{	
		//dodaj decimale prethodniku
		if(ind > 0)
		{
			decimalVal = decimalVal /  Math.pow(10,degree);
			if(is_num(expression[expression.length - 1]))
				expression[expression.length - 1] = expression[expression.length-1] + decimalVal;
			else
				expression.push(decimalVal);
		}
		ind = -1; 	//sigurno nema decimale
		decimal = 0;
		degree = 0;
		expression.push(character);
		expressionText+=character;
		print(character);
	}
	else if(is_num(character) || character == ".")
	{
		if(character != "." && ind < 0 )	//normalno upisivanje u array
		{
			if(is_num(expression[expression.length-1]))
				expression[expression.length-1]= expression[expression.length-1]* 10 + parseFloat(character);
			else
				expression.push(parseFloat(character));
		}
		else if(character != "." && ind > 0) //pamti pa dodaj u array zbog decimala
		{
			decimalVal=decimalVal*10 + parseFloat(character);
			degree++;
		}
		else
		{
			ind *= -1;
			if(! is_num(expression[expression.length - 1]))
				print("0");
		}
		expressionText+=character;
		print(character);
	}
}

function setTemp()
{
	temp = [];
	for(var i=0;i<expression.length;i++)
	{
		if(is_num(expression[i]))
			temp.push(1);
		else if(is_operation(expression[i]))
			temp.push(0);
	}
	return temp;
}

function solving()
{

	// ako je poslednji broj bio decimalan
	if(ind > 0)
	{
		decimalVal = decimalVal /  Math.pow(10,degree);
		if(is_num(expression[expression.length - 1]))
			expression[expression.length - 1] = expression[expression.length-1] + decimalVal;
		else
			expression.push(decimalVal);

		ind = -1; 	//sigurno nema decimale
		decimal = 0;
		degree = 0;
	}

	resultField = document.querySelector('#result');
	result = 0;
	temp = setTemp();	//koje brojeve mozes da uzimas za sabiranje ili oduzimanje -1=ne 0 znak 1=da

	console.log(expression);

	// x /
	for(var i=0;i<expression.length;i++)
	{
		el = expression[i];
		switch(el)	
		{
			case "x":
					result = result + expression[i-1]*expression[i+1];
					temp[i-1] = -1;	//neKoristi
					temp[i+1] = -1; //neKoristi
					while(expression[i+2] == "x" || expression[i+2] == "/")
					{
						if(expression[i+2] == "x")
						{
							i = i+2;	//znak
							result = result * expression[i+1];
							temp[i+1] = -1;
						}
						else if(expression[i+2] == "/")
						{
							i = i+2;
							result = result / expression[i+1];
							temp[i+1] = -1;
						}
					}
				break;
			case "/":
				result = result + expression[i-1]/expression[i+1];
				temp[i-1] = -1;	//neKoristi
				temp[i+1] = -1; //neKoristi
					while(expression[i+2] == "x" || expression[i+2] == "/")
					{
						if(expression[i+2] == "x")
						{
							i = i+2;	//znak
							result = result * expression[i+1];
							temp[i+1] = -1;
						}
						else if(expression[i+2] == "/")
						{
							i = i+2;
							result = result / expression[i+1];
							temp[i+1] = -1;
						}
					}
				break;

		}
	}

	for(var i=0;i<expression.length;i++)
	{
		el = expression[i];
		if(el=="+")
		{
			if(temp[i-1]==1)
			{
				result+=expression[i-1];
				temp[i-1] = -1;


			}
			if(temp[i+1]==1)
			{
				result+=expression[i+1];
				temp[i+1] = -1;

			}
		}
		else if(el=="-")
		{
			if(temp[i-1]==1)
			{
				if(expression[i-1] < 0)
					result-=expression[i-1];
				else
					result+=expression[i-1];
				temp[i-1] = -1;
			}
			if(temp[i+1]==1)
			{
				result-=expression[i+1];
				temp[i+1] = -1;
			}
		}

	}
	resultField.innerHTML = result.toFixed(2);
}

// RESET

function reset()
{
	expression = [];
	expressionText="";
	ind = -1;	
	decimalVal = 0;
	degree = 0;
	first = -1;
	document.querySelector('#result').innerHTML = "";
	console.log("restartovao" + expressionText);

}

//DELETE
function delLast(x)
{
	temp = "";
	for(var i=0;i<x.length-1;i++)
	{
		temp+=x[i];
	}
	return temp;
}

function deleteCharacter()
{
	// resultField
	obrisi = expressionText.length - 1;
	if(expressionText[obrisi]!=".")
		expressionText = delLast(expressionText);
	document.querySelector('#result').innerHTML = expressionText;
	// engine
	// expression.pop();	//uklanjanje poslenjeg
	
	console.log(expression);
	console.log(expressionText);

	obrisi = expression.length - 1;

	if(first == 1 && obrisi>0)
	{
		expression.pop();
		first = -1;
	}	
	else if(ind > 0)	//znaci da ima decimale broj
	{
		decimalVal = Math.round(decimalVal / 10);
		degree--;
		if(degree == 0)
		{
			ind = -1;
			decimalVal = 0;
		}	
		console.log("DUPLO");
	}
	else if(expressionText[expressionText.length - 1]==".")
	{
		expressionText = delLast(expressionText);
	}
	else
	{
		expression.pop();
		console.log("USO");
	}
}
