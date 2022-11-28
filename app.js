const movieContainer = document.getElementsByClassName('feed')[0]
const searchResults = document.getElementsByClassName('searchResults')[0]
const searchButtom = document.getElementsByClassName('search')[0]

document.addEventListener('DOMContentLoaded', fetchMovies)

function fetchMovies() {
    fetch(`http://127.0.0.1:3000`)
        .then(resp => resp.json())
        .then(movies => {
            diaplayMovies(movies)
        })
}

function diaplayMovies(movies) {
    movies.map((movie) => {
        let html = generateHTML(movie)
        let element = elementFromHtml(html)
        movieContainer.append(element)
    })
}


function elementFromHtml(html) {
    const template = document.createElement("template")
    template.innerHTML = html.trim()
    return template.content.firstElementChild
}

function generateHTML(movie) {
    return `     <section class=" id:${movie.name} py-8 px-8 pr-8 bg-blue-50 w-1/3" id="contactForm">
    <div class="flex items-center  justify-center md:items-row min-h-[25%] bg-blue-50">
        <div class="relative flex flex-col w-2/3 min-h-2/3  max-h-2/3 md:flex-row py-8  space-y-2 bg-white shadow-2xl rounded-2xl md:flex-row ">
            <div class="p-6 md:p-20 md:w-full">
                <h1>  </h1> <h2 class="mb-5 text-4xl font-bold text-center text-wrap"> Movie name: ${movie.name} </h2>
                <form class="addmovieForm" action="">
                    <div class="flex flex-col items-center justify-center mt-6 space-y-6 md:flex-row md:space-y-0">
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
`
}

searchButtom.addEventListener('click', handleSearch)

function handleSearch(event) {
    event.preventDefault()
    const dirname =  { body: document.getElementsByClassName('diName')[0].value }

    const configObj = {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': 'http://127.0.0.1:5500/',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dirname)
    }

    fetch("http://127.0.0.1:3000/search/isaac")
        .then(resp => resp.json())
        .then(results => returnSearch(results), console.log(results))
}


function returnSearch(movies) {
    console.log(movies)
    movies.map((movie) => {
        console.log(movie)
        let html = generateHTML(movie)
        let element = elementFromHtml(html)
        searchResults.append(element)
    })
}
