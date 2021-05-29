const server = 'https://jsonplaceholder.typicode.com/posts';
const formElements = document.querySelectorAll('.form');

const sendData = (data, callback, call2) => {
  const request = new XMLHttpRequest();
  request.open('POST', server);
  request.addEventListener('readystatechange', () => {
    if (request.readyState !== 4) return;
    if (request.status === 200 || request.status === 201) {
      const response = JSON.parse(request.responseText);
      callback(response.id);
    } else {
      call2(request.status);
      throw new Error(request.status);
    }
  });
  request.send(data);
};


const formHandler = (form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {};
    for (const { name, value } of form.elements) {
      if (name) {
        data[name] = value;
      }
    }
    const alertText = document.createElement('small');
    sendData(JSON.stringify(data),
      (id) => {
        alertText.textContent = 'Ваша заявка №' + id + ' Менеджер свяжется с Вами в ближайшее время!';
        alertText.style.color = 'green';
        form.append(alertText);
      },
      () => {
        alertText.textContent = 'Сбой отправки! Данные не отправлены!';
        alertText.style.color = 'red';
        form.append(alertText);
      });
  });
};

formElements.forEach(formHandler);
