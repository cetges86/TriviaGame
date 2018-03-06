$(document).ready(function () {

    //user clicks button to start game
    $('#start').click(function () {
        var song = new Audio('assets/images/Resonance - Home.mp3');
        song.play();
        //questions and answers, stored in an array full of objects
        $('#start').hide();
        var index = 0;
        var time = 16;
        var score = 0;
        //game displays a question with 4 answers

        function displayQuestion() {
            $('#message').empty();
            $('#gif').empty();
            $('#display').show();
            $('#question').html(data.questions[index].question);
            $('#answers').html('<button class="btn btn-info"><strong>A - </strong> ' + data.questions[index].answers.a + '</button><br>');
            $('#answers').append('<button class="btn btn-info"><strong>B - </strong> ' + data.questions[index].answers.b + '</button><br>');
            $('#answers').append('<button class="btn btn-info"><strong>C - </strong> ' + data.questions[index].answers.c + '</button><br>');
            $('#answers').append('<button class="btn btn-info"><strong>D - </strong> ' + data.questions[index].answers.d + '</button>');
            ready();
            //timer starts after question and answers are displayed
        };

        function startTimer() {
            time--;
            if (time === 0) {
                questionWrong();
            } else if (time <= 15) {
                $('#timer').html('<h3>Time Remaining: ' + time + '</h3>');
            } else if (time <= 0) {
                $('#timer').hide();
            }
        };

        //user clicks on answer
        function ready() {
            $('button').click(function (event) {
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
            $('#display').hide();
            $('#message').html('<h1>You are correct! Way to know stuff!</h1>');
            displayGif();
            score++;
            index++;
            if (index >= data.questions.length) {
                clearInterval(startTimer);
                $('#timer').hide();
                setTimeout(gameOver, 5000);
            } else {
                setTimeout(displayQuestion, 5000);
                time = 21;
            };
        };

        function questionWrong() {
            $('#timer').empty();
            $('#display').hide();
            $('#message').html('<h1>Oh no! The correct answer was: </h1><h2>' + data.questions[index].correct + '</h2>');
            displayGif();
            index++;
            if (index >= data.questions.length) {
                clearInterval(startTimer);
                $('#timer').hide();
                setTimeout(gameOver,5000);
            } else {
                setTimeout(displayQuestion, 5000);
                time = 21;
            };
        };

        function gameOver() {
            var finalScore = ((score / data.questions.length) * 100).toFixed(2);
            $('#question').empty();
            $('#answers').empty();
            $('#timer').empty();
            clearInterval(startTimer);
            $('#gif').html(data.gifs[10]);
            $('#message').html(`<h1>Your final score was: ${score} out of ${data.questions.length}, or ${finalScore} %</h1>`);
            if (parseInt(finalScore) >= 70){
            setTimeout(bonus,5000);
            }
            return;
        }

        function displayGif() {
            $('#gif').html(data.gifs[index]);
        };

        function bonus(){
            $('#message').html(`<h1>Whoa! What a great score! Time to celebrate!</h1>`);
            song.pause();
            $('#gif').html(data.gifs[11]);
        }

        displayQuestion();
        if (index < data.questions.length) {
            setInterval(startTimer, 1000);
        }
    });
});
