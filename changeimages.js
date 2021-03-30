

//Selectors

let pagePathName = location.pathname;

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

/*Function that contains an array of vita life buns images*/

function setVitaLifeBunsImages(){
    originalVitaLifeBunsImages_ = [
       {
           image: "pics/productrange_pics/vitalifebuns_pics/2seeded.jpg" ,
       },
       {
           image: "pics/productrange_pics/vitalifebuns_pics/seededcocktail.jpg",
       },
      
   ];

   hoverVitaLifeBunsImages_ = [
       
           {
               image: "pics/productrange_pics/vitalifebuns_pics/large-nutritional.png",
           },
           {
               image: "pics/productrange_pics/vitalifebuns_pics/seeded-nutritional.png",
           },
      
   ];

   getImages(originalVitaLifeBunsImages_ , hoverVitaLifeBunsImages_);

}

/*Function that contains an array of treats buns images*/

function setTreatsBunsImages(){
    originalTreatsBunsImages_ = [
        {
            image: "pics/productrange_pics/treatsbuns_pics/hotcross-1.jpg",
        },
        {
            image: "pics/productrange_pics/treatsbuns_pics/chocolatecross.jpg",
        },
        {
            image: "pics/productrange_pics/treatsbuns_pics/fruitbuns.jpg",
        },
        {
            image: "pics/productrange_pics/treatsbuns_pics/cheesetreats.jpg",
        },

   ];

   hoverTreatsBunsImages_ = [
       
       {
           image: "pics/productrange_pics/treatsbuns_pics/hot-cross-buns.png",
       },
       {
           image: "pics/productrange_pics/treatsbuns_pics/chocolate-hotcross-nutritional.png",
       },
       {
           image: "pics/productrange_pics/treatsbuns_pics/6-fruit-buns-1-o.png",
       },
       {
           image: "pics/productrange_pics/treatsbuns_pics/6-cheese-rolls-1-o.png",
       },
      
   ];

   getImages(originalTreatsBunsImages_ , hoverTreatsBunsImages_);

}

/*Function that contains an array of vita-life bread images*/

function setVitaLifeBreadImages(){
    originalVitaLifeBreadImages_ = [
        {
            image: "pics/productrange_pics/vitalifebread_pics/VitaWheat_New.jpg",
        },
        {
            image: "pics/productrange_pics/vitalifebread_pics/VitaBrown_New.jpg",
        },
        {
            image: "pics/productrange_pics/vitalifebread_pics/VitaWhite_New.jpg",
        },

   ];

   hoverVitaLifeBreadImages_ = [
       
       {
           image: "pics/productrange_pics/vitalifebread_pics/crushed-wheat700.png",
       },
       {
           image: "pics/productrange_pics/vitalifebread_pics/vita-brown.png",
       },
       {
           image: "pics/productrange_pics/vitalifebread_pics/vita-white.png",
       },
      
   ];

   getImages(originalVitaLifeBreadImages_ , hoverVitaLifeBreadImages_);

}

function runFunctions(){

    if(pagePathName == "/sunbakeClone/ProductRange.html"){
        setProductRangeImages();
    }

    else if (pagePathName == "/sunbakeClone/BreadVitaLifeRange.html") {
        setVitaLifeBreadImages();
    }

    else if (pagePathName == "/sunbakeClone/BunsAndRolls.html") {
        setBunsAndRollsImages();
    }

    else if(pagePathName == "/sunbakeClone/BunsTreatsRange.html"){
        setTreatsBunsImages();
    }

    else if (pagePathName == "/sunbakeClone/BunsVitaLifeRange.html") {
        setVitaLifeBunsImages();
    }

}

runFunctions();



