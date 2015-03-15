/* Javscript QUiz app */
'use strict';

var quiz = [{
            question: 1,
            imageUrl: 'images/london.jpg',
            options: ['Paris', 'London', 'Manchester'],
            answer: 'London',
            intro: 'This famous bridge is a key landmark on the River Thames.',
            hint: 'A city renowned for its financial centre and diverse architecture.',
            info: 'The Tower bridge was built due to increased commercial development in the East End of London led to a requirement for a new river crossing downstream of London Bridge. A traditional fixed bridge could not be built because it would cut off access by tall-masted ships to the port facilities in the Pool of London, between London Bridge and the Tower of London.'
            }, {
            question: 2,
            imageUrl: 'images/milan.jpg',
            options: ['Rome', 'Milan', 'Pisa'],
            answer: 'Milan',
            intro: 'This city is renowned as a center of fashion and design.',
            hint: 'This famous castle was well-known for its knights jousted and soldiers marched up and down. Da Vinci\'s huge clay horse statue stood here, until the French soldiers used it for target practice.',
            info: 'A centerpiece of Italian history in Milan, Sforza Castle has gates and moats from the medieval city, inner and outer walls, circular towers, courtyards for kids to explore. The first fortress was built by Viscontis in the 14th century.'
            }, {
            question: 3,
            imageUrl: 'images/barcelona.jpg',
            options: ['Barcelona', 'Madrid', 'Seville'],
            answer: 'Barcelona',
            intro: 'This spanish city\'s architecture and park make it one of Europe\'s major tourist destination.',
            hint: 'The focal point of the park is the main terrace, surrounded by a long bench in the form of a sea serpent. The curves of the serpent bench form a number of enclaves, creating a more social atmosphere.',
            info: 'Park Güell overlooks the city of Barcelona. It is the reflexion of Antoni Gaudí\'s artistic plenitude, which belongs to his naturalist phase (first decade of the 20th century). During this period, the architect perfected his personal style through inspiration from organic shapes found in nature.'
            }, {
            question: 4,
            imageUrl: 'images/paris.jpg',
            options: ['Geneva', 'Paris', 'Marseille'],
            answer: 'Paris',
            intro: 'Probably the most known city outside of Europe well renowned for its art museum and cuisine.',
            hint: 'As one of the most iconic structures in the world, this tower has-been the inspiration for the establishment of at least 12 replicas of a quarter or larger scale as itemized here and There are more than 40 duplicates and similar towers of various scales around the world.',
            info: 'Eiffel Tower is a central attraction in Paris, it served as the entrance arch to the 1889 World\'s Fair, it was initially criticised by some of France\'s leading artists and intellectuals for its design, but has become both a global cultural icon of France and one of the most recognizable structures in the world. The tower is the tallest structure in Paris and the most-visited paid monument in the world.'
            }, {
            question: 5,
            imageUrl: 'images/copenhagen.jpg',
            options: ['Copenahgen', 'Stockholm', 'Amsterdam'],
            answer: 'Copenahgen',
            intro: 'This city is connected to Sweden by the Øresund Bridge.',
            hint: 'Hans Christian Andersen used to live in no. 20. This is where he wrote the fairy-tales \'the Tinder-Box\', \'Little Claus and Big Claus\', and \'the Princess and the Pea\'. He also lived twenty years in no. 67 and two years in no. 18.',
            info: 'Nyhavn is a famous Copenhagen canal. Stretching from Kongens Nytorv to the harbour front just south of the Royal Playhouse, it is lined by brightly coloured 17th and early 18th century townhouses and bars, cafes and restaurants.'
            }, {
            question: 6,
            imageUrl: 'images/berlin.jpg',
            options: ['Berlin', 'Frankfurt', 'Munich'],
            answer: 'Berlin',
            intro: 'This metropolis experienced its heyday as a major world capital and was known for its leadership roles in science, the humanities and industries. Albert Einstein rose to public prominence during his years here, being awarded the Nobel Prize for Physics in 1921.',
            hint: 'This city was devastated by bombing raids during World War II, and many of the buildings that had remained after the war were demolished in the 1950s and 1960s. After world War II the city was split in two a democratically-ruled West and a communist-governed East.',
            info: 'The Industrial Revolution transformed Berlin during the 19th century as the city\'s economy and population expanded dramatically, and it became the main railway hub and economic centre of Germany. In 1871, Berlin became capital of the newly founded German Empire.'
            }, {
            question: 7,
            imageUrl: 'images/geneva.jpg',
            options: ['Basel', 'Zurich', 'Geneva'],
            answer: 'Geneva',
            intro: 'The s the second most populous city in Switzerland and probably the best-known French-speaking region.',
            hint: 'This city is a global centre for financial institutions, and worldwide center for diplomacy due to the presence of numerous international organizations, including the headquarters of many of the agencies of the United Nations and the Red Cross.',
            info: 'Geneva is located at the south-western end of Lake Geneva, where the lake flows back into the Rhône River. It is surrounded by two mountain chains, the Alps and the Jura.'
            }, {
            question: 8,
            imageUrl: 'images/venice.jpg',
            options: ['Amsterdam', 'Zurich', 'Venice'],
            answer: 'Venice',
            intro: 'Originally this city started as a republic state renowned as an important center of commerce, especially silk, grain, and spice from the Middle and Far East.',
            hint: 'Desribed as the undoubtedly the most beautiful city built by man, often referred to as being one of Europe\'s most romantic cities.',
            info: 'Venice is spread across a group of 117 small islands separated by canals and linked by bridges. Venice is renowned for the beauty of its setting, its architecture, and its artworks. The city in its entirety is listed as a World Heritage Site, along with its lagoon.'
            }, {
            question: 9,
            imageUrl: 'images/success.jpg',
            intro: 'You have shown good knowledge of various European landmarks.'
            }
];

