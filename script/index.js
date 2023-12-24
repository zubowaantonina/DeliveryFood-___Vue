const modalFunc = () => {
    const modal = document.querySelector('.cart-modal__overlay')
    const cartBtn = document.querySelector('#cart-button')

    const openModal = () => {
        modal.classList.add('open')
    }
    const closeModal = () => {
        modal.classList.remove('open')
    }

    cartBtn.addEventListener('click', () => {
        openModal()
    })
    modal.addEventListener('click', (event) => {
        if (event.target.classList.contains('cart-modal__overlay') || event.target.closest('.cart-modal__header--close')) {
            closeModal()
        }
    })
}

const restsFunc = () => {
    const container = document.querySelector('#reasts-container');

    const restArray = [
        {
            id: 0,
            title: 'Пицца плюс',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца ',
            image: 'pizza-plus.jpg'
        },
        {
            id: 1,
            title: 'Тануки ',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца ',
            image: 'tanuki.jpg'
        },
        {
            id: 2,
            title: 'FoodBand',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца ',
            image: 'foodband.jpg'
        },
        {
            id: 3,
            title: 'Жадина-пицца',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца ',
            image: 'Greedypizza.jpg'
        },
        {
            id: 4,
            title: 'Точка еды',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца ',
            image: 'FoodPoint.jpg'
        },
        {
            id: 5,
            title: 'PizzaBurger',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца ',
            image: 'PizzaBurger.jpg'
        }
    ];

    const loading = () => {
        container.innerHTML = '<p style="width:100%; text-align:center">Загрузка</p>'
    }
    const renderRests = (array) => {
        container.innerHTML = ''
        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
           <a href="goods.html?id=${card.id}"  class="products-card">
       		<div class="products-card__image">
       			<img src="./img/rests/${card.image}" alt="pizza-plus" />
       		</div>
       		<div class="products-card_description">
       			<div class="products-card_description-row">
       				<h4 class="products-card_description--title">${card.title}</h4>
       				<div class="products-card_description--badge">${card.time} мин</div>
       			</div>
       			<div class="products-card_description-row">
       				<div class="products-card_description-info">
       					<div class="products-card_description-info--rating">
       						<img src="img/icon/Star.svg" alt="star" />${card.rating}
       					</div>
       					<div class="products-card_description-info--price">
       						От ${card.price} ₽
                              
       					</div>
                           <div class="products-card_description-info--group">
                           ${card.type}
                       </div>
       				</div>
       			</div>
       		</div>
       	</a>
       `)
        })
    }
    if (container) {
        loading();
        setTimeout(() => {
            renderRests(restArray)
        }, 1000)
    }
}
const goodsFunc=() => {
    const container = document.querySelector('#goods-container');

    const goodsArray = [
        {
            id: 0,
            title: 'Ролл угорь стандарт',
            ingredients:'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            price: 250,
            image: 'Eel_roll_standard.jpg'
        },
        {
            id: 1,
            title: 'Калифорния лосось стандарт',
            ingredients:'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            price: 395,
            image: 'California_salmon_standard.jpg'
        },
        {
            id: 2,
            title: 'Окинава стандарт',
            ingredients:' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            price: 250,
            image: 'Okinawa_standard.jpg'
        },
        {
            id: 3,
            title: 'Цезарь маки хl',
            ingredients:'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            price:250,
            image: 'Caesar_maki_xl.jpg'
        },
        {
            id: 4,
            title: 'Ясай маки стандарт 185 г',
            ingredients:'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            price: 250,
            image: 'Yasai_maki_standard.jpg'
        },
        {
            id: 5,
            title: 'Ролл с креветкой стандарт',
            ingredients:'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            price: 250,
            image: 'Shrimp _oll_standard.jpg'
        }
    ];
    const loading = () => {
        container.innerHTML = '<p style="width:100%; text-align:center">Загрузка</p>'
    }
    const renderGoods = (array) => {
        container.innerHTML = ''
        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
            <div class="products-card">
            <div class="products-card__image">
                <img src="./img/goods/${card.image}" alt="Eel_roll_standard">
            </div>
            <div class="products-card_description">
                <div class="products-card_description-row">
                    <h5 class="products-card_description-name">${card.title}</h5>
                </div>
                <div class="products-card_description-row">
                    <p class="products-card_description-text">${card.ingredients}</p>
                </div>
                <div class="products-card_description-row">
                    <div class="products-card_description-controls">
                        <button class="btn btn-primary">
                            В корзину
                            <img src="img/icon/shopping-cart-white.svg" alt="cart-white" />
                        </button>
                        <span class="products-card_description-controls--price">${card.price} ₽</span>
                    </div>
                </div>
            </div>
        </div>
       `)
        })
    }
    if (container) {
        loading();
        setTimeout(() => {
            renderGoods(goodsArray)
        }, 1000)
    }
}

modalFunc();
restsFunc();
goodsFunc()