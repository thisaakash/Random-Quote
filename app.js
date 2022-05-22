window.onload = () => {
    fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
    .then(response => response.json())
    .then(data => {

       let a = data.quotes[0].text;
       let b = data.quotes[0].author;

        document.getElementById('quote').innerText =a;
        document.getElementById('auth').innerText = b;
    })
    .catch(err => alert("Something Went Wrong...."))
}



