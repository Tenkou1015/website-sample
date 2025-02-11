fetch('data/contact.json')
  .then(response => response.json())
  .then(data => {
    let contactInfo = document.getElementById("contact-info");
    contactInfo.innerHTML = `
      <p>地址: ${data.contact.address}</p>
      <p>电话: ${data.contact.phone}</p>
      <p>电子邮件: ${data.contact.email}</p>
    `;
  })
  .catch(error => console.error("加载联系我们信息失败:", error));