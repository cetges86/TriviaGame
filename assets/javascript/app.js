$(document).ready(function () {

    //user clicks button to start game
    $('#start').click(function () {
        //questions and answers, stored in an array full of objects
        $('#start').html('');

        var index = 0;
        var time = 15;
        var score = 0;

        //questions are stored in an array of objects, each object will have the question and the associated answers
        var quizQuestions = [
            {
                question: 'What is the longest bone in the human body?',
                answers: {
                    a: 'Humerus',
                    b: 'Tibia',
                    c: 'Femur',
                    d: 'Clavicle'
                },
                correct: 'C: Femur',
            },
            {
                question: 'How many types of photoreceptors are present in your retinas, and what are they called?',
                answers: {
                    a: 'Two - Rods and Cones',
                    b: 'Three - Color, Black and White, and Light',
                    c: 'Two - Spheroid and Cylindrical',
                    d: 'One - Light'
                },
                correct: 'A: Two - Rods and Cones',
            },
            {
                question: 'Which lobe (region) of your brain is responsible for complex thinking and problem solving?',
                answers: {
                    a: 'Occipital Lobe',
                    b: 'Temporal Lobe',
                    c: 'Parietal Lobe',
                    d: 'Frontal Lobe'
                },
                correct: 'D: Frontal Lobe',
            },
            {
                question: 'In which area of the body would you find the scapula?',
                answers: {
                    a: 'Knee',
                    b: 'Shoulder',
                    c: 'Hand',
                    d: 'Thigh'
                },
                correct: 'B: Shoulder',
            },
            {
                question: 'What is the largest muscle in the human body?',
                answers: {
                    a: 'Pectoralis Major',
                    b: 'Gluteus Minimus',
                    c: 'Gastrocnemius',
                    d: 'Gluteus Maximus'
                },
                correct: 'D: Gluteus Maximus',
            },
            {
                question: 'What is the largest organ in the human body?',
                answers: {
                    a: 'Liver',
                    b: 'Skin',
                    c: 'Brain',
                    d: 'Small Intestine'
                },
                correct: 'B: Skin',
            },
            {
                question: 'What is the technical name for your kneecap?',
                answers: {
                    a: 'Radius',
                    b: 'Metatarsal',
                    c: 'Pelvis',
                    d: 'Patella'
                },
                correct: 'D: Patella',
            },
        ];

        var gifs = ['<iframe src="https://giphy.com/embed/GeWjRVP3UTXyM" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
    '<iframe src="https://giphy.com/embed/dNKdHoT6yUsBW" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>','<iframe src="https://giphy.com/embed/l41m04gr7tRet7Uas" width="480" height="323" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>','<iframe src="https://giphy.com/embed/xT39D3KZkwVt3npbAk" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>','<iframe src="https://giphy.com/embed/FBMOHoG4L5g4" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>','<iframe src="https://giphy.com/embed/3o6Mbd7jEEv2SbWoz6" width="480" height="368" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>','<iframe src="https://giphy.com/embed/y335xyKYQGrja" width="480" height="240" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>','<iframe src="https://giphy.com/embed/SIPIe590rx6iA" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>']

        //game displays a question with 4 answers

        function displayQuestion() {
            $('#message').empty();
            $('#gif').empty();
            $('#question').html(quizQuestions[index].question);
            $('#answers').html('<li>A: ' + quizQuestions[index].answers.a + '</li><br>');
            $('#answers').append('<li>B: ' + quizQuestions[index].answers.b + '</li><br>');
            $('#answers').append('<li>C: ' + quizQuestions[index].answers.c + '</li><br>');
            $('#answers').append('<li>D: ' + quizQuestions[index].answers.d + '</li>');
            ready();
            //timer starts after question and answers are displayed
        };

        function startTimer() {
            time--;
            if (time === 0) {
                questionWrong();
            } else if (time<=15){
                $('#timer').html('<h3>Time Remaining: ' + time + '</h3>');
            }
        };

        //user clicks on answer
        function ready() {
            $('li').click(function (event) {
                var userAnswer = event.target.textContent;
                if (userAnswer === quizQuestions[index].correct) {
                    questionRight();
                } else {
                    questionWrong();
                }
            })
        };

        //if right, display you are correct message and add to score
        function questionRight() {
            $('#message').html('<h1>You are correct!</h1>');
            displayGif();
            score++;
            index++;
            if (index >= quizQuestions.length) {
                setTimeout(gameOver, 5000);
            } else {
                setTimeout(displayQuestion, 5000);
                time = 20;
            };
        };

        function questionWrong() {
            $('#message').html('<h1>Sorry! The correct answer was: </h1><br><h2>' + quizQuestions[index].correct + '</h2>');
            displayGif();
            index++;
            if (index >= quizQuestions.length) {
                gameOver(score);
            } else {
                setTimeout(displayQuestion, 5000);
                time = 20;
            };
        };

        function gameOver(){
            var finalScore = ((score / 7) * 100).toFixed(2);
            $('#question').empty();
            $('#answers').empty();
            $('#timer').empty();
            clearInterval(startTimer);
            $('#gif').html(gifs[7]);
            $('#message').html(`<h1>Your final score was: ${score} out of 7, or ${finalScore} %</h1`)

        }

        function displayGif(){
            $('#gif').html(gifs[index]);
        };

        displayQuestion();
        setInterval(startTimer, 1000);







        //if wrong, display you are wrong and correct answer, no change to score or deduct score

        //if user doesn't click on anything, display same thing as above, maybe tweaking the message to reflect that they ran out of time

        //this loop runs until there are no more questions
    });
});
