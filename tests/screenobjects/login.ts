import { setUiSelectorByText, setUiSelectorById } from '../helpers/common';

class FormLogin {
 
    private get btnHome() {return $('(//android.widget.ImageView[@resource-id="com.eraspace.app:id/navigation_bar_item_icon_view"])[1]');}
    private get btnMobilePhone() {return $(setUiSelectorByText('Mobile Phone'));}
    private get btnMobileAccessories() {return $(setUiSelectorByText('Mobile Accessories'));}
    private get btnMobileTablet() {return $(setUiSelectorByText('Mobile Tablet'));}
    private get btnTablet() {return $(setUiSelectorByText('Tablet'));}
    private get btnMasuk1() {return $('//android.widget.Button[@resource-id="com.eraspace.app.home:id/btnLogin"]');}
    private get txtUserID() {return $('//android.widget.EditText[@resource-id="com.eraspace.app.membership:id/edtPhoneOrEmail"]');}
    private get txtPassword() {return $('//android.widget.EditText[@resource-id="com.eraspace.app.membership:id/edtPassword"]');}
    private get btnMasuk2() {return $(setUiSelectorByText('Masuk'));}

    private get emailTidakSesuai() {return $(setUiSelectorByText('Format email yang kamu masukkan salah'));}
    private get emailTidakTerdaftar() {return $(setUiSelectorByText('Email belum terdaftar'));}
    private get NoHPTidakSesuai() {return $(setUiSelectorByText('Format no.handphone yang kamu masukkan salah'));}
    private get NoHPTidakTerdaftar() {return $(setUiSelectorByText('No. Handphone belum terdaftar'));}
    private get pesanPasswordEmailSalah() {return $('//android.widget.TextView[@resource-id="com.eraspace.app.membership:id/tvError"]');}

    private get qrCode() {return $('//android.widget.ImageView[@resource-id="com.eraspace.app.home:id/imgQrCode"]');}
    private get layerPoint() {return $('//android.view.View[@resource-id="com.eraspace.app.home:id/layerPoint"]');}
    private get layerLoyalty() {return $('//android.view.View[@resource-id="com.eraspace.app.home:id/layerLoyalty"]');}

    private get btnAkun() {return $('(//android.widget.ImageView[@resource-id="com.eraspace.app:id/navigation_bar_item_icon_view"])[5]');}
    private get namaAkun() {return $(setUiSelectorByText('Ryan Hidayat'));}

    async tapMasuk1() {
        await (await this.btnMasuk1).click();
    }

    async inputUserID(userID: string) {
        await this.txtUserID.setValue(userID);
    }

    async clearUserID() {
        await this.txtUserID.clearValue(); 
    }

    async inputPassword(password: string) {
        await this.txtPassword.setValue(password);
    }

    async clearPassword() {
        await this.txtPassword.clearValue(); 
    }

    async tapMasuk2() {
        await (await this.btnMasuk2).click();
    }

    async verifyHomeMenu() {
        await (await this.btnHome).isDisplayed();
        await (await this.btnMobilePhone).isDisplayed();
        await (await this.btnMobileAccessories).isDisplayed();
        await (await this.btnMobileTablet).isDisplayed();
        await (await this.btnTablet).isDisplayed();
    }

    async verifyEmailTS() {
        await (await this.emailTidakSesuai).waitForDisplayed();
    }

    async verifyEmailTT() {
        await (await this.emailTidakTerdaftar).waitForDisplayed();
    }

    async verifyNoHPTS() {
        await (await this.NoHPTidakSesuai).waitForDisplayed();
    }

    async verifyNoHPTT() {
        await (await this.NoHPTidakTerdaftar).waitForDisplayed();
    }

    async verifyPasswordEmailInvalid() {
        await (await this.pesanPasswordEmailSalah).waitForDisplayed();
    }

    async verifyLoginSukses() {
        await (await this.qrCode).waitForDisplayed();
        await (await this.layerPoint).waitForDisplayed();
        await (await this.layerLoyalty).waitForDisplayed();
        await (await this.btnAkun).click();
        await (await this.namaAkun).waitForDisplayed();
    }
    
}
export default new FormLogin();
