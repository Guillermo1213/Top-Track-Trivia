var correct = 0;
var incorrect = 0;
var unanswered = 0;
var question_timer
var timer_running = false;
var user_answer;
var answer;
var questions = [{
    Question: "What is the stock HP of a BMW M4?",
    Option_1: "275",
    Option_2: "854",
    Option_3: "550",
    Answer: "550"
}, {
    Question: "What competition is a WRX likely to partake in?",
    Option_1: "Formula 1",
    Option_2: "Rally Racing",
    Option_3: "NASCAR",
    Answer: "Rally Racing"
}, {
    Question: "What's the liter size engine on the 2015 Genesis Coupe?",
    Option_1: "3.8L",
    Option_2: "2.0L",
    Option_3: "All of the above",
    Answer: "All of the above"
}, {
    Question: "Which is the most expensive?",
    Option_1: "Porsche 911 GT3-R",
    Option_2: "Nissan Nismo GTR",
    Option_3: "Mercedez AMG GT-R",
    Answer: "Porsche 911 GT3-R"
}, {
    Question: "How is the boost shot from a turbocharger measured?",
    Option_1: "PSI",
    Option_2: "Watts",
    Option_3: "Torque",
    Answer: "PSI"
}, {
    Question: "Wheels pointing right.. Car turning left.. What's happening?",
    Option_1: "Kickflip",
    Option_2: "Normal Turn",
    Option_3: "Drifting",
    Answer: "Drifting"
}, {
    Question: "Which of these is the fastest among the others?",
    Option_1: "Tesla Model X P100D",
    Option_2: "Lamborghini Urus",
    Option_3: "Jeep Grand Cherokee Trackhawk",
    Answer: "Tesla Model X P100D"
}, {
    Question: "Which of these has the highest HP?",
    Option_1: "Cadillac CTS-V",
    Option_2: "Lexus RC-F",
    Option_3: "Dodge Demon",
    Answer: "Dodge Demon"
}];
var random_question = questions[Math.floor(Math.random() * questions.length)];

function timer_ready(){
    if( timer_running === true){
        question_timer = setInterval(check_answer, 30000); 
    }
}

function generate(){
        //start question_timer

        $('#question').html('<h1>' + random_question.Question + '</h1>');
            
        $('#option_1').html('<h1>' + random_question.Option_1 + '</h1>');
            
        $('#option_2').html('<h1>' + random_question.Option_2 + '</h1>');
           
        $('#option_3').html('<h1>' + random_question.Option_3 + '</h1>');
        
        questions.splice($.inArray(random_question, questions),1);

        console.log(questions.length);
      
}

function check_answer(){
    $('.option').on('click',function(){
        //register user_answer with .text(click event)
    if(user_answer === answer){
       //stop Question_timer
       //start Continue_timer
       //display correct
       //disaplay why
       //correct++
   } else if (user_answer !== answer) {
       //stop Question_timer
       //start Continue_timer
       //display wrong
       //display answer and why
       //wrong++
   } else if (question_timer === 0){
       //start continue_timer
       //display out of time
       //display answer and why
       //unanswered++
   });
}

function highlight(){
    $(".tile").hover(function(){
        $(this).attr("class", "hover_on");
        }, function(){
        $(this).attr("class", "hover_off");
      });
}

function begin(){
    highlight();
    console.log(questions.length);
    $('#start').on('click', function(){
        $('#start').empty();
        $('#pre_start').attr('id', 'post_start');
        generate();
        timer_running = true;
    });
}

function next_question(){
    //when continue timer hits 0
    $('#question').replaceWith('<h1>' + random_question.Question + '</h1>');
            
    $('#option_1').replaceWith('<h1>' + random_question.Option_1 + '</h1>');
        
    $('#option_2').replaceWith('<h1>' + random_question.Option_2 + '</h1>');
       
    $('#option_3').replaceWith('<h1>' + random_question.Option_3 + '</h1>');
    
    questions.splice($.inArray(random_question, questions),1);

    console.log(questions.length);
}

begin();
timer_ready();
check_answer();
    //or continue_timer pulls up Next_question





