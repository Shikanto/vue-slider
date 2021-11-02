Vue.config.devtools = true;

new Vue ({
    el: "#container",
    data: {
       allImg: [
            {
                url:'img/01.jpg',
                title:'Svezia',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                url:'img/02.jpg',
                title:'Svizzera',
                text:'Lorem ipsum'
            },
            {
                url:'img/03.jpg',
                title:'Gran Bretagna',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                url:'img/04.jpg',
                title:'Germania',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam'
            },
            {
                url:'img/05.jpg',
                title:'Paradise',
                text:'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            }
        ],
        currentIndex:  0,
    },
    methods: { 
        goUp() {
            /* let newIndex = this.currentIndex -1;
            
            if (newIndex < 0) {
                newIndex = this.allImg.length -1;
            }
            this.currentIndex = newIndex */
            this.currentIndex --;
            if (this.currentIndex < 0) {
                this.currentIndex = this.allImg.length -1;
            }

        },
        goDown() {

            /* let newIndex = this.currentIndex +1;
            
            if (newIndex > this.allImg.length -1) {
                newIndex = 0;
            }
            this.currentIndex = newIndex; */
            this.currentIndex ++
            if (this.currentIndex > this.allImg.length -1) {
                this.currentIndex = 0;
            }

        }
    }
});