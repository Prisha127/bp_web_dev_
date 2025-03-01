function getRandomDog() {
    fetch("https://dog.ceo/api/breeds/image/random").then((res) => {
        console.log(res);
        return res.json();
}).then((data)=> {
    console.log(data);
    document.querySelector("#dog-image").src = data.message;
});
}
function getSpecificDog() {
    let breed = document.querySelector("#breed").value;
    fetch(`https://dog.ceo/api/breeds/${breed}/images/random`).then((res)=> {
        if (!res.ok) {
            // an error has happened; we should do something!!
            alert("Woof, we couldn't find that dog :( try again");
            return;
        }
        console.log(res);
        return res.json();
    }).then((data)=>{
        console.log(data);
        document.querySelector("#dog-image").src = data.message;
    })


}