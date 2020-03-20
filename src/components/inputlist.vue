<template>
<div class="inputlist">
    {{list}}
    <!-- <span class="no-task-tip" v-show="!list.length">还没有添加任何任务</span> -->
    <ul class="todo-list">
        <li 
            class="todo" 
            v-for="(item,index) in list" :key="index"
            :class="{editing:item.title===copy_item}"
            @dblclick="dbclcik(item)"
            
            >
            <div class="view">
                <input class="toggle " type="checkbox" v-model="item.istrue"/>
                <label >{{item.title}}</label>
                <button class="destroy" @click="input_remove(index)"></button>
            </div>
            <input  
                class="edit" 
                type="text" 
                @keyup.enter="inputlist_edit(item)"
                @blur="inputlist_edit(item)"
                @keyup.esc="inputlist_edit(item)"
                v-model="copy_item"
                v-focus="item.title===copy_item"
            />
        </li>
    </ul>
</div>
</template>
<script>
export default{
    name:"inputlist",
    props: {
        list:Array
    },
    data () {
        return {
            
            copy_item:"",
            
        }
    },
    methods: {
        input_remove(index){
            this.$emit("input_remove",index);
            
        },
        dbclcik(item){
            this.copy_item=item.title;
            
        },
         inputlist_edit(item){
            item.title=this.copy_item;
            this.copy_item="";
            
    
            
         }
    },
    directives: {
        "focus":{
            update(el,binding){
                if(binding.value){
                    el.focus();
                }
            }
        }
    }

}
</script>
<style>
.tasks {
    background-color: #fff;
}
.no-task-tip {
    padding:10px 0 10px 10px;
    display: block;
    border-bottom: 1px solid #ededed;
    color:#777;
}

.big-title {
    color: #222;
}


.todo-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.todo-list li {
    position: relative;
    font-size: 16px;
    border-bottom: 1px solid #ededed;
}

.todo-list li:hover {
    background-color: #fafafa;
}


.todo-list li.editing {
    border-bottom: none;
    padding: 0;
}

.todo-list li.editing .edit {
    display: block;
    width: 506px;
    padding: 13px 17px 12px 17px;
    margin: 0 0 0 43px;
}

.todo-list li.editing .view {
    display: none;
}

.todo-list li .toggle {
    text-align: center;
    width: 40px;
    /* auto, since non-WebKit browsers doesn't support input styling */
    height: auto;
    position: absolute;
    top: 5px;
    bottom: 0;
    margin: auto 0;
    border: none; /* Mobile Safari */
    -webkit-appearance: none;
    appearance: none;
}

.toggle {
    text-align: center;
    width: 40px;
    /* auto, since non-WebKit browsers doesn't support input styling */
    height: auto;
    position: absolute;
    top: 5px;
    bottom: 0;
    margin: auto 0;
    border: none; /* Mobile Safari */
    -webkit-appearance: none;
    appearance: none;
}

 .toggle:after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="40" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
}

.toggle:checked:after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="40" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
}

.todo-list li label {
    white-space: pre-line;
    word-break: break-all;
    padding: 15px 60px 15px 15px;
    margin-left: 45px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
}

.todo-list li.completed label {
    color: #d9d9d9;
    text-decoration: line-through;
}

/*.tip-toggle {
    padding-left: 0;
    position: relative;
}

.tip-toggle .toggle {
    top: -2px;
}

.tip-toggle span {
    margin-left: 45px;
}*/

.todo-list li .destroy {
    display: none;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
}

.todo-list li .destroy:hover {
    color: #af5b5e;
}

.todo-list li .destroy:after {
    content: '×';
}

.todo-list li:hover .destroy {
    display: block;
}

.todo-list li .edit {
    display: none;
}

.todo-list li.editing:last-child {
    margin-bottom: -1px;
}
</style>