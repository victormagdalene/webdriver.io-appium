import { $ } from '@wdio/globals'

class LookingForPage {


    get btnFreshInsightsAndKnowledge() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Fresh insights and knowledge"]');
    }

    get btnANewPerspective() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="A new perspective"]');
    }

    get btnInspirationOrMotivation() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Inspiration or motivation"]');
    }

    get btnIdeasForSelfImprovement() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Ideas for self-improvement"]');
    }

    get btnSmartEntertainment() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Smart entertainment"]');
    }

    get btnInsightsAboutIssuesThatMatter() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Insights about issues that matter"]');
    }

    get btnAGlimpseIntoTheFuture() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="A glimpse into the future"]');
    }

    get btnASenseOfHope() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="A sense of hope"]');
    }

    get btnProfessionalGrowth() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Professional growth"]');
    }

    get btnNext() {
        return $('//android.widget.TextView[@resource-id="Typography" and @text="Next"]');
    }
    getLookingForButton(subject) {
        const subjectMap = {
            freshInsightsAndKnowledge: this.btnFreshInsightsAndKnowledge,
            aNewPerspective: this.btnANewPerspective,
            inspirationOrMotivation: this.btnInspirationOrMotivation,
            ideasForSelfImprovement: this.btnIdeasForSelfImprovement,
            smartEntertainment: this.btnSmartEntertainment,
            insightsAboutIssuesThatMatter: this.btnInsightsAboutIssuesThatMatter,
            aGlimpseIntoTheFuture: this.btnAGlimpseIntoTheFuture,
            aSenseOfHope: this.btnASenseOfHope,
            professionalGrowth: this.btnProfessionalGrowth,
        };
        return subjectMap[subject];
    }

}

export default new LookingForPage();
