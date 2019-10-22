//content를 찾아서 3초 마다 돌아가면서 보여주면 됩니다.
//힌트:setInterval
//상위 화면에 영역에 그림이 3초마다 바뀌도록

//1. contents 에 있는 검색어를 모두 찔러서 받아놓는다.
//2. 받아놓은 애를 3초마다 변경해서 보여준다.
const contents = ["cat", "happy", "ah", "kim"];
const keyword = contents[Math.floor(Math.random() * contents.length)];

var API_KEY = "34hv8XzSGYWvjUkLhlya9bV5PoQ8elv9";

function searchAndTv() {
  const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;
  const GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open("GET", URL);
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener("load", e => {
    const rawData = e.target.response;
    const parseData = JSON.parse(rawData);
    pushToTvDOM(parseData);
  });
}

const tvArea = document.querySelector("#js-tv-area");

function pushToTvDOM(parseData) {
  tvArea.innerHTML = null;
  const dataSet = parseData.data;
  let i = 0;
  setInterval(() => {
    const imageURL = dataSet[i].images.fixed_height.url;
    tvArea.innerHTML = `<img src="${imageURL}" class="img-center"/>`;
    i++;
    if (i >= dataSet.length) i = 0;
  }, 3000);
}

document.addEventListener("DOMContentLoaded", searchAndTv);
