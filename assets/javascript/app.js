$(document).ready(function () {

    //user clicks button to start game
    $('#start').click(function () {
        //questions and answers, stored in an array full of objects

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
        function displayQuestion() {
            var answered = false;
            if (!answered) {
                for (var i = 0; i < quizQuestions.length; i++) {
                    $('#question').html(quizQuestions[i].question);
                    $('#answers').html('<li>A: ' + quizQuestions[i].answers.a + '</li><br>');
                    $('#answers').append('<li>B: ' + quizQuestions[i].answers.b + '</li><br>');
                    $('#answers').append('<li>C: ' + quizQuestions[i].answers.c + '</li><br>');
                    $('#answers').append('<li>D: ' + quizQuestions[i].answers.d + '</li>');

                    $('li').click(function (event) {
                        var userAnswer = event.target.textContent;
                        answered = true;
                        console.log(quizQuestions[i]);
                        console.log(userAnswer);
                        if (userAnswer === quizQuestions[i].correct) {

                            $('#message').html('<h1>You are correct!</h1>')
                        } else {
                            $('#message').html('<h1>Sorry! The correct answer was: </h1><br><h2>' + quizQuestions[i].correct + '</h2>');
                        }
                    })


                };
            };
        };


        displayQuestion();
    });


    //timer starts after question and answers are displayed

    //user clicks on answer
    //if right, display you are correct message and add to score

    //if wrong, display you are wrong and correct answer, no change to score or deduct score

    //if user doesn't click on anything, display same thing as above, maybe tweaking the message to reflect that they ran out of time

    //this loop runs until there are no more questions
});
