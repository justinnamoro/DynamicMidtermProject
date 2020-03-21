var page_state = 1;

// Items
function ballClick(){
    if (page_state === 1){
        document.querySelector('#picture').style.backgroundImage = 'url(images/scene1.jpg)';
        document.querySelector('h2').style.display = 'none';
        document.querySelector('#next').style.display = 'inline';
        document.querySelector('#item1').style.display = 'none';
    }

}

function starClick(){
    if (page_state === 5){
        document.querySelector('#picture').style.backgroundImage = 'url(images/scene6.jpg)';
        document.querySelector('#instructions').style.display = 'none';
        document.querySelector('#next').style.display = 'inline';
        document.querySelector('#item2').style.display = 'none';
        document.getElementById('desc').innerHTML = 'Molly hissed at the dogs, "You have four legs too! You <br> should use them."';
    }
}



// Change 

function nextPage(){
    if (page_state === 1){
        document.querySelector('#picture').style.backgroundImage = 'url(images/scene2.jpg)';
        document.getElementById('desc').innerHTML = "One day Molly was minding her own business <br> suddenly her mean dog neighbour Jolly and his friends <br> steal Molly's ball.";
        page_state = 2;
    }
    else if (page_state === 2){
        document.querySelector('#picture').style.backgroundImage = 'url(images/scene3.jpg)';
        document.getElementById('desc').innerHTML = "Jolly and his friends are different from other dogs <br> They love to stand on their hind legs to show <br> their dominance in the neighbourhood.";
        page_state = 3;
    }
    else if (page_state === 3){
        document.querySelector('#picture').style.backgroundImage = 'url(images/scene4.jpg)';
        document.getElementById('desc').innerHTML = 'Molly storms into the front yard of Jolly. <br> "Give my ball back!" She says.';
        page_state = 4;
    }
    else if (page_state === 4){
        document.querySelector('#picture').style.backgroundImage = 'url(images/scene5.jpg)';
        document.getElementById('desc').innerHTML = 'Jolly and his friends laugh at Molly. <br> "You are just a cat with four legs. <br> You cannot have fun with four legs!"';
        document.querySelector('h2').style.display = 'inline';
        document.querySelector('#item2').style.opacity = '100%';
        document.querySelector('#next').style.display = 'none';
        document.getElementById('instructions').innerHTML = 'Read the bottom sentences, then click on the blue power star of logic!';
        page_state = 5;
    }

    else if (page_state === 5){
        document.querySelector('#picture').style.backgroundImage = 'url(images/scene7.jpg)';
        document.querySelector('#item3').style.opacity = '100%';
        document.getElementById('desc').innerHTML = "The dogs realized Molly's logic, as they slowly place <br> their front legs on the ground. Molly then steals her ball back! <br> THE END!";
        page_state = 6;
    }
    
}
