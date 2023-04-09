// variable

const model = document.querySelector('.modal');
const btn = document.querySelector('.buttn');
const close = document.querySelector('.close');



//open modal
function openModal(e) {
    e.preventDefault();
    model.style.display = 'block';

}
btn.addEventListener('click', openModal);


//close modal
function closeModal(e) {
    model.style.display = 'none';
}
close.addEventListener('click', closeModal);
//model.addEventListener('click', closeModal);