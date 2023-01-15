function Vote(questions, smiles) {
    this.questions = questions;
    this.smiles = smiles;
    this.counter = {};

    this.render = () => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("div");
        const questionWrapper = document.createElement("p");
        questionWrapper.innerText = this.questions;
        wrapper.append(questionWrapper);

        this.smiles.forEach((smile) => {
            const button = document.createElement("button");
            button.innerHTML = smile;
            button.classList.add("button_smile");

            const counterWrapper = document.createElement("span");
            this.counter[smile] = 0;
            button.onclick = () => {
                this.counter[smile] += 1;
                counterWrapper.innerText = this.counter[smile];
            };
            counterWrapper.classList.add("counter_smile");
            button.append(counterWrapper);

            wrapper.append(button);
        });
        document.body.append(wrapper);
    };
}



const vote1 = new Vote("how are you", ["&#128521;", "&#128528;", "&#128541;"]);
vote1.render();


