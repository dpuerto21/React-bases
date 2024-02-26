const apiKey = "apiKey=0BFoL2tpGJ37XDihwpsS6ADOUSxhnEX7";
const gifUrl = "https://api.giphy.com/v1/gifs/random?";

const getGifs = fetch(`${gifUrl}${apiKey}`)
  .then((resp) => resp.json())
  .then(({ data }) => {
    const path = data.images.original.url;
    console.log(path);
    const img = document.createElement("img");
    img.src = path;
    document.body.append(img);
  })
  .catch(() => {
    console.warn();
  });
