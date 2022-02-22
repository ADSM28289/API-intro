// JavaSript Object Notation
// JSON
const user = { id: 11, name: 'Gorb Amir', job: 'actor' };
const stringlified = JSON.stringify(user);
// console.log(user);
// console.log(stringlified);

const shop = {
    name: 'Alia Stor',
    address: 'Ranbir road',
    profit: 15000,
    Products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        proffesion: 'actor'
    },
    isExpensive: false
};
const shopStringiFied = JSON.stringify(shop);
// console.log(shopStringiFied);

const converted = JSON.parse(shopStringiFied);
// console.log(converted);