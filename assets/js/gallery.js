fetch('data/gallery.json')
  .then(response => response.json())
  .then(data => {
    let gallery = document.getElementById("gallery");
    data.gallery.forEach(item => {
      let galleryItem = document.createElement("div");
      galleryItem.className = "gallery-item";
      galleryItem.innerHTML = `
        <img src="${item.image}" alt="${item.caption}">
        <p>${item.caption}</p>
      `;
      gallery.appendChild(galleryItem);
    });
  })
  .catch(error => console.error("加载店铺环境图片失败:", error));