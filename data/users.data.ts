export const UsersData = {

    validLogin: {
        email: "fulano@qa.com",
        password: "teste"
    },
};

export function generateUser() {
    const random = Math.floor(Math.random() * 10000);

    return {
        nome: `Usuário Teste ${random}`,
        email: `usuario${random}@teste.com`,
        password: "123456",
        administrador: "true"
    };
}