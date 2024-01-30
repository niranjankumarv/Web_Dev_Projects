(function () {
    const customerImage = document.querySelector('#customer-img');
    const customerName = document.querySelector('#customer-name');
    const customerText = document.querySelector('#customer-text');

    const btn = document.querySelectorAll('.btn');
    let index = 0;
    const customers = [];

    function Customer(img, name, text) {
        this.img = img;
        this.name = name;
        this.text = text;
    }

    function createCustomer(img, name, text) {
        let imgUrl = `./Assets/${img}.jpeg`; // Corrected image path
        let newCustomer = new Customer(imgUrl, name, text); // Corrected variable name

        customers.push(newCustomer); // Corrected variable name
    }

    createCustomer(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque molestiae, quaerat corporis iusto eaque aspernatur accusamus error consequatur iste et itaque harum neque tenetur, numquam fugiat, reprehenderit ullam natus.');
    createCustomer(1, 'Scarlet', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque molestiae, quaerat corporis iusto eaque aspernatur accusamus error consequatur iste et itaque harum neque tenetur, numquam fugiat, reprehenderit ullam natus.');
    createCustomer(2, 'Steve', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque molestiae, quaerat corporis iusto eaque aspernatur accusamus error consequatur iste et itaque harum neque tenetur, numquam fugiat, reprehenderit ullam natus.');
    createCustomer(3, 'Jenifer', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque molestiae, quaerat corporis iusto eaque aspernatur accusamus error consequatur iste et itaque harum neque tenetur, numquam fugiat, reprehenderit ullam natus.');
    createCustomer(4, 'Emma', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque molestiae, quaerat corporis iusto eaque aspernatur accusamus error consequatur iste et itaque harum neque tenetur, numquam fugiat, reprehenderit ullam natus.');

    btn.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if (e.target.parentElement.classList.contains('preBtn')) {
                if (index == 0) {
                    index = customers.length;
                }
                index--;
                customerImage.src = customers[index].img;
                customerName.textContent = customers[index].name;
                customerText.textContent = customers[index].text;
            }
            if (e.target.parentElement.classList.contains('nextBtn')) {
                index++;
                if (index === customers.length) {
                    index = 0;
                }

                customerImage.src = customers[index].img;
                customerName.textContent = customers[index].name;
                customerText.textContent = customers[index].text;
            }
        });
    });
})();
