// Enquiry Form Submission Script for Google Sheets
const scriptURL = 'YOUR_DEPLOYED_GOOGLE_SCRIPT_URL_HERE';
const form = document.getElementById('enquiry-form');
const responseMsg = document.getElementById('response');

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = {
    Name: form.name.value,
    Class: form.class.value,
    Subject: form.subject.value,
    Contact: form.contact.value,
    Message: form.message.value,
    Referral: form.referral.value
  };

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(res => {
    responseMsg.classList.remove('hidden');
    form.reset();
  })
  .catch(err => {
    alert('Something went wrong. Please try again.');
    console.error(err);
  });
});
