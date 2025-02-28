function getInnerTexById(id) {
    const innerText = document.getElementById(id).innerText;
    const convertInnerText = parseInt(innerText);
    return convertInnerText;
}

function setInnerText(id, value){
    document.getElementById('id').innerText = value;
}