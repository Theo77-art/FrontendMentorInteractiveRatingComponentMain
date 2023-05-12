function handleSubmit(event){

    event.preventDefault();

    var radios = document.getElementsByName("rating");
    var rating = "";

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          rating = radios[i].value;
          break;
        }
    }

    if( rating == ""){
        const output = document.getElementById("alert");

        output.textContent = "You have not selected any rating!!"
    }else{
        const output = document.getElementById("user-rating");

        output.textContent = rating;

        const state1 = document.getElementById("state1");
        state1.classList.add("hide");
        const state2 = document.getElementById("state2");
        state2.classList.remove("hide");
        form.reset();
    }
}


const form = document.querySelector("#user-rating-form");
form.addEventListener("submit", handleSubmit);
