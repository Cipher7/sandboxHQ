new Vue({
    el:'#vue-app',
    data:{
        name:'Gil G',
        job: 'Ninja Student',
        website: 'https://www.cipher7designs.com',
        websiteTag:'<a href="https://www.cipher7designs.com">My Website Again</a>',
        age: 48,
        x:0, 
        y:0
    },
    methods:{
        greet: function(time){
            return 'Good' + time +" " + this.name;
        },
        add:function(inc){
          this.age+= inc;  
        },
        subtract:function(dec) {
            this.age-= dec;
        },

        updateXY:function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
        

    }
});
