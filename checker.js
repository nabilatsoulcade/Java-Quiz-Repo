function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var correct = 0;


	if (question1 == "Answer 4") {
		correct++;
}
	if (question2 == "Answer 3") {
		correct++;
}
	if (question3 == "Answer 1") {
		correct++;
	}

	if (question4 == "Answer 1") {
		correct++;
	}

	if (question5 == "Answer 2") {
		correct++;
	}

	if (question6 == "Answer 4") {
		correct++;
	}

	if (question7 == "Answer 2") {
		correct++;
	}

	if (question8 == "Answer 4") {
		correct++;
	}

	if (question9 == "Answer 2") {
		correct++;
	}

	if (question10 == "Answer 2") {
		correct++;
	}

	var pictures = ["img/win.gif", "img/meh.gif", "img/lose.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 9) {
		score = 1;
	}

	if (correct == 10) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
