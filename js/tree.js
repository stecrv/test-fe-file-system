var TreeTest = [
    {id: 0, name:'a', type:'folder', parent:false},
    {id: 1, name:'b', type:'folder', parent:false},
    {id: 2, name:'c', type:'folder', parent:false},
    {id: 3, name:'zzz.jpg', type:'file', parent:false},
    {id: 4, name:'xxx.jpg', type:'file', parent:false},
    {id: 5, name:'yyy.jpg', type:'file', parent:false},
    {id: 6, name:'aaa.jpg', type:'file', parent:1},
    {id: 7, name:'aaaa.jpg', type:'file', parent:1},
    {id: 8, name:'aaaaa.jpg', type:'file', parent:1},
    {id: 9, name:'bbb.jpg', type:'file', parent:2},
    {id: 10, name:'bbbb.jpg', type:'file', parent:2},
    {id: 11, name:'bbbbb.jpg', type:'file', parent:2},
];



var Tree = {
    el:'tree',
    data: [], //contain three
    init: function(testData,opt){
        if(testData){
            this.data = testData;
        }
        this.render();
    },
    add: function(name, type, parent){

    },
    delete: function(id){

    },
    _renderFolder: function(el){
        return '<div class="folder">'+el.name+'</div>'
    },
    _renderFile: function(el){
        return '<div class="file">'+el.name+'</div>'
    },
    _renderEl: function(el){
        var r  = false;
        if(el.type=='file'){
            r =  this._renderFile(el);
        }else if(el.type=='folder'){
            r  = this._renderFolder(el);
        }
        return r;
    },
    _renderBranch: function () {

    },
    render: function(){
        var container = $('#'+this.el);
        var html = '';
        this.data.forEach(function(el, i, array) {
            if(!el.parent){ // root element
                html += this._renderEl(el)
            }
        }.bind(this));
        container.html(html);
    }
}

window.TreeTest = TreeTest;
window.Tree = Tree;
