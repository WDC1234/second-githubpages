export const getData = (url, parent) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(e => {
            var title = document.createElement('h3');
                title.innerText = e.title;
                title.setAttribute('class', 'alert alert-info mb-3 mt-3 p-2');
                parent.appendChild(title);
        })
    })
    .catch(error => console.log('error: ' + error));
}