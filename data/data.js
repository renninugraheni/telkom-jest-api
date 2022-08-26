const { faker } = require('@faker-js/faker');

const dataPost = {
    user: {
        currency_id: 2,
        email: faker.internet.email(),
        first_name: faker.name.firstName(),
        last_name: "test",
        password: "testtest",
        phone_number: faker.phone.number('+62-###########'),
        user_type: "User"
    }
};

const emptyData = {
    user: {
        currency_id: 2,
        email: faker.internet.email(),
        first_name: "",
        last_name: "test",
        password: "",
        phone_number: "",
        user_type: "User"
    }
};

const duplicateEmail = {
    user: {
        currency_id: 2,
        email: "",
        first_name: faker.name.firstName(),
        last_name: "test",
        password: "testtest",
        phone_number: faker.phone.number('+62-###########'),
        user_type: "User"
    }
};

module.exports = {
dataPost,
emptyData,
duplicateEmail,
};
