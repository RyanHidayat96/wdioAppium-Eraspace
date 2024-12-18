import loginScreen from "../screenobjects/login";

describe('Login with invalid Data', () => {
    beforeAll (async () => {
        await loginScreen.verifyHomeMenu();
        await loginScreen.tapMasuk1();
        });
    
    it('Klik halaman Masuk', async () => {
        await loginScreen.tapMasuk1();
    })

    it('Input format Email tidak sesuai, menampilkan pesan "Format email yang kamu masukkan salah"', async () => {
        await loginScreen.inputUserID('ABCD');
        await loginScreen.verifyEmailTS();
        await loginScreen.clearUserID();
    })

    it('Input Email tidak terdaftar, menampilkan pesan "Email belum terdaftar"', async () => {
        await loginScreen.inputUserID('ABCD@email.com');
        await loginScreen.verifyEmailTT();
        await loginScreen.clearUserID();
    })

    it('Input format No HP tidak sesuai, menampilkan pesan "Format no.handphone yang kamu masukkan salah"', async () => {
        await loginScreen.inputUserID('123456');
        await loginScreen.verifyNoHPTS();
        await loginScreen.clearUserID();
    })

    it('Input No HP tidak terdaftar, menampilkan pesan "No. Handphone belum terdaftar"', async () => {
        await loginScreen.inputUserID('087775000000');
        await loginScreen.verifyNoHPTT();
        await loginScreen.clearUserID();
    })

    it('Input valid username', async () => {
        await loginScreen.inputUserID('exeryanaxe@gmail.com');
    })


    it('Input invalid Password', async () => {
        await loginScreen.inputPassword('1234567');
    })

    it('Klik tombol Masuk', async () => {
        await loginScreen.tapMasuk2();
    })

    it('Login Gagal', async () => {
        await loginScreen.verifyPasswordEmailInvalid();
    })
});