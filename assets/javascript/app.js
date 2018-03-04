$(document).ready(function () {

    //user clicks button to start game
    $('#start').click(function () {
        //questions and answers, stored in an array full of objects
        $('#start').html('');

        var index = 0;
        var time = 15;
        var score = 0;

        //game displays a question with 4 answers

        function displayQuestion() {
            $('#message').empty();
            $('#gif').empty();
            $('#question').html(data.questions[index].question);
            $('#answers').html('<li>A: ' + data.questions[index].answers.a + '</li><br>');
            $('#answers').append('<li>B: ' + data.questions[index].answers.b + '</li><br>');
            $('#answers').append('<li>C: ' + data.questions[index].answers.c + '</li><br>');
            $('#answers').append('<li>D: ' + data.questions[index].answers.d + '</li>');
            ready();
            //timer starts after question and answers are displayed
        };

        function startTimer() {
            time--;
            if (time === 0) {
                questionWrong();
            } else if (time <= 15) {
                $('#timer').html('<h3>Time Remaining: ' + time + '</h3>');
            } else if (time < 0) {
                $('#timer').hide();
            }
        };

        //user clicks on answer
        function ready() {
            $('li').click(function (event) {
                var userAnswer = event.target.textContent;
                if (userAnswer === data.questions[index].correct) {
                    questionRight();
                } else {
                    questionWrong();
                }
            })
        };

        //if right, display you are correct message and add to score
        function questionRight() {
            $('#timer').empty();
            $('#message').html('<h1>You are correct!</h1>');
            displayGif();
            score++;
            index++;
            if (index >= data.questions.length) {
                setTimeout(gameOver, 5000);
            } else {
                setTimeout(displayQuestion, 5000);
                time = 20;
            };
        };

        function questionWrong() {
            $('#timer').hide();
            $('#message').html('<h1>Sorry! The correct answer was: </h1><br><h2>' + data.questions[index].correct + '</h2>');
            displayGif();
            index++;
            if (index >= data.questions.length) {
                gameOver(score);
            } else {
                setTimeout(displayQuestion, 5000);
                time = 20;
            };
        };

        function gameOver() {
            var finalScore = ((score / 7) * 100).toFixed(2);
            $('#question').empty();
            $('#answers').empty();
            $('#timer').empty();
            clearInterval(startTimer);
            $('#gif').html(data.gifs[7]);
            $('#message').html(`<h1>Your final score was: ${score} out of 7, or ${finalScore} %</h1>`)

        }

        function displayGif() {
            $('#gif').html(data.gifs[index]);
        };

        displayQuestion();
        if (index < data.questions.length) {
            setInterval(startTimer, 1000);
        }






        //if wrong, display you are wrong and correct answer, no change to score or deduct score

        //if user doesn't click on anything, display same thing as above, maybe tweaking the message to reflect that they ran out of time

        //this loop runs until there are no more questions
    });
});
