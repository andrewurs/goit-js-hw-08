import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

const FORM_STORAGE_KEY = 'feedback-form-state';

let formData;

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(addFormInput, 500));

function onFormSubmit(e) {
  e.preventDefault();

  const { email, message } = e.currentTarget.elements;

  if (email.value === '' || message.value === '') {
    return alert('Будь ласка заповнити усі поля');
  }

  localStorage.removeItem(FORM_STORAGE_KEY);
  console.log(formData);
  e.currentTarget.reset();
  clearFormData(formData);
}

function clearFormData(obj) {
  for (const key in obj) {
    delete obj[key];
  }
}

function addFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
}

function getStorageData() {
  formData = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY));
  if (formData) {
    setFormFields(formData);
  } else {
    formData = {};
  }
}

function setFormFields(obj) {
  for (const key in obj) {
    refs.form[key].value = obj[key];
  }
}

window.addEventListener('load', getStorageData);
