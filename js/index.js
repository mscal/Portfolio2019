import Tablist from './mainReplacement';

class Tablist{
    constructor(container){
        this.container = container;
        this.list = container.querySelectorAll('.mainpage');
    }
    init(){
        this.list.forEach(item => {
            item.onEventListener('click', e => {
                this.toggleList(e);
                this.toggelContent(e);
            });
        });
    }
    toggleList(e){
        this.list.forEach(item => item.classList.remove('active'));
        e.target.classList.add('active');
    }
    toggleContent(e){
        this.container.querySelectorAll('.content').forEach(item =>{
            item.classList.remove('active');
        });
        const selector = e.target.getAttribute('data-target');
        const content = this.container.querySelector(selector);
            content.classList.add('active');
    }
}

const tablist = new Tablist(document.querySelector('li'));

tablist.init();