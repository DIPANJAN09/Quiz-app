class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    title.hide();
    input1.hide();
    input2.hide();
    button.hide();
    


    //write code to change the background color here
   
    

    //write code to show a heading for showing the result of Quiz
    textSize(30);
    text("Result of the Quiz",350,0);

    //call getContestantInfo( ) here
    if(allContestants!=undefined){
      fill("blue");
      textSife(20);
      text("NOTE: The contestant who answered correct their name is highlighted in green color",130,230);
    }


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    for(plr in allContestants){
      var correctAnswer="2";
      if(correctAnswer === allContestants[plr].answer){
        fill("Green");
      }
      else {
        fill("red");
      }
    }
    
  }

}
