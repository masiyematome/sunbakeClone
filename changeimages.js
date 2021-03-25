

//Selectors

const productRangeBreads = document.querySelectorAll(".product-range-bread");
let index = 0;

/**Functions **/

function getImages(originalImages,hoverImages){

    const productRangeBreadsArray = Array.from(productRangeBreads);

    for(index; index < productRangeBreadsArray.length ; index++){

        const breadImage = productRangeBreadsArray[index].children[0];
        
        breadImage.addEventListener("mouseover" , function() {
            this.style.cursor = "pointer";
            breadImage.src = hoverImages[index].image;
        });

        breadImage.addEventListener("mouseout" , function() {
            breadImage.src = originalImages[index].image;
        });

    }
}

function setImages(){
     originalImages_ = [
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

    hoverImages_ = [
        
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

    getImages(originalImages_ , hoverImages_);
    console.log(originalImages_);

}

setImages();


// /***First image script ***/

// function setNewImageOne(){
//     var newImage1 = document.getElementById("image1").src = "pics/productrange_pics/brown-bread-700.png";
// }

// function setOldImageOne(){
//     var oldImage1 = document.getElementById("image1").src = "pics/productrange_pics/everyday700.jpg";
// }

// /***Second image script ***/

// function setNewImageTwo(){
//     var newImage2 = document.getElementById("image2").src = "pics/productrange_pics/brown-unsliced-bread-700.png";
// }

// function setOldImageTwo(){
//     var oldImage2 = document.getElementById("image2").src = "pics/productrange_pics/unsliced_NEW.jpg";
// }

// /***Third image script ***/

// function setNewImageThree(){
//     var newImage3 = document.getElementById("image3").src = "pics/productrange_pics/brown-bread-600g.png";
// }

// function setOldImageThree(){
//     var oldImage3 = document.getElementById("image3").src = "pics/productrange_pics/everyday600g.jpg";
// }

// /***Fourth image script ***/

// function setNewImageFour(){
//     var newImage4 = document.getElementById("image4").src = "pics/productrange_pics/white-bread-700.png";
// }

// function setOldImageFour(){
//     var oldImage4 = document.getElementById("image4").src = "pics/productrange_pics/everydaywhite700.jpg";
// }

// /***Fifth image script ***/

// function setNewImageFive(){
//     var newImage5 = document.getElementById("image5").src = "pics/productrange_pics/white-unsliced-bread-700.png";
// }

// function setOldImageFive(){
//     var oldImage5 = document.getElementById("image5").src = "pics/productrange_pics/everydaywhiteunsliced.jpg";
// }
// /***Sixth image script ***/

// function setNewImageSix(){
//     var newImage6 = document.getElementById("image6").src = "pics/productrange_pics/white-bread-600.png";
// }

// function setOldImageSix(){
//     var oldImage6 = document.getElementById("image6").src = "pics/productrange_pics/everydaywhite600.jpg";
// }
// /***Seventh image script ***/

// function setNewImageSeven(){
//     var newImage7 = document.getElementById("image7").src = "pics/productrange_pics/farmstyle-brown-bread.png";
// }

// function setOldImageSeven(){
//     var oldImage7 = document.getElementById("image7").src = "pics/productrange_pics/farmstyle700.jpg";
// }

// /***Eighth image script ***/

// function setNewImageEight(){
//     var newImage8 = document.getElementById("image8").src = "pics/productrange_pics/farmstyle-brown-bread-600-1.png";
// }

// function setOldImageEight(){
//     var oldImage8 = document.getElementById("image8").src = "pics/productrange_pics/farmstyle600.jpg";
// }
// /***Nineth image script ***/

// function setNewImageNine(){
//     var newImage9 = document.getElementById("image9").src = "pics/productrange_pics/farmstyle-whilte-bread-7001.png";
// }

// function setOldImageNine(){
//     var oldImage9 = document.getElementById("image9").src = "pics/productrange_pics/farmstylewhite700.jpg";
// }

// /***Tenth image script ***/

// function setNewImageTen(){
//     var newImage10 = document.getElementById("image10").src = "pics/productrange_pics/farmstyle-white-bread-600.png";
// }

// function setOldImageTen(){
//     var oldImage10 = document.getElementById("image10").src = "pics/productrange_pics/farmstylewhite600.jpg";
// }

// /***BUNS AND ROLLS SCRIPT***/


// /***First bun script ***/

// function setNewBunOne(){
//     var newFirstBun = document.getElementById("firstBun").src = "pics/productrange_pics/hamburger-buns.png";
// }

// function setOldBunOne(){
//     var oldFirstBun = document.getElementById("firstBun").src = "pics/productrange_pics/hamburger-2.jpg";
// }

// /***Second bun script ***/

// function setNewBunTwo(){
//     var newSecondBun = document.getElementById("secondBun").src = "pics/productrange_pics/hot-dog-rolls.png";
// }

// function setOldBunTwo(){
//     var oldSecondBun = document.getElementById("secondBun").src = "pics/productrange_pics/hotdog-1.jpg";
// }

// /***Third bun script ***/

// function setNewBunThree(){
//     var newThirdBun = document.getElementById("thirdBun").src = "pics/productrange_pics/lunch_buns.png";
// }

// function setOldBunThree(){
//     var oldThirdBun = document.getElementById("thirdBun").src = "pics/productrange_pics/lunchbuns-1.jpg";
// }

// /***Fourth bun script ***/

// function setNewBunFour(){
//     var newFourthBun = document.getElementById("fourthBun").src = "pics/productrange_pics/sesame-seeds-hamburger.png";
// }

// function setOldBunFour(){
//     var oldFourthBun = document.getElementById("fourthBun").src = "pics/productrange_pics/megahamburger-1.jpg";
// }


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








