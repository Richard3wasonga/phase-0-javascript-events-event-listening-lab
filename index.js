let input = document.getElementById('button');
function addingEventListener(){
    let but = document.getElementsByTagName("input")
    for(let btn of but){
        btn.addEventListener('click', input)
    }
}

