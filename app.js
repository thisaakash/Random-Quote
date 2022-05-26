window.onload = () => {
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {

       let a = data.content;
       let b = data.author;

        document.getElementById('quote').innerText =a;
        document.getElementById('auth').innerText = b;
    })
    .catch(err => alert("Something Went Wrong...."))
}



