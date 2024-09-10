console.log('this is my script');

const submitBtn = document.getElementById('submitBtn');
const resultCont = document.getElementById('resultCont');

submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log('Clicked!');
    
    const key = 'ema_live_dgzdQ5NTDdoyyx86dsMTfxHmNzt9KMAO5mWmOiR9';
    const email = document.getElementById('username').value;
    const url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    
    try {
        let res = await fetch(url);
        let result = await res.json();
        let str = ``;
        for (let key of Object.keys(result)) {
            str += `<div>${key}: ${result[key]}</div>`;
        }
        console.log(str);
        resultCont.innerHTML = str;
    } catch (error) {
        console.error('Error fetching email validation:', error);
        resultCont.innerHTML = '<div>Error fetching email validation</div>';
    }
});
