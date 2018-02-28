$(document).ready(function () {

    //user clicks button to start game
    $('#start').click(function () {
        //questions and answers, stored in an array full of objects

        var quizQuestions = [
            {
                question:'What is the longest bone in the human body?',
                answers: {
                    a:'Humerus',
                    b:'Tibia',
                    c:'Femur',
                    d:'Clavicle'
                },
                correct:'Femur',
            },
            {
                question:'How many types of photoreceptors are present in your retinas, and what are they called?',
                answers: {
                    a:'Two - Rods and Cones',
                    b:'Three - Color, Black and White, and Light',
                    c:'Two - Spheroid and Cynlidrical',
                    d:'One - Light'
                },
                correct:'Two - Rods and Cones',
            },
            {
                question:'Which lobe (region) of your brain is responsible for complex thinking and problem solving?',
                answers: {
                    a:'Occipital Lobe',
                    b:'Temporal Lobe',
                    c:'Parietal Lobe',
                    d:'Frontal Lobe'
                },
                correct:'Frontal Lobe',
            },
        ]

        console.log(quizQuestions[0].question);
        console.log(quizQuestions[0].answers.d);

        console.log(quizQuestions[1].question);
        console.log(quizQuestions[1].correct);

        

        //game displays a question with 4 answers

        //questions are stored in an array of objects, each object will have the question and the associated answers

        //timer starts after question and answers are displayed

        //user clicks on answer
        //if right, display you are correct message and add to score

        //if wrong, display you are wrong and correct answer, no change to score or deduct score

        //if user doesn't click on anything, display same thing as above, maybe tweaking the message to reflect that they ran out of time

        //this loop runs until there are no more questions
    });
});