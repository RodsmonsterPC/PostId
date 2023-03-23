export default {
  createList: (textTitle, id) => {
    let textList = document.createElement("li");
    textList.classList.add("list-group-item");
    let anchor = document.createElement("a");
    anchor.textContent = textTitle;
    anchor.setAttribute("href", `./Post/postDetail.html?postId=${id}`);
    anchor.classList.add("list-text");
    textList.append(anchor);

    return textList;
  },

  createPost: (title, body) => {
    let divContainer = document.createElement("div");

    let divInfo = document.createElement("div");
    let titleText = document.createElement("h5");
    titleText.textContent = title;

    let bodyText = document.createElement("p");
    bodyText.textContent = body;

    divInfo.append(titleText, bodyText);
    divContainer.appendChild(divInfo);
    return divContainer;
  },
};
