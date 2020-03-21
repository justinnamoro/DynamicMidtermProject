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
        page_state = 5;
    }

    
}
