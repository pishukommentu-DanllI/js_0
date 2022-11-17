'use strict';

const parent = document.querySelector('.parent');
parent.addEventListener('click', event => {
    let elem = event.target
    console.log(elem.closest('.btn'))

    if (elem.closest('.btn')) {
        elem.closest('.btn').classList.add('done');
        elem.innerHTML = 'pressed'
    }
})

const add_btn = document.querySelector('.btn_add');
add_btn.addEventListener('click', event => {
    parent.insertAdjacentHTML('beforeend', '<button class="btn">New btn</button>')
})



