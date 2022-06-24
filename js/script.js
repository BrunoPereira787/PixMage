
const loadImage = (hits) => {
    const gallery = document.querySelector('.galeria')

    console.log(hits)

    const div = document.createElement('div')
    div.setAttribute('class', 'galeria-container')

    div.innerHTML = `
        <img src="${hits.webformatURL}" alt="">
        <div class="galeria-info">
            <p>Mar</p>
            <p>Ocenao</p>
        </div>
        <ul class="galeria-icon">
            <li>face</li>
            <li>insta</li>
            <li>whats</li>
        </ul>
    `

    gallery.appendChild(div)
}

const loadGallery = (response) => {
    const gallery = document.querySelector('.galeria')
    gallery.innerHTML = ''
    
    const hits = response.hits
    hits.forEach(loadImage);
}


const loadAPI = async (text) => {
    const key = "28232963-2e851d4cbcea18605c59e9587"
    const url = `https://pixabay.com/api/?key=${key}&q=${text}`

    const response = await fetch(url)
    const responseJson = await response.json()

    loadGallery(responseJson)
}

const seachInput = ({code, target}) => {
    if(code === "Enter"){
        loadAPI(target.value)
    }
}

// events
document.querySelector('[data-js="searchInput"]')
    .addEventListener('keypress', seachInput)