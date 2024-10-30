let count = 0; //initialize count to 0

function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); //Display the count
    checkCountValue(); // Check count value and display messages
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}

function resetCount(){
    count = 0;
    displayCount(); //Display the count
    checkCountValue(); // Check count value and display messages
        alert ("Count has been reset");
    }


function checkCountValue() {
    if (count === 10) {
        alert ("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 follower! Keep it up!")
    }
}