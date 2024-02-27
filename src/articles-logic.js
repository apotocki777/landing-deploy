const showMoreButton = document.querySelector(".show-more");
const hiddenArticles = document.querySelectorAll(".article.hidden");
const allArticles = document.querySelectorAll(".article");
const largeArticle = document.querySelector(".article_large");

const hideArticles = (e) => {
  hiddenArticles.forEach((article) => {
    article.classList.add("hidden");
  });

  largeArticle.style.position = "relative"

  e.target.firstChild.textContent = "More Articles";
};

const showHiddenArticles = (e) => {
  hiddenArticles.forEach((article) => {
    article.classList.remove("hidden");
  });

  largeArticle.style.position = "sticky"

  e.target.firstChild.textContent = "Hide Articles";
};

const toggleHiddenArticles = (e) => {
  if (e.target.firstChild.textContent === "More Articles") {
    showHiddenArticles(e);
  } else {
    hideArticles(e);
  }
};

const changeLargeArticle = (e) => {
  //target img
  const imgContainer = e.currentTarget.querySelector(".article--img");
  const imgSrc = imgContainer.querySelector("img").src;

  //target avatar
  const targetAvatarContainer = e.currentTarget
    .querySelector(".article--content")
    .querySelector(".customer-avatar");
  const targetAvatarImgSrc = targetAvatarContainer.querySelector("img").src;
  const targetAvatarName = targetAvatarContainer.querySelector("p").textContent;

  //target article content
  const targetArticleContent = e.currentTarget
    .querySelector(".article--content")
    .querySelector(".subtitle").textContent;

  //target article date
  const targetArticleDate = e.currentTarget
    .querySelector(".article--content")
    .querySelector(".article--date-container")
    .querySelector("p");
  const targetDateTextContent = targetArticleDate.textContent;

  //large article nodes

  const largeArticleImg = largeArticle
    .querySelector(".article--img")
    .querySelector("img");
  const largeArticleAvatarContainer = largeArticle
    .querySelector(".article--content")
    .querySelector(".customer-avatar");
  const largeArticleAvatarImg =
    largeArticleAvatarContainer.querySelector("img");
  const largeArticleAvatarName =
    largeArticleAvatarContainer.querySelector("p");
  const largeArticleContent = largeArticle
    .querySelector(".article--content")
    .querySelector("h3");
  const largeArticleDate = largeArticle
    .querySelector(".article--content")
    .querySelector(".article--date-container")
    .querySelector("p");
  

  largeArticleImg.src = imgSrc;
  largeArticleAvatarImg.src = targetAvatarImgSrc;
  largeArticleAvatarName.textContent = targetAvatarName;
  largeArticleContent.textContent = targetArticleContent;
  largeArticleDate.textContent = targetDateTextContent; 
};

export {toggleHiddenArticles, changeLargeArticle}
