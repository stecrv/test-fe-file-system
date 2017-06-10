var TreeTest = [
    {id: 0, name: 'a', type: 'folder', parent: false},
    {id: 1, name: 'b', type: 'folder', parent: false},
    {id: 2, name: 'c', type: 'folder', parent: false},
    {id: 3, name: 'zzz.jpg', type: 'file', parent: false},
    {id: 4, name: 'xxx.jpg', type: 'file', parent: false},
    {id: 5, name: 'yyy.jpg', type: 'file', parent: false},
    {id: 6, name: 'aaa.jpg', type: 'file', parent: 1},
    {id: 7, name: 'aaaa.jpg', type: 'file', parent: 1},
    {id: 8, name: 'aaaaa.jpg', type: 'file', parent: 1},
    {id: 9, name: 'bbb.jpg', type: 'file', parent: 2},
    {id: 10, name: 'bbbb.jpg', type: 'file', parent: 2},
    {id: 11, name: 'bbbbb.jpg', type: 'file', parent: 2},
];


var Tree = {
    el: 'tree',
    data: [], //contain three
    init: function (testData, opt) {
        if (testData) {
            this.data = testData;
        }
        this.render();
    },
    add: function (name, type, parent) {

    },
    delete: function (id) {

    },
    _renderFolder: function (el, deep) {
        return '<div class="folder deep'+deep+'" rel="' + el.id + '"><i class="icono-folder"></i><div class="name">' + el.name + '</div></div>'
    },
    _renderFile: function (el,deep) {
        return '<div class="file deep'+deep+'"  rel="' + el.id + '"><i class="icono-file"></i><div class="name">' + el.name + '</div></div>'
    },
    _renderEl: function (el, deep) {
        var r = '';
        var subdir = '';
        if (el.type == 'file') {
            r = this._renderFile(el, deep);
        } else if (el.type == 'folder') {
            r = this._renderFolder(el, deep);
            if(el.subdir) {
                for (var els in el.subdir) {
                        subdir += this._renderEl(el.subdir[els], (deep +1 ));
                }
                r += subdir;
            }
        }
        return r;
    },
    render: function () {
        var container = $('#' + this.el);
        var html = '';
        var fs = {};
        var branches = {};

        this.data.forEach(function (el, i, array) {
            if (!el.parent) { // root element
                //html += this._renderEl(el)
                el.subdir = null;
                fs[el.id] = el;
            }

            if(el.parent){
                if(!branches.hasOwnProperty(el.parent) ) branches[el.parent] = new Array();
                branches[el.parent].push(el);
            }

        }.bind(this));


        for (var parentId in branches) {
            fs[parentId].subdir = branches[parentId]
        }

        for (var el in fs) {
            if (!el.parent) {
                html += this._renderEl(fs[el],0)
            }
        }
        container.html(html);
    }
};
window.TreeTest = TreeTest;
window.Tree = Tree;
