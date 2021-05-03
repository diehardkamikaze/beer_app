function errorHandler(error) {
  console.log(error);
  alert('Возникла ошибка, смотрите консоль, страница будет перезагружена');
  window.location.reload();
}

export default errorHandler;
