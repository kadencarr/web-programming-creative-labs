var firstApp = angular.module('myApp', []);
firstApp.controller('myCtrl', function($scope) {
    $scope.question = "Welcome to our Dating Planner! Please pick which style of planning you wish to do!";
    $scope.option1 = "Serious";
    $scope.option2 = "Funny";
    $("#colorSpace").animate({ backgroundColor: "rgba(104, 66, 244, .4)" }, 1200);

    function compile(element) {
        var el = angular.element(element);
        $scope = el.scope();
        $injector = el.injector();
        $injector.invoke(function($compile) {
            $compile(el)($scope)
        })
    }

    $scope.changeContentQuestionS = function() {
        $scope.question = "Male or Female?";
        $scope.option1 = "Male";
        $scope.option2 = "Female";
        var left = document.getElementById("optionButton1");
        left.setAttribute("ng-click", "changeContentQuestionSM()");
        compile(left);

        var right = document.getElementById("optionButton2");
        right.setAttribute("ng-click", "changeContentQuestionSF()");
        compile(right);

        $("#colorSpace").animate({ backgroundColor: "rgba(66, 134, 244, .4)" }, 1200);
    }

    $scope.changeContentQuestionF = function() {
        $scope.question = "Male or Female?";
        $scope.option1 = "Male";
        $scope.option2 = "Female";
        var left = document.getElementById("optionButton1");
        left.setAttribute("ng-click", "changeContentQuestionFM()");
        compile(left);

        var right = document.getElementById("optionButton2");
        right.setAttribute("ng-click", "changeContentQuestionFF()");
        compile(right);

        $("#colorSpace").animate({ backgroundColor: "rgba(247, 66, 169, .4)" }, 1200);
    }

    $scope.changeContentQuestionSM = function() {
        $scope.question = "Single or in a Relationship?";
        $scope.option1 = "Single";
        $scope.option2 = "In a Relationship";
        var left = document.getElementById("optionButton1");
        left.setAttribute("ng-click", "changeContentQuestionSMS()");
        compile(left);

        var right = document.getElementById("optionButton2");
        right.setAttribute("ng-click", "changeContentQuestionSMR()");
        compile(right);

        $("#colorSpace").animate({ backgroundColor: "rgba(104, 66, 244, .4)" }, 1200);
    }

    $scope.changeContentQuestionSF = function() {
        $scope.question = "Single or in a Relationship?";
        $scope.option1 = "Single";
        $scope.option2 = "In a Relationship";
        var left = document.getElementById("optionButton1");
        left.setAttribute("ng-click", "changeContentQuestionSFS()");
        compile(left);

        var right = document.getElementById("optionButton2");
        right.setAttribute("ng-click", "changeContentQuestionSFR()");
        compile(right);

        $("#colorSpace").animate({ backgroundColor: "rgba(244, 113, 66, .4)" }, 1200);
    }

    $scope.changeContentQuestionFM = function() {
        $scope.question = "Single or in a Relationship?";
        $scope.option1 = "Single";
        $scope.option2 = "In a Relationship";
        var left = document.getElementById("optionButton1");
        left.setAttribute("ng-click", "changeContentQuestionFMS()");
        compile(left);

        var right = document.getElementById("optionButton2");
        right.setAttribute("ng-click", "changeContentQuestionFMR()");
        compile(right);

        $("#colorSpace").animate({ backgroundColor: "rgba(146, 244, 66, .4)" }, 1200);
    }

    $scope.changeContentQuestionFF = function() {
        $scope.question = "Single or in a Relationship?";
        $scope.option1 = "Single";
        $scope.option2 = "In a Relationship";
        var left = document.getElementById("optionButton1");
        left.setAttribute("ng-click", "changeContentQuestionFFS()");
        compile(left);

        var right = document.getElementById("optionButton2");
        right.setAttribute("ng-click", "changeContentQuestionFFR()");
        compile(right);

        $("#colorSpace").animate({ backgroundColor: "rgba(66, 244, 232, .4)" }, 1200);
    }

    $scope.changeContentQuestionSMS = function() {
        $scope.question = "Do you want to stay single or be in a relationship?";
        $scope.option1 = "Stay Single";
        $scope.option2 = "Relationship";
        var left = document.getElementById("optionButton1");
        left.setAttribute("ng-click", "changeContentQuestionSMSC()");
        compile(left);

        var right = document.getElementById("optionButton2");
        right.setAttribute("ng-click", "changeContentQuestionSMSB()");
        compile(right);

        $("#colorSpace").animate({ backgroundColor: "rgba(235, 244, 66, .4)" }, 1200);
    }

    $scope.changeContentQuestionSMR = function() {
        $scope.question = "Stay in the Relationship or Break-up?";
        $scope.option1 = "Stay";
        $scope.option2 = "Break-up";
        var left = document.getElementById("optionButton1");
        left.setAttribute("ng-click", "changeContentQuestionSMRC()");
        compile(left);

        var right = document.getElementById("optionButton2");
        right.setAttribute("ng-click", "changeContentQuestionSMRB()");
        compile(right);

        $("#colorSpace").animate({ backgroundColor: "rgba(244, 66, 167, .4)" }, 1200);
    }

    $scope.changeContentQuestionSFS = function() {
        $scope.question = "Do you want to stay single or be in a relationship?";
        $scope.option1 = "Stay Single";
        $scope.option2 = "Relationship";
        var left = document.getElementById("optionButton1");
        left.setAttribute("ng-click", "changeContentQuestionSFSC()");
        compile(left);

        var right = document.getElementById("optionButton2");
        right.setAttribute("ng-click", "changeContentQuestionSFSB()");
        compile(right);

        $("#colorSpace").animate({ backgroundColor: "rgba(96, 165, 150, .4)" }, 1200);
    }

    $scope.changeContentQuestionSFR = function() {
        $scope.question = "Stay in the Relationship or Break-up?";
        $scope.option1 = "Stay";
        $scope.option2 = "Break-up";
        var left = document.getElementById("optionButton1");
        left.setAttribute("ng-click", "changeContentQuestionSFRC()");
        compile(left);

        var right = document.getElementById("optionButton2");
        right.setAttribute("ng-click", "changeContentQuestionSFRB()");
        compile(right);

        $("#colorSpace").animate({ backgroundColor: "rgba(96, 96, 135, .4)" }, 1200);
    }

    $scope.changeContentQuestionFMS = function() {
        $scope.question = "Do you want to stay single or be in a relationship?";
        $scope.option1 = "Stay Single";
        $scope.option2 = "Relationship";
        var left = document.getElementById("optionButton1");
        left.setAttribute("ng-click", "changeContentQuestionFMSC()");
        compile(left);

        var right = document.getElementById("optionButton2");
        right.setAttribute("ng-click", "changeContentQuestionFMSB()");
        compile(right);

        $("#colorSpace").animate({ backgroundColor: "rgba(96, 165, 128, .4)" }, 1200);
    }

    $scope.changeContentQuestionFMR = function() {
        $scope.question = "Stay in the Relationship or Break-up?";
        $scope.option1 = "Stay";
        $scope.option2 = "Break-up";
        var left = document.getElementById("optionButton1");
        left.setAttribute("ng-click", "changeContentQuestionFMRC()");
        compile(left);

        var right = document.getElementById("optionButton2");
        right.setAttribute("ng-click", "changeContentQuestionFMRB()");
        compile(right);

        $("#colorSpace").animate({ backgroundColor: "rgba(143, 165, 96, .4)" }, 1200);
    }

    $scope.changeContentQuestionFFS = function() {
        $scope.question = "Do you want to stay single or be in a relationship?";
        $scope.option1 = "Stay Single";
        $scope.option2 = "Relationship";
        var left = document.getElementById("optionButton1");
        left.setAttribute("ng-click", "changeContentQuestionFFSC()");
        compile(left);

        var right = document.getElementById("optionButton2");
        right.setAttribute("ng-click", "changeContentQuestionFFSB()");
        compile(right);

        $("#colorSpace").animate({ backgroundColor: "rgba(66, 134, 244, .4)" }, 1200);
    }

    $scope.changeContentQuestionFFR = function() {
        $scope.question = "Stay in the Relationship or Break-up?";
        $scope.option1 = "Stay";
        $scope.option2 = "Break-up";
        var left = document.getElementById("optionButton1");
        left.setAttribute("ng-click", "changeContentQuestionFFRC()");
        compile(left);

        var right = document.getElementById("optionButton2");
        right.setAttribute("ng-click", "changeContentQuestionFFRB()");
        compile(right);

        $("#colorSpace").animate({ backgroundColor: "rgba(66, 134, 244, .4)" }, 1200);
    }

    //
    //
    //
    //
    //
    // Result start here!
    //
    //
    //
    //
    //

    $scope.changeContentQuestionSMSC = function() {
        $scope.question = "If you haven't served a mission, focus on preparing yourself for that time. If you have served a mission, counsel with your Heavenly Father about the right path for you going forward.";

        var left = document.getElementById("optionButton1");
        left.parentElement.removeChild(left);
        var right = document.getElementById("optionButton2");
        right.parentElement.removeChild(right);


        var picture = "<img src='https://i.pinimg.com/originals/3d/4c/6c/3d4c6c0b5cfe6b31a35a75f69c826285.jpg' alt='single guy' class='picture modal-image'>"

        $("#pictureArea").append(picture);
        
        var clickableIcon = "<img src='camera.jpg' alt='picture icon' onClick='goModal()' id='icon'/>";
        $("#buttonArea").append(clickableIcon);        
    }

    $scope.changeContentQuestionSMSB = function() {
        $scope.question = "Put yourself out there in situations that you can meet new girls. Attend FHE, YServe, and Institute.";

        var left = document.getElementById("optionButton1");
        left.parentElement.removeChild(left);
        var right = document.getElementById("optionButton2");
        right.parentElement.removeChild(right);

        var picture = "<img src='https://image.shutterstock.com/image-photo/young-guy-brings-flowers-shopping-260nw-1017044974.jpg' alt='flowers' class='picture modal-image'>"

        $("#pictureArea").append(picture);
        
        var clickableIcon = "<img src='camera.jpg' alt='picture icon' onClick='goModal()' id='icon'/>";
        $("#buttonArea").append(clickableIcon);        
    }

    $scope.changeContentQuestionSMRC = function() {
        $scope.question = "Treat your significant other with respect and spoil her often according to her love languages.";

        var left = document.getElementById("optionButton1");
        left.parentElement.removeChild(left);
        var right = document.getElementById("optionButton2");
        right.parentElement.removeChild(right);

        var picture = "<img src='https://qph.fs.quoracdn.net/main-qimg-11f692ffd2b93605b092b1b2e46835e2-c' alt='cooking' class='picture modal-image'>"

        $("#pictureArea").append(picture);
        
        var clickableIcon = "<img src='camera.jpg' alt='picture icon' onClick='goModal()' id='icon'/>";
        $("#buttonArea").append(clickableIcon);        
 }

    $scope.changeContentQuestionSMRB = function() {
        $scope.question = "No ghosting allowed. Tell her what you learned from being in a relationship with her. In the end, just be honest!";

        var left = document.getElementById("optionButton1");
        left.parentElement.removeChild(left);
        var right = document.getElementById("optionButton2");
        right.parentElement.removeChild(right);

        var picture = "<img src='breakup.jpg' alt='breakup' class='picture modal-image'>"

        $("#pictureArea").append(picture);

        var clickableIcon = "<img src='camera.jpg' alt='picture icon' onClick='goModal()' id='icon'/>";
        $("#buttonArea").append(clickableIcon);
    }

    $scope.changeContentQuestionSFSC = function() {
        $scope.question = "Continue on, pray often, and always be receptive to any revelation of change.";

        var left = document.getElementById("optionButton1");
        left.parentElement.removeChild(left);
        var right = document.getElementById("optionButton2");
        right.parentElement.removeChild(right);

        var picture = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnA8gyDa6KyP3l7q72RCJOuDaH1JRoumHWBiYw9j5zYE0d7g8NTw' alt='single girl' class='picture modal-image'>"

        $("#pictureArea").append(picture);

        var clickableIcon = "<img src='camera.jpg' alt='picture icon' onClick='goModal()' id='icon'/>";
        $("#buttonArea").append(clickableIcon);
    }

    $scope.changeContentQuestionSFSB = function() {
        $scope.question = "Separate yourself from your friends, stand out, and show your interest. Give them your attention, eye contact, and touch their elbow!";

        var left = document.getElementById("optionButton1");
        left.parentElement.removeChild(left);
        var right = document.getElementById("optionButton2");
        right.parentElement.removeChild(right);

        var picture = "<img src='https://www.flirt.com/blog/wp-content/uploads/flirt-com/giphy.gif' alt='single woman date' class='picture modal-image'>"

        $("#pictureArea").append(picture);

        var clickableIcon = "<img src='camera.jpg' alt='picture icon' onClick='goModal()' id='icon'/>";
        $("#buttonArea").append(clickableIcon);
    }

    $scope.changeContentQuestionSFRC = function() {
        $scope.question = "Take initiative to plan dates, do something different for him, and tell him you love him often!";

        var left = document.getElementById("optionButton1");
        left.parentElement.removeChild(left);
        var right = document.getElementById("optionButton2");
        right.parentElement.removeChild(right);

        var picture = "<img src='https://res.cloudinary.com/teepublic/image/private/s--vRcS3pbK--/t_Preview/b_rgb:191919,t_Watermark/c_limit,f_jpg,h_630,q_90,w_630/v1476336252/production/designs/730912_1.jpg' alt='i love you' class='picture modal-image'>"

        $("#pictureArea").append(picture);

        var clickableIcon = "<img src='camera.jpg' alt='picture icon' onClick='goModal()' id='icon'/>";
        $("#buttonArea").append(clickableIcon);
    }

    $scope.changeContentQuestionSFRB = function() {
        $scope.question = "Do not ghost him! Tell him what you've enjoyed about the relationship, but also be honest and open.";

        var left = document.getElementById("optionButton1");
        left.parentElement.removeChild(left);
        var right = document.getElementById("optionButton2");
        right.parentElement.removeChild(right);

        var picture = "<img src='https://i0.wp.com/www.elcrema.com/wp-content/uploads/2015/04/99.png' alt='breakup serious' class='picture modal-image'>"

        $("#pictureArea").append(picture);

        var clickableIcon = "<img src='camera.jpg' alt='picture icon' onClick='goModal()' id='icon'/>";
        $("#buttonArea").append(clickableIcon);
    }

    $scope.changeContentQuestionFMSC = function() {
        $scope.question = "Keep going to VASA and doing summer sales.";

        var left = document.getElementById("optionButton1");
        left.parentElement.removeChild(left);
        var right = document.getElementById("optionButton2");
        right.parentElement.removeChild(right);

        var extra = "<p>Additional resources can be found <a href='https://www.instagram.com/provo_allstar/?hl=en'>here</a>!</p><br/>";
        $("#buttonArea").append(extra);

        var picture = "<img src='schedule.jpg' alt='provo guy schedule' class='picture modal-image'>";

        $("#pictureArea").append(picture);

        var clickableIcon = "<img src='camera.jpg' alt='picture icon' onClick='goModal()' id='icon'/>";
        $("#buttonArea").append(clickableIcon);

    }

    $scope.changeContentQuestionFMSB = function() {
        $scope.question = "Try one of the following: Post flyers in the freshman girl's dorms with tear off tags with your number, try one of the millions of mormon pick-up lines or hand out business cards.";

        var left = document.getElementById("optionButton1");
        left.parentElement.removeChild(left);
        var right = document.getElementById("optionButton2");
        right.parentElement.removeChild(right);

        var picture = "<img src='https://i.chzbgr.com/full/8409512192/hF84F9D2A/' alt='pick up chicks' class='picture modal-image'>"

        $("#pictureArea").append(picture);

        var clickableIcon = "<img src='camera.jpg' alt='picture icon' onClick='goModal()' id='icon'/>";
        $("#buttonArea").append(clickableIcon);
    }

    $scope.changeContentQuestionFMRC = function() {
        $scope.question = "IF YA LIKE IT THEN YOU SHOULD PUT A RING ON IT.";

        var left = document.getElementById("optionButton1");
        left.parentElement.removeChild(left);
        var right = document.getElementById("optionButton2");
        right.parentElement.removeChild(right);

        var picture = "<img src='https://i.imgflip.com/cem5r.jpg' alt='rings' class='picture modal-image'>"

        $("#pictureArea").append(picture);

        var clickableIcon = "<img src='camera.jpg' alt='picture icon' onClick='goModal()' id='icon'/>";
        $("#buttonArea").append(clickableIcon);
    }

    $scope.changeContentQuestionFMRB = function() {
        $scope.question = "Simple. Change the relationship status on Facebook and send her a text.";

        var left = document.getElementById("optionButton1");
        left.parentElement.removeChild(left);
        var right = document.getElementById("optionButton2");
        right.parentElement.removeChild(right);

        var picture = "<img src='breakup.jpg' alt='breakup' class='picture modal-image'>"

        $("#pictureArea").append(picture);

        var clickableIcon = "<img src='camera.jpg' alt='picture icon' onClick='goModal()' id='icon'/>";
        $("#buttonArea").append(clickableIcon);
    }

    $scope.changeContentQuestionFFSC = function() {
        $scope.question = "GIRL YOU DONT NEED A MAN TO BE HAPPY!";

        var left = document.getElementById("optionButton1");
        left.parentElement.removeChild(left);
        var right = document.getElementById("optionButton2");
        right.parentElement.removeChild(right);

        var picture = "<img src='https://media.giphy.com/media/QcmHVZ9H4qUOQ/giphy.gif' alt='single woman' class='picture modal-image'>"

        $("#pictureArea").append(picture);

        var clickableIcon = "<img src='camera.jpg' alt='picture icon' onClick='goModal()' id='icon'/>";
        $("#buttonArea").append(clickableIcon);
    }

    $scope.changeContentQuestionFFSB = function() {
        $scope.question = "Make cinnamon rolls and deliver them to your FHE brothers, join mutual, always swipe up, flip the hair, bat the eyelashes and WORK IT.";

        var left = document.getElementById("optionButton1");
        left.parentElement.removeChild(left);
        var right = document.getElementById("optionButton2");
        right.parentElement.removeChild(right);

        var picture = "<img src='https://huckberry.imgix.net/uploads/post_carousel_image/image/104/featured_Huckberry_Provisions_Cinnamon_Rolls_Boyte_header5.jpg?auto=compress%2Cformat&dpr=1&cs=tinysrgb&crop=top&fit=clip&w=1&h=1' alt='cinnamon rolls' class='picture modal-image'>"

        $("#pictureArea").append(picture);

        var clickableIcon = "<img src='camera.jpg' alt='picture icon' onClick='goModal()' id='icon'/>";
        $("#buttonArea").append(clickableIcon);
    }

    $scope.changeContentQuestionFFRC = function() {
        $scope.question = "At this point you might as well become best friends with his mom!";

        var left = document.getElementById("optionButton1");
        left.parentElement.removeChild(left);
        var right = document.getElementById("optionButton2");
        right.parentElement.removeChild(right);

        var picture = "<img src='proposal.jpg' alt='proposal' class='picture modal-image'>"

        $("#pictureArea").append(picture);

        var clickableIcon = "<img src='camera.jpg' alt='picture icon' onClick='goModal()' id='icon'/>";
        $("#buttonArea").append(clickableIcon);
    }

    $scope.changeContentQuestionFFRB = function() {
        $scope.question = "Watch \"How to lose a guy in 10 days\", don't shower, be super clingy, super jealous, and wait for him to break up with you so you don't have to do the hard work!";

        var left = document.getElementById("optionButton1");
        left.parentElement.removeChild(left);
        var right = document.getElementById("optionButton2");
        right.parentElement.removeChild(right);

        var picture = "<img src='https://images-na.ssl-images-amazon.com/images/I/71QLcAJVGEL._SL1500_.jpg' alt='lose a guy' class='picture modal-image'>"

        $("#pictureArea").append(picture);

        var clickableIcon = "<img src='camera.jpg' alt='picture icon' onClick='goModal()' id='icon'/>";
        $("#buttonArea").append(clickableIcon);
    }

});


