import { $ } from '@wdio/globals'

class InterestsPage {

    get btnTechnology() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Technology"]');
    }
    get btnScience() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Science"]');
    }
    get btnDesign() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Design"]');
    }
    get btnBusiness() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Business"]');
    }
    get btnCollaboration() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Collaboration"]');
    }
    get btnInnovation() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Innovation"]');
    }
    get btnSocialChange() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Social change"]');
    }
    get btnHealth() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Health"]');
    }
    get btnNature() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Nature"]');
    }
    get btnTheEnvironment() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="The environment"]');
    }
    get btnTheFuture() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="The future"]');
    }
    get btnCommunication() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Communication"]');
    }
    get btnActivism() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Activism"]');
    }
    get btnChildDevelopment() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Child development"]');
    }
    get btnPersonalGrowth() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Personal growth"]');
    }
    get btnHumanity() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Humanity"]');
    }
    get btnSociety() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Society"]');
    }
    get btnIdentity() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Identity"]');
    }
    get btnCommunity() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Community"]');
    }
    get btnNext() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Next"]');
    }

    getInterestButton(interest) {
        const interestMap = {
            technology: this.btnTechnology,
            science: this.btnScience,
            design: this.btnDesign,
            business: this.btnBusiness,
            collaboration: this.btnCollaboration,
            innovation: this.btnInnovation,
            socialChange: this.btnSocialChange,
            health: this.btnHealth,
            nature: this.btnNature,
            theEnvironment: this.btnTheEnvironment,
            theFuture: this.btnTheFuture,
            communication: this.btnCommunication,
            activism: this.btnActivism,
            childDevelopment: this.btnChildDevelopment,
            personalGrowth: this.btnPersonalGrowth,
            humanity: this.btnHumanity,
            society: this.btnSociety,
            identity: this.btnIdentity,
            community: this.btnCommunity,
        };
        return interestMap[interest];
    }
}



export default new InterestsPage();
