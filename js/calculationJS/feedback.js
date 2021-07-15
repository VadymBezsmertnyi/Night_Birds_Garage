const btn= document.querySelector('.btnBuy');


    btn.addEventListener('click', ()=>{
        const textShop = document.querySelectorAll('.nameServiceShoping'),
                  price = document.querySelectorAll('.priceServiceShoping'),
                  textFeedback = document.querySelector('#listOrders'),
                  modal = document.querySelector('.modal'),
                  machFrom = document.querySelector('#machFrom').innerHTML,
                  machTo = document.querySelector('#machTo').innerHTML;

        textFeedback.innerHTML = "Замовлення:\n";

        textShop.forEach((text, i) =>{
            var textNew = text.innerHTML.substr(40);
            textFeedback.innerHTML += `${textNew} = ${price[i].innerHTML} \n`;
            console.log(textNew, price[i].innerHTML);
            console.log(textFeedback.innerHTML);
        });
            console.log(textFeedback.innerHTML);
            modal.style.display = "";
            textFeedback.innerHTML += `Разом: від ${machFrom} до ${machTo} грн.\n`;
            textFeedback.innerHTML += `Щоб взнати точну ціну ремонту/обслуговуванню вашого мотоцикла запомніть форму`;
    });