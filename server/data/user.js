import bcrypt from 'bcryptjs';

const users = [
    {
        name: "Admin",
        email: "victoryexcel2018@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true
    },
    {
        name: "User",
        email: "user@email.com",
        password: bcrypt.hashSync("123456", 10),
    }
];

export default users;