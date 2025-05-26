const createPostElement = (post) => {
  const postDiv = document.createElement("div");
  postDiv.style.margin = "20px 0";
  postDiv.style.padding = "10px 15px";
  postDiv.style.border = "1px solid grey";
  postDiv.style.borderRadius = "5px";

  const title = document.createElement("h3");
  title.textContent = post.title;
  title.style.margin = "0 0 5px 0";
  title.style.fontSize = "22px";
  title.style.color = "red";

  const body = document.createElement("p");
  body.textContent = post.body;

  postDiv.appendChild(title);
  postDiv.appendChild(body);

  return postDiv;
};

const appendPostToContainer = (post, container) => {
  const postElement = createPostElement(post);
  container.appendChild(postElement);
};

const fetchAndDisplayPosts = () => {
  const container = document.querySelector("#container");
  container.style = "max-width: 70%";
  container.style.margin = "0 auto";

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      return res.json();
    })
    .then((posts) => {
      posts.forEach((post) => {
        appendPostToContainer(post, container);
      });
    })
    .catch((err) => {
      console.error("Ошибка при получении постов", err);
    });
};

fetchAndDisplayPosts();
