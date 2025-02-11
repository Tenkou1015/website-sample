fetch('data/about.json')
  .then(response => response.json())
  .then(data => {
    let aboutContent = document.getElementById("about-content");
    aboutContent.innerHTML = `
      <h3>${data.about.title}</h3>
      <p>${data.about.description}</p>
    `;
  })
  .catch(error => console.error("加载关于我们内容失败:", error));