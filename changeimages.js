

//Selectors

const breads = document.querySelectorAll(".bread");


/**Functions**/

/*Function for switching product range images*/

function getImages(originalImages,hoverImages){

    const breadsArray = Array.from(breads);

    breadsArray.forEach((bread) => {

        const breadImage = bread.children[0];
        const breadIndex = breadsArray.indexOf(bread);


        bread.addEventListener("mouseover" , ()=>{

            bread.style.cursor = "pointer";
            breadImage.src = hoverImages[breadIndex].image;

        });

        bread.addEventListener("mouseout" , ()=>{

            bread.style.cursor = "pointer";
            breadImage.src = originalImages[breadIndex].image;

        });
    });
    
}

/*Function that contains an array of product range images*/

function setProductRangeImages(){
     originalProductRangeImages_ = [
        {
            image: "pics/productrange_pics/everyday700.jpg" ,
        },
        {
            image: "pics/productrange_pics/unsliced_NEW.jpg",
        },
        {
            image: "pics/productrange_pics/everyday600g.jpg",
        },
        {
            image: "pics/productrange_pics/everydaywhite700.jpg",
        },
        {
            image: "pics/productrange_pics/everydaywhiteunsliced.jpg" ,
        },
        {
            image: "pics/productrange_pics/everydaywhite600.jpg",
        },
        {
            image: "pics/productrange_pics/farmstyle700.jpg",
        },
        {
            image: "pics/productrange_pics/farmstyle600.jpg",
        },
        {
            image: "pics/productrange_pics/farmstylewhite700.jpg",
        },
        {
            image: "pics/productrange_pics/farmstylewhite600.jpg",
        },
    ];

    hoverProductRangeImages_ = [
        
            {
                image: "pics/productrange_pics/brown-bread-700.png" ,
            },
            {
                image: "pics/productrange_pics/brown-unsliced-bread-700.png",
            },
            {
                image: "pics/productrange_pics/brown-bread-600g.png",
            },
            {
                image: "pics/productrange_pics/white-bread-700.png",
            },
            {
                image: "pics/productrange_pics/white-unsliced-bread-700.png",
            },
            {
                image: "pics/productrange_pics/white-bread-600.png",
            },
            {
                image: "pics/productrange_pics/farmstyle-brown-bread.png",
            },
            {
                image: "pics/productrange_pics/farmstyle-brown-bread-600-1.png",
            },
            {
                image: "pics/productrange_pics/farmstyle-whilte-bread-7001.png",
            },
            {
                image: "pics/productrange_pics/farmstyle-white-bread-600.png",
            },
    ];

    getImages(originalProductRangeImages_ , hoverProductRangeImages_);

}

setProductRangeImages();

/*Function that contains an array of buns and rolls images*/

function setBunsAndRollsImages(){
    originalBunsAndRollsImages_ = [
       {
           image: "pics/productrange_pics/hamburger-2.jpg" ,
       },
       {
           image: "pics/productrange_pics/hotdog-1.jpg",
       },
       {
           image: "pics/productrange_pics/lunchbuns-1.jpg",
       },
       {
           image: "pics/productrange_pics/megahamburger-1.jpg",
       },
      
   ];

   hoverBunsAndRollsImages_ = [
       
           {
               image: "pics/productrange_pics/hamburger-buns.png",
           },
           {
               image: "pics/productrange_pics/hot-dog-rolls.png",
           },
           {
               image: "pics/productrange_pics/lunch_buns.png",
           },
           {
               image: "pics/productrange_pics/sesame-seeds-hamburger.png",
           },
   ];

   getImages(originalBunsAndRollsImages_ , hoverBunsAndRollsImages_);

}

setBunsAndRollsImages();


// /*******VITA LIFE BUNS SCRIPT STARTS HERE*******/

// /****First vita life bun script ****/

// function newVitaLifeBunOne(){
//     var newVitaLifeBunOne = document.getElementById("firstVitaLifeBun").src = "pics/productrange_pics/vitalifebuns_pics/large-nutritional.png";
// }

