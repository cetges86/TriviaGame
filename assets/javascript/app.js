$(document).ready(function () {

    //user clicks button to start game
    $('#start').click(function () {
        //questions and answers, stored in an array full of objects
        $('#start').html('');

        var time = 15;
        var index = 0;

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

        //game displays a question with 4 answers
        var countdown = setInterval(timer, 1000);

        function displayQuestion() {
            $('#message').html('')
            $('#question').html(quizQuestions[index].question);
            $('#answers').html('<li>A: ' + quizQuestions[index].answers.a + '</li><br>');
            $('#answers').append('<li>B: ' + quizQuestions[index].answers.b + '</li><br>');
            $('#answers').append('<li>C: ' + quizQuestions[index].answers.c + '</li><br>');
            $('#answers').append('<li>D: ' + quizQuestions[index].answers.d + '</li>');
            ready();
            
            //timer starts after question and answers are displayed
        };

        function timer() {
            time--;
            $('#timer').html('<h3>' + time + '</h3>');
            if (time === 0) {
                questionWrong();
                time = 15;
            };
        };

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

        function questionRight() {
            $('#message').html('<h1>You are correct!</h1>')
            index++;
            clearInterval(countdown);
            setTimeout(displayQuestion, 2000);
            time = 15;
        }

        function questionWrong() {
            $('#message').html('<h1>Sorry! The correct answer was: </h1><br><h2>' + quizQuestions[index].correct + '</h2>');
            index++;
            clearInterval(countdown);
            setTimeout(displayQuestion, 2000);
            time = 15;
        }



        displayQuestion();





        //user clicks on answer
        //if right, display you are correct message and add to score

        //if wrong, display you are wrong and correct answer, no change to score or deduct score

        //if user doesn't click on anything, display same thing as above, maybe tweaking the message to reflect that they ran out of time

        //this loop runs until there are no more questions
    });
});