$(document).on('ready', function() {

var questionNumber = 0;
var counter = 1;
var $intro = $('.intro');
var itemOptions = [$("#optionOne"), $("#optionTwo"), $('#optionThree')];
var $optionsDiv = $('.options');
var $footer = $('footer');
var $optionColor = $('input').find('.option');
var $startButton =  $('.start-button');
var currentCount = function() {
    return counter + '/' + (quiz.length - 2);
};
var $finalCount = $('.score').text(currentCount);
var $finalMessage = $('<div class=\'#optionFinal\'><p>You completed the quiz</p><p>Your score was <span class=\'score\'>' + $finalCount + '</span></p></div>');

function createQuizOptions(questionNumber) {
  $optionsDiv.show();
  for (var i = 0; i < 3; i++) {
  $optionsDiv.find(itemOptions[i]).val(quiz[questionNumber].options[i]);
  }
}

function createQuestion(questionNumber) {
    $intro.find('h1').text('Where is this landmark?');
    $intro.find('p').text('Choose one of these cities');
    $intro.css({background: 'url(' + quiz[questionNumber].imageUrl + '), no-repeat', 'background-size': 'cover', 'background-position' : '50% 75%'});
    createQuizOptions(questionNumber);
    $('.start-quiz').remove();
    $footer.find('h4').text('Here\'s a hint!');
    $footer.find('p').text(quiz[questionNumber].intro);
}

function countCorrectAnswers() {
    $footer.find('img').hide();
    $footer.find('.counter').css({'display' : 'block'});
    $('.count').text(currentCount);
}

function rightAnswer() {
    $footer.find('h4').text('Well done it\'s correct');
    $footer.find('p').text(quiz[questionNumber - 1].info);
    $startButton.text('NEXT');
    $optionColor.addClass('correctClass');
    countCorrectAnswers();
    counter++;
    console.log('Correct');

    $startButton.on('click', function() {
    createQuestion(questionNumber);
    });
}

function wrongAnswer() {
    $footer.find('h4').text('Another hint');
    $footer.find('p').text(quiz[questionNumber].hint);
    $startButton.text('TRY AGAIN');
    $optionColor.addClass('wrongClass');
    console.log('Wrong');

    $startButton.on('click', function() {
        /*$startButton.setAttribute('disabled', 'disabled');*/
    })
}

function quizResult() {
    $intro.find('h1').text('Congratulations');
    $intro.find('p').remove();
    $intro.css({background: 'url(' + quiz[8].imageUrl + '), no-repeat', 'background-size': 'cover', 'background-position' : '50% 75%'});
    $optionsDiv.empty().append($finalMessage);
    $startButton.text('START QUIZ AGAIN');
    $footer.find('h4').text('Well done');
    $footer.find('p').text(quiz[8].intro);

    $startButton.on('click', function() {
        location.reload();
    });
}

$('input').on('click', function() {
        var input = $(this).val();
        console.log(input);
        console.log(questionNumber);

    if (input == quiz[questionNumber].answer) {
        if(questionNumber != 7) {
                questionNumber++;
                return rightAnswer();
            } else {
                return quizResult();
            }
        } else {
            return wrongAnswer();
        }
    });


  $('main').on('click', '.start-quiz', function() {
    createQuestion(questionNumber);
  });
});