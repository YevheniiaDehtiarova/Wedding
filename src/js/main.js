(function() {
    let burgerButton = document.querySelector('.burger-button');
    let burgerMenu = document.querySelector('.mobile-menu-wrapper');
    let logo = document.querySelector('.header__logo')



    burgerButton.addEventListener('click', burgerClass);

    function burgerClass() {
        burgerButton.classList.toggle('burger-button-active');
        burgerMenu.classList.toggle('hidden');
        logo.classList.toggle('hidden');
    };

const squares = document.querySelectorAll('.about-us-block');

squares.forEach(square => {
    square.addEventListener('click', function() {
        const target = document.querySelector(this.getAttribute('data-target'));

        document.querySelectorAll('section').forEach(section => section.classList.add('hidden'));

        target.classList.remove('hidden');
    });
});

//courses-description page navigation
const courses = document.querySelectorAll('#course-list li');

function navigateToCourse(courseId) {
    const courseDescription = document.getElementById(courseId);
    if (courseDescription) {
        courseDescription.scrollIntoView({
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

courses.forEach(course => {
    course.addEventListener('click', () => {
        const courseId = course.getAttribute('data-course');
        navigateToCourse(courseId);
    });
});


const tabButtons = document.querySelectorAll('.tab-button');
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
    const title = item.querySelector('.accordion-title');
    title.addEventListener('click', () => {
        const content = item.querySelector('.accordion-content');
        const isOpen = content.style.display === 'block';
        document.querySelectorAll('.accordion-content').forEach(content => {
            content.style.display = 'none';
            content.style.maxHeight = '0';
        });
        content.style.display = isOpen ? 'none' : 'block';
        content.style.maxHeight = isOpen ? '0' : content.scrollHeight + 'px';
    });
});

const cards = document.querySelectorAll('.results__cards-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(btn => btn.classList.remove('active'));
            card.classList.add('active')
        });
    });

//burger script
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
const headerWrapper = document.querySelector('.header-wrapper')

dropdownToggles.forEach(function(dropdownToggle) {
dropdownToggle.addEventListener('click', function(e) {
    e.preventDefault();
    const dropdownMenu = this.nextElementSibling;
    const parentLi = this.parentElement;

    dropdownMenu.classList.toggle('open');
    parentLi.classList.toggle('open'); 
    
    headerWrapper.classList.toggle('wide');
});
});

})();
