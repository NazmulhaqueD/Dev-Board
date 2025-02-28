document.getElementById('discover').addEventListener('click', function (event) {
    window.location.href = 'discover.html'
})


document.getElementById('mobile-btn').addEventListener('click', function (event) {
    alert('bard update successfully');

    const mobileTitle = document.getElementById('mobile-text').innerText;
    const pushContainer = document.getElementById('push-of-js');
    const task = getInnerTexById('main-task');
    const checkNumber = getInnerTexById('check-number');

    const countTask = task - 1;
    const countCheckNumber = checkNumber + 1;

    document.getElementById('main-task').innerText = countTask;
    document.getElementById('check-number').innerText = countCheckNumber;

    const newElement = document.createElement('p');
    newElement.innerText = `
        You have completed the task ${mobileTitle}
    `
    pushContainer.appendChild(newElement);

    const mobileBtn = document.getElementById('mobile-btn');
    mobileBtn.setAttribute('disabled', true)

})


document.getElementById('clear-btn').addEventListener('click', function (event) {
    const clear = document.getElementById("push-of-js");
    clear.innerHTML = '';
})