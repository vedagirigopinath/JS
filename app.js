document.addEventListener('DOMContentLoaded', myNews);

function myNews(){
    let country="";
    country = document.getElementById('myCountry').value;
    console.log(country);
    let category ='';
    category =  document.getElementById('myCategory').value;
    let q="";
    q = document.getElementById('myQ').value;

    let url = 'https://newsapi.org/v2/top-headlines?'+
    'q='+q+'&'+
    'country='+country+'&'+
    'category='+category+'&'+
    'apiKey=06313be8c6cd4d8c92d4c096e21096eb';

    var req =new Request(url);
    fetch(req)
    .then( (response)=>{
        return response.json();
    })
    .then( (data)=> {
        let output ="";
        data.articles.forEach( elements => {
            output+=`
            <ul class="list-item-group">
                <li class="list-item"><h2>Title: ${elements.title}</h2></li>
                <li class="list-item"><h3>Author: ${elements.author}</h3></li>
                <li class="list-item"><img src="${elements.urlToImage}" class="img img-rounded img-responsive"/></li>
                <li class="list-item"><h3>Description:<h3> <p>${elements.description}</p></li>
                <li class="list-item"><h3>Source:<h3> <p>${elements.source.name}</p></li>
                <a class="btn btn-info" href="${elements.url}" target="_blank">Read More</a>
            </ul>
            <hr>
            `
            document.getElementById('output').innerHTML = output;
        })
        .catch( (err) =>{
            console.log(err.err);
            alert(err);
        } )
    });
}

//The Hindu News Fetching function
document.getElementById('hindu').addEventListener('click', hindu);
function hindu(){
       
    /*
    country = document.getElementById('myCountry').value;
    console.log(country);
    let category ='';
    category =  document.getElementById('myCategory').value;
    let q="";
    q = document.getElementById('myQ').value;
    */
    var url = 'https://newsapi.org/v2/everything?'+
    'sources=the-hindu&'+
    'apiKey=06313be8c6cd4d8c92d4c096e21096eb';

    var req =new Request(url);
    fetch(req)
    .then( (response)=>{
        return response.json();
    })
    .then( (data)=> {
        let output ="";
        data.articles.forEach( elements => {
            output+=`
            <ul class="list-item-group">
                <li class="list-item"><h2>Title: ${elements.title}</h2></li>
                <li class="list-item"><h3>Author: ${elements.author}</h3></li>
                <li class="list-item"><img src="${elements.urlToImage}" class="img img-rounded img-responsive"/></li>
                <li class="list-item"><h3>Description:<h3> <p>${elements.description}</p></li>
                <li class="list-item"><h3>Source:<h3> <p>${elements.source.name}</p></li>
                <a class="btn btn-info" href="${elements.url}" target="_blank">Read More</a>
            </ul>
            <hr>
            `
            document.getElementById('output').innerHTML = output;
        })
        .catch( (err) =>{
            console.log(err);
            alert(err);
        } )
    })
}