// function oldVitaLifeBunOne(){
//     var oldVitaLifeBunOne = document.getElementById("firstVitaLifeBun").src = "pics/productrange_pics/vitalifebuns_pics/2seeded.jpg";
// }

// /****Second vita life bun script ****/

// function newVitaLifeBunTwo(){
//     var newVitaLifeBunTwo = document.getElementById("secondVitaLifeBun").src = "pics/productrange_pics/vitalifebuns_pics/seeded-nutritional.png";

// }

// function oldVitaLifeBunTwo(){
//     var oldVitaLifeBunTwo = document.getElementById("secondVitaLifeBun").src = "pics/productrange_pics/vitalifebuns_pics/seededcocktail.jpg";
// }

// /*******TREATS BUNS SCRIPT STARTS HERE*******/

// /****First treats bun script ****/

// function newTreatsBunOne(){
//     var newTreatsBunOne = document.getElementById("firstTreatsBun").src = "pics/productrange_pics/treatsbuns_pics/hot-cross-buns.png";
// }

// function oldTreatsBunOne(){
//     var oldTreatsBunOne = document.getElementById("firstTreatsBun").src = "pics/productrange_pics/treatsbuns_pics/hotcross-1.jpg";
// }

// /****second treats bun script ****/

// function newTreatsBunTwo(){
//     var newTreatsBunTwo = document.getElementById("secondTreatsBun").src = "pics/productrange_pics/treatsbuns_pics/chocolate-hotcross-nutritional.png";
// }

// function oldTreatsBunTwo(){
//     var oldTreatsBunTwo = document.getElementById("secondTreatsBun").src = "pics/productrange_pics/treatsbuns_pics/chocolatecross.jpg";
// }

// /****third treats bun script ****/

// function newTreatsBunThree(){
//     var newTreatsBunThree = document.getElementById("thirdTreatsBun").src = "pics/productrange_pics/treatsbuns_pics/6-fruit-buns-1-o.png";
// }

// function oldTreatsBunThree(){
//     var oldTreatsBunThree = document.getElementById("thirdTreatsBun").src = "pics/productrange_pics/treatsbuns_pics/fruitbuns.jpg";
// }

// /****fourth treats bun script ****/

// function newTreatsBunFour(){
//     var newTreatsBunThree = document.getElementById("fourthTreatsBun").src = "pics/productrange_pics/treatsbuns_pics/6-cheese-rolls-1-o.png";
// }

// function oldTreatsBunFour(){
//     var oldTreatsBunFour = document.getElementById("fourthTreatsBun").src = "pics/productrange_pics/treatsbuns_pics/cheesetreats.jpg";
// }

// /*******VITA-LIFE BREAD SCRIPT STARTS HERE*******/

// /****First vital life script ****/

// function newVitaLifeBreadOne(){
//     var newVitalBreadOne = document.getElementById("firstVitaLifeBread").src = "pics/productrange_pics/vitalifebread_pics/crushed-wheat700.png";
// }

// function oldVitaLifeBreadOne(){
//     var oldVitalBreadOne = document.getElementById("firstVitaLifeBread").src = "pics/productrange_pics/vitalifebread_pics/VitaWheat_New.jpg";
// }

// /****second vital life script ****/

// function newVitaLifeBreadTwo(){
//     var newVitalBreadTwo = document.getElementById("secondVitaLifeBread").src = "pics/productrange_pics/vitalifebread_pics/vita-brown.png";
// }

// function oldVitaLifeBreadTwo(){
//     var oldVitalBreadTwo = document.getElementById("secondVitaLifeBread").src = "pics/productrange_pics/vitalifebread_pics/VitaBrown_New.jpg";
// }

// /****third vital life script ****/

// function newVitaLifeBreadThree(){
//     var newVitalBreadThree = document.getElementById("thirdVitaLifeBread").src = "pics/productrange_pics/vitalifebread_pics/vita-white.png";
// }

// function oldVitaLifeBreadThree(){
//     var oldVitalBreadThree = document.getElementById("thirdVitaLifeBread").src = "pics/productrange_pics/vitalifebread_pics/VitaWhite_New.jpg";
// }








