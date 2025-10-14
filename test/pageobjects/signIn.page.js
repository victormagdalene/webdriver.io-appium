import { $ } from '@wdio/globals'

class SignIn {
    get btnSkip() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Skip this for now"]');
    }
}

export default new SignIn();


