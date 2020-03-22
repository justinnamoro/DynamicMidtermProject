var page_state = 1;
function change(){
    if (page_state === 1){
      
        document.getElementById('para').innerHTML = "HHH";
        page_state = 2;
    }
    else if (page_state === 2){
       
        document.getElementById('para').innerHTML = "BBB";
        page_state = 3;
    }
    }
