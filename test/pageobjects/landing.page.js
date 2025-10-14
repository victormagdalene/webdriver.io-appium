import { $ } from '@wdio/globals'
class LandingPage {

    get btnLetsGo () {
        return $('//android.widget.Button[@resource-id="Next"]');
    }

    get signIn () {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Already have a TED account? Sign in"]');
    }

    get welcomeLabel () {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Welcome to "]');
    }

    get splash () {
        return $('//android.view.ViewGroup[@resource-id="SplashScreen"]/android.widget.ImageView');
    }

}

export default new LandingPage();
