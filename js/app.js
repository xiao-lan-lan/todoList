//1.遍历数组,创建li
//2.输入框keyup事件
new Vue({
    el: '#app',
    data: {
        msg: '',
        // editing: false,
        flag: false,
        aaa: false,
        arr: [
            { id: 1, title: '吃饭', done: false, editing: false },
            { id: 2, title: '睡觉', done: false, editing: false },
            { id: 3, title: '打豆豆', done: false, editing: false },
            { id: 4, title: '敲代码', done: false, editing: false }
        ],
        list: [
            { id: 1, title: '吃饭', done: false, editing: false },
            { id: 2, title: '睡觉', done: false, editing: false },
            { id: 3, title: '打豆豆', done: false, editing: false },
            { id: 4, title: '敲代码', done: false, editing: false }
        ],
        checkItem: [],
        activearr: [],
        completedarr: [],
        temp: [],
    },
    methods: {
        add: function() {
            this.list.unshift({
                id: Math.random(),
                title: this.msg,
                done: false
            })
            this.msg = '';
            this.temp = this.list;
        },
        onchange: function(id, e) {
            console.log(e.target.checked);
            //3.拿到点击复选框的Id，遍历是数组中的哪一个，如果是被选中的，把done改为true，done绑定Li的类名
            this.list.forEach((item) => {
                    if (item.id == id) {
                        if (e.target.checked) {
                            item.done = true;
                        } else {
                            item.done = false;
                        }
                        console.log(id);
                    }
                })
                //4.没做的有多少，就是list数组长度-checkItem数组长度，

            //12.反选
            if (this.checkItem.length == this.list.length) {
                this.aaa = true
            } else {
                this.aaa = false
            }
        },

        //5.点击active,显示未完成的li，done为false的，隐藏done为true的
        //6.点击completed,显示完成的li，done为true的，隐藏done为false的
        active: function() {

            if (this.arr.length != this.list.length) {
                this.list = this.arr
            }
            //遍历list，返回done为false的，赋值给list
            let a = this.temp.filter((item) => {
                return item.done == false
            })
            this.list = a
        },
        completed: function() {
            if (this.arr.length != this.list.length) {
                this.list = this.arr
            }

            //遍历list，返回done为true的，赋值给list
            let b = this.temp.filter((item) => {
                return item.done == true;
            })
            this.list = b
        },
        all: function() {
            this.list = this.temp
        },

        //7.删除完成的，即done为true的
        del: function() {
            this.list.forEach((item, i) => {
                if (item.done) {
                    console.log(item);

                    this.list.splice(i, 1)
                }

                // for (var i = 0; i < this.list.length; i++) {
                //     if (this.list[i].done) {
                //         this.list.splice(i, 1)
                //     }
                // }
            })
        },

        //8.单个删除，Id传过来
        dele: function(id) {
            this.list.forEach((item, i) => {
                if (item.id == id) {
                    this.list.splice(i, 1)
                }
            })
        },

        //9.双击，变input
        changeinput: function(id) {
            this.list.forEach((item) => {
                if (item.id == id) {
                    item.editing = true
                } else {
                    item.editing = false
                }
            })
        },

        //10.回车，变label
        changelabel: function() {
            this.list.forEach((item) => {
                item.editing = false
            })
        },

        //11.全选
        checkall: function(e) {
            console.log(e.target.previousElementSibling.checked);

            this.list.forEach((item) => {
                if (!e.target.previousElementSibling.checked) {
                    item.done = true;
                    this.checkItem.push(item.id)
                } else {
                    item.done = false;
                    this.checkItem = []
                }
            })

        }
    }
})