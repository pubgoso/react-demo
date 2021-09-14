import { makeAutoObservable } from 'mobx';

class ModalsStore {
    constructor() {
        makeAutoObservable(this);
    }
    modals = {
        "modifyUser": {
            open: false,
            info: {}
        },
        "addQuestion": {
            open: false,
        },
        "modifyQuestion":{
            open: false,
            info: {}
        }
    }


    open = (Name) => {
        console.log('Name=',Name);
        this.modals[Name].open = true;
    }
    close = (Name) => {
        this.modals[Name].open = false;
    }
    setInfo = (Name, info) => {
        this.modals[Name].info = info;
    }
}

export default new ModalsStore();