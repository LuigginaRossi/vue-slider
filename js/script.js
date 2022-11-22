const {createApp} = Vue;

createApp({
    data(){     
        return{ 
            slides : [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            currentIndex : 0,
        };
    },
    methods:{
        btnPrev(){
            //se i = o allora imposto all'ultimo indice disponibile:
             if( this.currentIndex === 0 ){
                 this.currentIndex = this.slides.length -1;
             } else {
                 this.currentIndex --;
             }
        },
        btnNext(){
             //se i = slider.length allora lo imposto a 0:
             if( this.currentIndex === this.slides.length -1 ){
                this.currentIndex = 0;
            } else {
                this.currentIndex ++;
            }
            // this.currentIndex ++;
        },
        thumbClick (indexImgClicked){
            this.currentIndex = indexImgClicked;
        },
        stopAutoplay (){
            clearInterval(fistAutoplay);
        },
        secondAutoplay(){
            fistAutoplay = setInterval(this.btnNext, 1500);
        }
    },
     mounted () {
         fistAutoplay = setInterval(this.btnNext, 1500);
     }
}).mount("#app")




