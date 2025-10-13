import { $ } from '@wdio/globals'

class MainPage {


    get btnHome() {
        return $('//android.view.View[@resource-id="BottomTab_Home"]');
    }
    get btnBrowse() {
        return $('//android.view.View[@resource-id="BottomTab_Discover"]');
    }
    get btnSurpriseMe() {
        return $('//android.view.View[@resource-id="BottomTab_SurpriseMe"]');
    }
    get btnMyLibrary() {
        return $('//android.view.View[@resource-id="BottomTab_MyLibrary"]');
    }
    get btnPodcasts() {
        return $('//android.view.View[@resource-id="BottomTab_Podcasts"]');
    }
    getMenusButton(menu) {
        const menuMap = {
            home: this.btnHome,
            browse: this.btnBrowse,
            surpriseMe: this.btnSurpriseMe,
            myLibrary: this.btnMyLibrary,
            podcasts: this.btnPodcasts,
          };
        return menuMap[menu];
    }

}



export default new MainPage();






