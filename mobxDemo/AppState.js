import {action, autorun, computed, configure, observable} from "mobx";

//开启严格模式
configure({enforceActions: true})

class AppState {
    @observable
    timer = 1;
    @observable
    timer2 = 1;

    constructor() {
        autorun((timer) => {
            console.log(this.timer)
        }, {delay: 1000})
    }

    @computed
    get total() {
        return this.timer * this.timer2;
    }

    @action
    addTimers() {
        this.timer += 1
        // console.log(this.timer)
    }

    @action
    resetTimer() {
        this.timer = 0;
        // console.log(this.timer)
    }

    @action
    addTimers2() {
        this.timer2 += 1
        // console.log(this.timer)
    }

    @action
    resetTimer2() {
        this.timer2 = 0;
        // console.log(this.timer)
    }
}

export default new AppState()


// autorun(()=>{
//     console.log(this.timer)
// })