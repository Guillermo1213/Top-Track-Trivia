var correct = 0;
var incorrect = 0;
var unanswered = 0;
var question_timer;
var timer_running = false;
var continue_timer;
var user_answer;
var answer;
var questions = [{
    Question: "What is the stock HP of a BMW M4?",
    Option_1: "275",
    Option_2: "660 to 740",
    Option_3: "425 to 454",
    Answer: "425 to 454",
    Src: "'./assets/images/m4.jpg'",
    Info:"The answer is 425 to 454! Depending on trim of course. Don't even get me started on aftermarket possibilites 	\u1F609"
}, {
    Question: "What competition is a WRX likely to partake in?",
    Option_1: "Formula 1",
    Option_2: "Rally Racing",
    Option_3: "NASCAR",
    Answer: "Rally Racing",
    Src: "'./assets/images/wrx.jpg'",
    Info:"The car has a long lineage of both street and showcar presentations, but most adventerously, it's Symmetrical AWD makes it perfect for ripping through curves in any condition!"
}, {
    Question: "What's the liter size engine on the 2015 Genesis Coupe?",
    Option_1: "3.8L",
    Option_2: "2.0L",
    Option_3: "All of the above",
    Answer: "All of the above",
    Src: "'./assets/images/genny.jpg'",
    Info:"Trick question, how can it be both? They've given the option to the public! A 2.0 with a melodic turbo, or a 3.8 for those who just want to grip the road with power."
}, {
    Question: "Which is the most expensive?",
    Option_1: "Porsche 911 GT3-R",
    Option_2: "Nissan Nismo GTR",
    Option_3: "Mercedez AMG GT-R",
    Answer: "Porsche 911 GT3-R",
    Src: "'./assets/images/911.jpg'",
    Info:"Get ready for this.. Starting at $187,500, the Porsche comes out on top, but really they're all within the same price range.."
}, {
    Question: "How is the boost shot from a turbocharger measured?",
    Option_1: "PSI",
    Option_2: "Watts",
    Option_3: "Torque",
    Answer: "PSI",
    Src: "'./assets/images/psi.jpg'",
    Info:"Coming through that beautiful little turbine, the air being sent to the cars cylinders is meausered in Pounds per Square Inch. "
}, {
    Question: "Wheels pointing left.. Car turning right.. What's happening?",
    Option_1: "Kickflip",
    Option_2: "Normal Turn",
    Option_3: "Drifting",
    Answer: "Drifting",
    Src: "'./assets/images/doc.jpg'",
    Info:"Whether you do it yourself, you're watching Tokyo Drift or even in Disney's Cars.. Doc Hudson explains to Lightning McQueen 'If you're going hard enough left, you'll find yourself going right."
}, {
    Question: "Which of these is the quickest among the others?",
    Option_1: "Tesla Model X P100D",
    Option_2: "Lamborghini Urus",
    Option_3: "Jeep Grand Cherokee Trackhawk",
    Answer: "Tesla Model X P100D",
    Src: "'./assets/images/tesla.jpg'",
    Info:"Aside from its much lighter weight in comparison to the runner ups; The Tesla Model X has an electric powertrain, eliminating the possibility of lag in a mechanical engine"
}, {
    Question: "Which of these has the highest HP?",
    Option_1: "Cadillac CTS-V",
    Option_2: "Lexus RC-F",
    Option_3: "Dodge Demon",
    Answer: "Dodge Demon",
    Src: "'./assets/images/demon.jpg'",
    Info:"Not too old of a release, the Dodge Demon blew enthusiasts away by having the most powerful V8 engine ever mass produced with a stock HP of 840!"
}];
var random_question = questions[Math.floor(Math.random() * questions.length)];

function timer_ready(){
    if( timer_running === true){
        question_timer = setInterval(check_answer, 30000); 
    }
}

function generate(){
        $('#question').html('<h1>' + random_question.Question + '</h1>');
            
        $('#option_1').html('<h1>' + random_question.Option_1 + '</h1>');
            
        $('#option_2').html('<h1>' + random_question.Option_2 + '</h1>');
           
        $('#option_3').html('<h1>' + random_question.Option_3 + '</h1>');
        
        questions.splice($.inArray(random_question, questions),1);

        console.log(questions.length);
      
}

function check_answer(){
    if (question_timer === 0){
        clearInterval(question_timer);
        continue_timer = setInterval(check_answer, 30000);
//        //display out of time
$('#timer').replaceWith('<h1>Time is up!</h1>');
//        //display answer and why
$('')
//        //unanswered++
    } else {
        $('.option').on('click',function(){

        user_answer = $(this).text();
        console.log(user_answer);

            if(user_answer === answer){
                clearInterval(question_timer);
                continue_timer = setInterval(check_answer, 30000); 
                //        //display correct
                //        //disaplay why
                //        //correct++
            } else if (user_answer !== answer) {   clearInterval(question_timer);
                continue_timer = setInterval(check_answer, 30000); 
                //        //display wrong
                //        //display answer and why
                //        //wrong++
            }
        });
    }
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
        $('#hidden').attr('id', 'display');
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