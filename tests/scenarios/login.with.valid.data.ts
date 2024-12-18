import loginScreen from "../screenobjects/login";

describe('Login with Valid Data', () => {
    beforeAll (async () => {
        await loginScreen.verifyHomeMenu();
        await loginScreen.tapMasuk1();
        });
    
    it('Klik halaman Masuk', async () => {
        await loginScreen.tapMasuk1();
    })

    it('Input valid Username', async () => {
        await loginScreen.inputUserID('087775009393');
    })

    it('Input valid Password', async () => {
        await loginScreen.inputPassword('Admin@9886');
    })

    it('Klik tombol Masuk', async () => {
        await loginScreen.tapMasuk2();
    })

    it('Login Sukses', async () => {
        await loginScreen.verifyHomeMenu();
        await loginScreen.verifyLoginSukses();
    })
});