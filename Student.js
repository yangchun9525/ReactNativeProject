export default class Student {
    constructor(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }

    getDesc() {
        return '姓名:' + this.name + '性別:' + this.sex + '年齡:' + this.age;
    }
}
