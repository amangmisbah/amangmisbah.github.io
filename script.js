const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.alert');


const scriptURL =
    'https://script.google.com/macros/s/AKfycbz_bqPHVthA_nu2v5SuGdt-mNIjhXWz9Aq0WkOGvAQafvtuZlkCk7Tfw_3TzxnOAnFB/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault();
    //ketika tombol submit diklik
    //tampilkan tombol loading
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
});