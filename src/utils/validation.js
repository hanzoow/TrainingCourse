const validateEmail = email => {
  const expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  return expression.test(String(email).toLowerCase());
};
const validatephone = phone => {
  const expression = /^\(?([0-9]{3})\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$/;
  return expression.test(String(phone).toLowerCase());
};
export default validatephone;

export {validateEmail};
