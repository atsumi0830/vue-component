(function() {
    'use strict';

    var btnComponent = Vue.extend({
        props: {
            message: {
                type: String,
                default: 'Like',
            }
       },
       data: function() {
         return {
             count: 0
         }
       },
       template: '<button @click="countUp">{{message}} {{count}}</button>',
       methods: {
           countUp: function () {
                this.count++;
                this.$emit('increment');
           }
       }
    });


    var app = new Vue({
        el: '#app',
        components: {
            'btn-component': btnComponent
        },
        data : {
            total: 0
        },
        methods: {
            incrementTotal: function() {
                this.total++;
            }
        }
    });
})();