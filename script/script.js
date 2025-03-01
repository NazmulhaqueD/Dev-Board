document.getElementById('discover').addEventListener('click', function (event) {
    window.location.href = 'discover.html'
})

const newDate = new Date();
const updateTime = (newDate.toLocaleString('en-us', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
}));
const currentTimeParent = document.getElementById('current-date-time');
currentTimeParent.innerHTML = `
    <p class='text-xl font-semibold'> ${updateTime} </p>
`

// document.getElementById('mobile-btn').addEventListener('click', function (event) {
//     alert('bard update successfully');

//     const mobileTitle = document.getElementById('mobile-text').innerText;
//     const pushContainer = document.getElementById('push-of-js');
//     const task = getInnerTexById('main-task');
//     const checkNumber = getInnerTexById('check-number');

//     const countTask = task - 1;
//     const countCheckNumber = checkNumber + 1;

//     document.getElementById('main-task').innerText = countTask;
//     document.getElementById('check-number').innerText = countCheckNumber;

//     const newElement = document.createElement('p');
//     newElement.innerText = `
//         You have completed the task ${mobileTitle}
//     `
//     pushContainer.appendChild(newElement);

//     const mobileBtn = document.getElementById('mobile-btn');
//     mobileBtn.setAttribute('disabled', true)

// })

document.getElementById('mobile-btn').addEventListener('click', function (event) {
    completed();
    getHistory('mobile-text');
    event.target.setAttribute('disabled', true);
})

document.getElementById('dark-btn').addEventListener('click', function (event) {
    completed();
    getHistory('dark-text');
    event.target.setAttribute('disabled', true);
})


document.getElementById('home-btn').addEventListener('click', function (event) {
    completed();
    getHistory('home-title');
    event.target.setAttribute('disabled', true);
})


document.getElementById('emoji-btn').addEventListener('click', function (event) {
    completed();
    getHistory('emoji-title');
    event.target.setAttribute('disabled', true);
})


document.getElementById('api-btn').addEventListener('click', function (event) {
    completed();
    getHistory('api-title');
    event.target.setAttribute('disabled', true);
})


document.getElementById('job-btn').addEventListener('click', function (event) {
    completed();
    getHistory('job-title');
    alert('congrates!!! You have completed all the current task');
    event.target.setAttribute('disabled', true);
})


document.getElementById('clear-btn').addEventListener('click', function (event) {
    const clear = document.getElementById("history-container");
    clear.innerHTML = '';
})