function check(){
 
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("Respuesta en minusculas = " + answer)
    if(answer == word )
    {

  if(answer_turn == "player1")
  {
  player1_score = player1_score +1;
  document.getElementById("player_score").innerHTML = player1_score

  }


  else
  {
  player2_score = player2_score +1;
  document.getElementById("player_score").innerHTML = player2_score

  }



  if(question_turn == "player1")
  {
  question_turn ="player2"
  document.getElementById("player_question").innerHTML = "turno para preguntar" + player2_name;

  }


  else
  {
    
    question_turn ="player1"
    document.getElementById("player_question").innerHTML = "turno para preguntar" + player1_name;



    document.getElementById("output").innerHTML ="";
  }










    }

}