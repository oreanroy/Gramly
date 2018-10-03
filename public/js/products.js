//Product Names, Prices, Image Links
var path='https://github.com/SahilQaiser/Gramly2/blob/master/public/img/';
var products = [
    {   name:'South Indian', price:'120', img:path+'prod/B1.png', tags:'breakfast,cheap,organic'   },
    {   name:'North Indian', price:'125', img:path+'prod/B2.png', tags:'breakfast,cheap,organic'   },
    {   name:'Punjabi', price:'128', img:path+'prod/B3.png', tags:'breakfast,cheap,organic'   },
    {   name:'Gujrati', price:'133', img:path+'prod/B4.png', tags:'breakfast,cheap,organic'   },
    {   name:'Rajasthani', price:'109', img:path+'prod/B5.jpg', tags:'breakfast,cheap,organic'   },
    {   name:'Bengali', price:'103', img:path+'prod/B6.jpg', tags:'breakfast,cheap,organic'   },
    {   name:'South Indian', price:'225', img:path+'prod/L1.jpg',  tags:'breakfast,cheap,organic'  },
    {   name:'North Indian', price:'255', img:path+'prod/L2.jpg',  tags:'breakfast,cheap,organic'  },
    {   name:'Punjabi', price:'320', img:path+'prod/L3.jpg',  tags:'breakfast,cheap,organic'  },
    {   name:'Gujrati', price:'360', img:path+'prod/L4.jpg',  tags:'breakfast,cheap,organic'  },
    {   name:'Chinese', price:'321', img:path+'prod/L5.jpg',  tags:'breakfast,cheap,organic'  },
    {   name:'Chilly Fries', price:'150', img:path+'prod/L3.jpg',  tags:'breakfast,cheap,organic'  },
    {   name:'French Fries', price:'121', img:path+'prod/L2.jpg',  tags:'breakfast,cheap,organic'  },
    {   name:'More Fries', price:'110', img:path+'prod/L1.jpg',  tags:'breakfast,cheap,organic'  },
    {   name:'Snacks', price:'120', img:path+'prod/L3.jpg',  tags:'breakfast,cheap,organic'  },
    {   name:'South Indian', price:'133', img:path+'prod/B4.png', tags:'breakfast,cheap,organic'   },
    {   name:'Punjabi', price:'123', img:path+'prod/B1.png', tags:'breakfast,cheap,organic'   },
    {   name:'Bangali', price:'83', img:path+'prod/B2.png', tags:'breakfast,cheap,organic'   },
    {   name:'North Indian', price:'113', img:path+'prod/B3.png', tags:'breakfast,cheap,organic'   },]

var cardRow = document.getElementById('cardRow');   //CardRow

var productNum=0;
var createProduct = function (productNum)
{
    var card = document.createElement('div');           //Card
    var cardContent = document.createElement('div');    //CardContent
    var cardHeader = document.createElement('div');     //CardHeader
    var img = document.createElement('img');            //Img
    var cardFooter = document.createElement('div');     //CardFooter
    var cardText = document.createElement('p');         //CardText
    //var buy = document.createElement('a');

    card.setAttribute('class','col-6 col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 mt-4');
    cardContent.setAttribute('class','card text-white bg-dark');
    cardHeader.setAttribute('class','card-header');
        cardHeader.innerHTML=products[productNum].name;
    img.setAttribute('class','img-fluid');
        img.setAttribute('src',products[productNum].img);
        //img.setAttribute('onClick:','itemClicked('+productNum+');');
    cardFooter.setAttribute('class','card-footer');
        cardText.innerHTML='Price : '+products[productNum].price+' Rs';
        //buy.setAttribute('onClick','itemClicked('+productNum+')');
        //buy.innerHTML='Buy';
        //buy.setAttribute('class','btn');
    cardFooter.appendChild(cardText);
    //cardFooter.appendChild(buy);
    cardContent.appendChild(cardHeader);
    cardContent.appendChild(img);
    cardContent.appendChild(cardFooter);
    card.appendChild(cardContent);
    cardRow.appendChild(card);
}
    

//Clear Card Grid
var clearGrid = function()
{
    var toClear = document.getElementById('cardRow');
    while (toClear.hasChildNodes()) {
        toClear.removeChild(toClear.lastChild);
    }   
}