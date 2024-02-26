// const getImgPromise = () =>
//   new Promise((resolve) => resolve("https//mipagina.com"));
// getImgPromise().then((resp) => console.log(resp));

const getImg = async () => {
  try {
    const apiKey = "apiKey=0BFoL2tpGJ37XDihwpsS6ADOUSxhnEX7";
    const gifUrl = "https://api.giphy.com/v1/gifs/random?";

    const getGifs = await fetch(`${gifUrl}${apiKey}`);
    const { data } = await getGifs.json();
    const path = data.images.original.url;
    const img = document.createElement("img");
    img.src = path;
    document.body.append(img);

    console.log("hola esto es un async", data);
  } catch (error) {
    console.error(error);
  }
};
getImg().then();
