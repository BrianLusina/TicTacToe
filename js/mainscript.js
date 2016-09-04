var playerTile = 'none';
var enemyTile = 'none';
var pPlays = [];
var cPlays = [];
var wins = [
	[1,2,3],
	[4,5,6],
		[7,8,9],
		[1,4,7],
		[2,5,8],
		[3,6,9],
		[3,5,7],
		[1,5,9],
		];
//initial start screen
//the computer is pretty dumb, you can win pretty often
$(document).ready(init);

function init(repopulate){
	if (repopulate == true){
		$('#1').html('<div class="cross"></div>').addClass('init');
		$('#5').html('<div class="">Select Tile</div>')
		$('#9').html('<div class="circle"></div>').addClass('init');
	}
	//start the click events
	$('.init').click(function(div){
		var select = this.id
		select == '9'? (playerTile = 'circle',enemyTile = 'cross')
		:(playerTile = 'cross',enemyTile = 'circle');
		$('.init').removeClass('init').off('click');
		console.log('player is '+playerTile+', enemy is '+enemyTile);
		clearScreen();
		setTimeout(game, 850, playerTile);
	});
}

function clearScreen(gameEnd){
	//fade out contents
	$('.row>*>*').fadeOut(600);
	//clear rows of click and read
	$('.row>*').removeClass('click').addClass('click');
	//clear contents of all boxes
	setTimeout(function(){$('.row>*').html('');},700);
	if (gameEnd == true){
		setTimeout(restart,900);
	}
	function restart(){
		cPlays = [];
		pPlays = [];
		$('.row>*').removeClass('click').off('click');
		init(true);
	}
}

function game(){
	//if player is circle, then they go second so call a game logic here.
	if(playerTile == 'circle'){
		logic();
	}
	//any clicks that are done are player draw turns and should call a game logic.
	$('.click').click(function(){
		draw('player',this,Number(this.id));
		logic();	
	});
}
function draw(entity,box,id){
	//all draws should draw the tile and then remove the click class
	var tile;
	//figure out who called the draw, push their play into their respective array.
	if(entity == 'player'){
		tile = playerTile;
		pPlays.push(id);
	}
	else{
		tile = enemyTile;
		cPlays.push(id);
	}
	var html = '<div class="'+tile+'"></div>';
	$(box).removeClass('click').addClass(entity).off('click');
	$(box).html(html);
}
//must implement game logic
function logic(){
	//player's play always gets checked first.
	//sort to reduce number of deviations
	pPlays.sort(); cPlays.sort();
	var played = pPlays.concat(cPlays);
	var cWinnable = canWin(pPlays);
	var pWinnable = canWin(cPlays);
	function canWin(other){
		return wins.filter(function(arr){
			return !arr.some(function(tile){
				return other.includes(tile);
			});
		});
	}

	(function optimal(winnable,plays){
		var selector;
		var play;
		var possible = winnable.filter(function(arr){
			return arr.some(function(tile){
				return plays.includes(tile);
			});
		});
		var close = (function(possible,plays){
			var play;
			possible.forEach(function(arr){
				var count = 0;
				var missing;
				arr.forEach(function(val){
					if(plays.includes(val))
						count++;
					else
						missing = val;
				});
				if (count == 2)
					play = missing;
			});
			return play;
		})(possible,plays)||false;

		if(close == false){
			var tiles = winnable.reduce(function(a,b){return a.concat(b);});
			var tc = {};
			tiles.forEach(function(val){
				if(!tc[val])
					tc[val] = 0;
				tc[val]++;
			});
			var count = 0;
			for(var num in tc){
				if(tc[num] > count && !played.includes(Number(num))){
					count = tc[num];
					play = Number(num);
				}
			}
		}
		else{
			play = close;
		}
		selector = '#'+play;
		draw('enemy',selector,play);
	})(cWinnable,cPlays);
	var winCheck = (function(){
		if(check(pPlays))
			return 'Player';
		else if(check(cPlays))
			return 'Computer';
		else
			return false;
	})();
	if(winCheck != false){
		endGame(winCheck);
	}
}
function check(arr){
	// ch is true or false, some tests all win arrays to find at least one that is true
	var ch = wins.some(function(v){
		//v == win[i] (each win condition), every tests to make sure all numbers match up with arr
		return v.every(function(v){
			//has to include all values
			return arr.includes(v);
		});
	});
	// if a win condition is found, endgame
	return ch;
}

function endGame(who){
	alert(who+' wins!');
	clearScreen(true);
}