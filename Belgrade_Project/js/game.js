window.onload = function () {

	//init stuff
	var mp3List = ['../sound/0.mp3','../sound/1.mp3','../sound/2.mp3','../sound/3.mp3','../sound/4.mp3','../sound/5.mp3','../sound/6.mp3','../sound/7.mp3','../sound/8.mp3','../sound/9.mp3'];
	var picList = ['../pics/0.jpg','../pics/1.jpg','../pics/2.jpg','../pics/3.jpg','../pics/4.jpg','../pics/5.jpg','../pics/6.jpg','../pics/7.jpg','../pics/8.jpg','../pics/9.jpg'];

	var keyCodeDict = [48,49,50,51,52,53,54,55,56,57]; // +48 for numPad Codes 
	//var numPadDict =  [96,97,98,99,100,101,102,103,104,105];
	var gameObjectList = [];
	var complete = false;

	for(var i = 0 ; i< mp3List.length ; i++){

		var obj = {};

		obj['mp3Path'] = mp3List[i];
		obj['picPath'] = picList[i];
		obj['keyCode'] = keyCodeDict[i];
		//obj['numPadCode'] = numPadDict[i];

		gameObjectList.push(obj);

	}
	//console.log(gameObjectList);

	var debug = document.getElementsByClassName("debug")[0];

	document.addEventListener("keydown",onNumPress);

	createGame(mp3List.length,gameObjectList);

	var numButtons = document.getElementsByClassName('numberButtons');
	//console.log(numButtons);
	for(var n = 0 ; n < numButtons.length; n++){

		numButtons[n].addEventListener('click',function(button){

			//console.log(button.srcElement.id);
			var id = button.srcElement.id;
			var numberID = id.replace('num','');
			document.getElementById('audio'+numberID).load();
			document.getElementById('audio'+numberID).play();

		});


	}


	var submitButton = document.getElementsByClassName("submitButton")[0];
	submitButton.addEventListener('click', submitAnswers);

	function onNumPress(event){


		//console.log(event.keyCode);
		//successfully checks if you're pressinga number or not

		for (var i = 0; i < keyCodeDict.length ; i++) {
			 if (event.keyCode == keyCodeDict[i]){

			 	//debug.innerHTML = "YOU'RE PRESSING A NUMBER";
			 	document.getElementById('audio'+i).load();
			 	document.getElementById('audio'+i).play();
			 	break;

			 }
			 else{

			 	//debug.innerHTML = "you're not pressing a number.";
			 	//document.getElementById('audio0').load();

			 }
		}



	}




function submitAnswers(){


	var textFields = document.getElementsByClassName('numInput');
	var wrongText = document.getElementsByClassName("wrongText")[0];
	var wrongFlag = false;
	var wrongCounter = 0;

	if(!complete){
		for(var n = 0 ; n < textFields.length; n++){

			if (textFields[n].value.charCodeAt(0) == textFields[n].id){

				continue



			}
			else{

				wrongFlag = true;
				wrongCounter++;

			}


		}

		if(wrongFlag){

			wrongText.innerHTML= wrongCounter + " of your answers are incorrect";
			//console.log('one of youre answers is wrong');

		}


		if(wrongFlag == false){

			//TODO
			//MAYBE WRITE SOME SHIT THAT SHOWS UP WHEN PEOPLE BEAT
			var gameIcons = document.getElementsByClassName("PicTextHolder");
			var length = gameIcons.length;
			var gameArea = document.getElementsByClassName("gameArea")[0];
		
			for(var index = 0 ; index < length; index++){
				gameArea.removeChild(document.getElementById(index));
				//gameArea.removeChild(gameIcons[index]);

			}

			var finalP = document.createElement('DIV');
			finalP.setAttribute("class","finalMessage");
			finalP.innerHTML = "Congratulations! You matched all the sounds to their objects. Which one was the hardest to guess? Leave some comments in the notebook if you'd like! Feel free to play around with the sounds. You can also use the numbers on the keyboard. (P.S the game will restart in 2 minutes)";
			//create a paragraph with a shit about my project
			
			gameArea.appendChild(finalP);
			var wrongText = document.getElementsByClassName('wrongText')[0];
			wrongText.innerHTML = '';
			setTimeout(function(){window.location.reload(true)},120000);
			complete = true;
		}



	}
}
function onWin(){




	
}



//i need a function that builds all the audio objects for the game
//i need a function that loads them all as well.
// i need to do a thing that stops everhthing until they are all completely loaded
// i need pictures and real sounds
//i need to make the page actually look nice
//

function createGame(numOfSounds,gameObjectList){

	var gameDiv = document.getElementsByClassName("gameArea")[0];
	var parentDiv = document.createElement('P');

	for(var n = 0 ; n < 10 ; n++){

		var numButton = document.createElement("DIV");
		numButton.setAttribute('class', 'numberButtons');
		
		if(n+1 > 9){
			numButton.innerHTML = '0';
			numButton.setAttribute('id','num0');

		}else{
			numButton.innerHTML = n+1;
			numButton.setAttribute('id','num'+(n+1));
		}
		parentDiv.appendChild(numButton);



	}

	gameDiv.appendChild(parentDiv);


	var objects = gameObjectList;

	for(var j = 0; j < gameObjectList.length;j++){

		var audioElement = document.createElement("AUDIO");
		audioElement.setAttribute('class', 'audioHolder');
		audioElement.setAttribute('id','audio'+j);
		var audioSource = document.createElement("SOURCE");
		audioSource.setAttribute("src",gameObjectList[j].mp3Path);
		audioElement.appendChild(audioSource);
		if(j == 9 || j==0){

			audioElement.volume = 0.4;

		}
		gameDiv.appendChild(audioElement);

	}

	j = 0;
	for (j = 0; j < numOfSounds ; j++){

		var random = Math.floor(Math.random() * (9 - j));
		//console.log("random: " + random);
		var poppedObject = objects.splice(random,1);
		//console.log(poppedObject[0]);
		//console.log("1".charCodeAt(0));
		var divHolder = document.createElement("DIV");
		divHolder.setAttribute('id', j);
		divHolder.setAttribute('class', 'PicTextHolder');


		var textField = document.createElement("SELECT");
		textField.setAttribute('class', 'numInput');
		textField.setAttribute('id', poppedObject[0].keyCode);
		for(var y = 0; y < 10; y++){

			var option = document.createElement("OPTION");
			if (y == 0){
				var defaultOption = document.createElement("OPTION");
				defaultOption.value = 10000;
				defaultOption.innerHTML = '---';
				textField.appendChild(defaultOption);

			}
			option.value = y;
			option.innerHTML = y;
			textField.appendChild(option);


		}

		var picHolder = document.createElement("DIV");
		picHolder.setAttribute('class','picHolder');
		picHolder.setAttribute('style','background-image: url("'+poppedObject[0].picPath + '")');

		

		divHolder.appendChild(picHolder);
		//console.log(picHolder);
		divHolder.appendChild(textField);
		gameDiv.appendChild(divHolder);
		

	}


}

};