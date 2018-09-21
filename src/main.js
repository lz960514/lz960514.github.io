import Vue from "vue/dist/vue.esm";

import Data from "./datas";

import "./jq_dom"; // 引入jquery操作dom模块

import "../css/normalize.css";

import "../less/style.less";

Vue.component("VsCode", {
    template: `
        <div class="main">
            <div class="right">
                <div class="r_content">
                    <div class="logo">
                        <a href="/index.html">
                            <img src="https://www.thenewstnp.com/img/IMG_0020.JPG" alt="头像">
                        </a>
                    </div>
                    <h3>{{author}}</h3>
                    <div class="directory">
                        <h4>目录</h4>
                        <ul>
                            <li v-for="(item, index) in list">
                                <a :href="'#' + item.id">{{item.title}}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="left">
                <h2>{{title}}</h2>
                <div class="content" v-for="(item, index) in list">
                    <h3 class="l_title" :id=item.id>{{item.title}}</h3>
                    <table>
                        <thead>
                            <tr>
                                <th v-for="(title, index) in item.t_title">{{title}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(title, index) in item.hoy_key">
                                <td>{{title.key}}</td>
                                <td>{{title.features}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="sidebar">回顶部</div>
        </div>
    `,
    data() {
        return {
            title: Data.title,
            list: Data.lsit,
            author: Data.author
        }
    }
})

new Vue({
    el: "#app",
    template: "<VsCode />"
})