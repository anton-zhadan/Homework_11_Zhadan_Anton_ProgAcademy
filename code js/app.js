/*
Завдання 1

Створи клас, який буде створювати користувачів з ім'ям та прізвищем. Додати до класу метод для виведення імені та прізвища
*/

const createUsers = () => {
    let container_output_user = document.createElement('div');
    container_output_user.style.display = 'flex';
    container_output_user.style.justifyContent = ('center');
    container_output_user.style.alignItems = ('center');
    container_output_user.style.width = ('200px');
    container_output_user.style.height = ('100px');
    container_output_user.style.backgroundColor = ('silver');
    document.body.prepend(container_output_user);

    class ShowUsers {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

         show() {
            return container_output_user.innerHTML = `Name: ${this.firstName}; <br> LastName: ${this.lastName}.`;
        }
    }

    let user = new ShowUsers('Anton', 'Zhadan');
    user.show();
}

createUsers();

/*
Завдання 2

Створи список, що складається з 4 аркушів. 
Використовуючи джс зверніся до 2 li і з використанням навігації по DOM дай 1 елементу синій фон, а 3 червоний
*/

const createTable = () => {
    let first_li = document.getElementsByTagName('li')[1];
    let third_li = document.getElementsByTagName('li')[3];

    first_li.style.background = ('blue');
    third_li.style.background = ('red');
}

createTable();



/*
Завдання 3 

Створи див висотою 400 пікселів і додай на нього подію наведення мишки. 
При наведенні мишки виведіть текст координати, де знаходиться курсор мишки
*/

const divMouseEvent = () => {
    let create_div = document.createElement('div');
    create_div.style.height = ('400px');
    create_div.style.background = ('silver');
    create_div.style.borderRadius = ('5px');

    
    document.body.append(create_div);

    create_div.addEventListener('mouseover', (e) => {
    create_div.innerHTML = `X: ${e.clientX}/ Y: ${e.clientY}`;
    })
}

divMouseEvent();




/*
Завдання 4

Створи кнопки 1,2,3,4 і при натисканні на кнопку виведи інформацію про те, яка кнопка була натиснута
*/

const pressButtons = () => {
    let container = document.createElement('div');
    container.classList.add('buttons');

    document.body.append(container);

    let button_1 = document.createElement('input');
    button_1.setAttribute("type", "button"); 
    button_1.setAttribute("value", "1");

    let button_2 = document.createElement('input');
    button_2.setAttribute("type", "button"); 
    button_2.setAttribute("value", "2");

    let button_3 = document.createElement('input');
    button_3.setAttribute("type", "button"); 
    button_3.setAttribute("value", "3");

    let button_4 = document.createElement('input');
    button_4.setAttribute("type", "button"); 
    button_4.setAttribute("value", "4");

    
    container.append(button_1);
    container.append(button_2);
    container.append(button_3);
    container.append(button_4);

    button_1.style.width = ('50px');
    button_2.style.width = ('50px');
    button_3.style.width = ('50px');
    button_4.style.width = ('50px');

    button_1.style.height = ('20px');
    button_2.style.height = ('20px');
    button_3.style.height = ('20px');
    button_4.style.height = ('20px');

    button_1.style.marginRight = ('20px');
    button_2.style.marginRight = ('20px');
    button_3.style.marginRight = ('20px');

    button_1.style.marginTop = ('20px');

    let all_buttons = document.querySelector('.buttons');
    let text = document.createElement("p");
    button_4.after(text);
    all_buttons.addEventListener("click", (e) => {
        text.innerText = `Натиснута кнопка: ${e.target.value}`;    
    })
}

pressButtons();

/*
Завдання 5

Створи див і зроби так, щоб при наведенні на див див змінював своє положення на сторінці
*/

const divChangeSide = () => {
    let div = document.createElement('div');
    div.style.width = ('300px');
    div.style.height = ('300px');
    div.style.marginLeft = ('30px');
    div.style.marginTop = ('30px');
    div.style.background = ('yellow');
    div.style.position = ('relative');

    document.body.append(div);

    div.addEventListener('mouseover', (e) =>{
        e.target.classList.add('left_side')
        })
        div.addEventListener('mouseout', (e) =>{
            e.target.classList.remove('left_side');
        })
}

divChangeSide();


/*
Завдання 6

Створи поле для введення кольору, коли користувач вибере якийсь колір, зроби його фоном body
*/

const changeColorBody = () => {
    let input_color = document.createElement('input');
    input_color.setAttribute('type', 'color');
    input_color.style.marginTop = ('50px');
    input_color.style.marginLeft = ('50px');    

    document.body.append(input_color);

    input_color.addEventListener('input', (e) =>{
        document.body.style.backgroundColor = e.target.value;
    })
}

changeColorBody();


/*
Завдання 7

Створи інпут для введення логіну, коли користувач почне вводити дані в інпут виводь їх в консоль
*/

const enterLoginUser = () => {
    let input_login = document.createElement('input');
    input_login.setAttribute('type', 'text');
    input_login.style.marginTop = ('50px');
    input_login.style.marginLeft = ('50px');
    
    document.body.append(input_login);

    input_login.addEventListener('input', (e) =>{
        console.log(e.target.value);
    })
}

enterLoginUser()



/*
Завдання 8

Створіть поле для введення даних у полі введення даних виведіть текст під полем
*/

const enterText = () => {
    let container = document.createElement('div');
    container.style.marginTop = ('50px');
    document.body.append(container);

    let input_text = document.createElement('input');
    input_text.placeholder = 'Введіть бажаний текст';
    let text_below = document.createElement('p');

    container.after(input_text);
    input_text.after(text_below);

    input_text.addEventListener('change', (e) => {
        text_below.innerText = e.target.value;
        })
}

enterText();