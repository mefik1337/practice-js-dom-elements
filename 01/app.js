console.log('DOM');

const findElement = () => {
  const comments = document.querySelector('ul > li.comments__item.comments__item--newest');
  const span = comments.querySelectorAll('p span');
  span.forEach(e => {
      console.log(e.dataset.info);
  })
};

findElement();