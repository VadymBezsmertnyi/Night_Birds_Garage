window.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.querySelectorAll('.listCheckbox input'),
        nameRepair = document.querySelectorAll('.nameRepair'),
        priceRepair = document.querySelectorAll('.priceRepair'),
        listBuy = document.querySelector('#list'),
        machFrom = document.querySelector('#machFrom'),
        machTo = document.querySelector('#machTo');
    var imgBuy = document.querySelectorAll('.listShoping img'),
        money = document.querySelectorAll('.priceServiceShoping');

    checkbox.forEach((check, i) => {
        check.addEventListener('click', () => {
            if (check.checked === true) {
                check.disabled = true;
                listBuy.innerHTML += `<div id="${i}" class="listShoping">
                <div class="nameServiceShoping"><img src="icons/recycle_bin.png" alt=""> ${nameRepair[i].innerHTML}
                </div>
                <div class="priceServiceShoping">${priceRepair[i].innerHTML}</div>
            </div>`;
            }
            imgBuy = document.querySelectorAll('.listShoping img');
            money = document.querySelectorAll('.priceServiceShoping');
            console.log(money);
            removeID();
            addMoney();
        });
    });

    function removeID() {
        imgBuy.forEach((img, i) => {
            img.addEventListener('click', () => {
                img.parentElement.parentElement.remove();
                let id = img.parentElement.parentElement.id;
                checkbox[id].disabled = false;
                checkbox[id].checked = false;
                removeMoney(i);
            });
        });

    }

    function addMoney() {
        var summStart = 0,
            summFinish = 0;
        money.forEach(mon => {
            if (mon.innerHTML.search('-') >= 1) {
                var moneyStartFinish = mon.innerHTML.split('\-');
                summStart += Number(moneyStartFinish[0].replace(/\D+/g, ""));
                summFinish += Number(moneyStartFinish[1].replace(/\D+/g, ""));
            }
            else {
                summStart += Number(mon.innerHTML.replace(/\D+/g, ""));
                summFinish += Number(mon.innerHTML.replace(/\D+/g, ""));
            }
        });
        console.log(`Ціна: від ${summStart} до ${summFinish} грн`);
        machFrom.innerHTML = summStart;
        machTo.innerHTML = summFinish;
    }

    function removeMoney(i) {
        var summStart = machFrom.innerHTML,
            summFinish = machTo.innerHTML;

            console.log(`Було: від ${summStart} до ${summFinish} грн`);
            if (money[i].innerHTML.search('-') >= 1) {
                var moneyStartFinish = money[i].innerHTML.split('\-');
                summStart -= Number(moneyStartFinish[0].replace(/\D+/g, ""));
                summFinish -= Number(moneyStartFinish[1].replace(/\D+/g, ""));
            }
            else {
                summStart -= Number(money[i].innerHTML.replace(/\D+/g, ""));
                summFinish -= Number(money[i].innerHTML.replace(/\D+/g, ""));
            }
        console.log(`Ціна: від ${summStart} до ${summFinish} грн`);
        machFrom.innerHTML = summStart;
        machTo.innerHTML = summFinish;
    }
});