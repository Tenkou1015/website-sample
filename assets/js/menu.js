fetch('data/menu.json')
  .then(response => response.json())
  .then(data => {
    let menuList = document.getElementById("menu-list");
    data.menu.forEach(item => {
      let menuItem = document.createElement("div");
      menuItem.className = "menu-item";
      menuItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
      `;
      menuList.appendChild(menuItem);
    });
  })
  .catch(error => console.error("加载菜单失败:", error));