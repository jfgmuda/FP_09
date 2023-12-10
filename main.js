const URI = 'https://api.github.com/users/1';

window.onload = function() {
  initXHR();
  initFetch();
  initPromise();
  initAsyncAwait();
}

const setData = (data, id) => {
  const code = document.getElementById(id);
  code.innerText = data
}

const initXHR = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', URI, true);
  xhr.onload = function() {
    if (this.status === 200) {
      setData(this.responseText, 'xhr');
    }
  }
  xhr.send();
}


const initFetch = () => {
  fetch(URI)
    .then(res => res.json())
    .then(data => {
      setData(JSON.stringify(data).replaceAll('",', '",\n'), 'fetch')
    })
}

const getDataFromPromise = () => new Promise((resolve) => {
  fetch(URI)
    .then(res => res.json())
    .then(data => {
      resolve(data)
    })
})
  

const initPromise = async() => {
  getDataFromPromise()
  .then(res => setData(JSON.stringify(res).replaceAll('",', '",\n'), 'promise'));
}

const initAsyncAwait = async () => {
  const data = await getDataFromPromise();
  setData(JSON.stringify(data).replaceAll('",', '",\n'), 'asyncawait')
}
