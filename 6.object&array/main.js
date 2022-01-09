var data = [
    {
    profile:{
        name:"madasamy",
        picture:"hi",
        time:7,
        location:"SUNDARAPANDIAPURAM",
        About:"John is world famous professional photographer. with forward thinking clients to create beautiful, honest and amazing things that bring positive results. John is world famous professional photographer. with forward thinking clients to create beautifulhonest and amazing things that bring positive results.",
        likes:["Like" ,"-Comments" ,"-Share"]
    },
    
    likedPeoples:{
        names:["Naveen","Sriram","nithish","more"],
        numLikes:{
            num:40,
            other:" "+"and"+" "+"like"+" "+ "this"
        }
    },
    comments:{
        comments1: likedPeoplesName1+" "+"world best FullStackDeveloper"+likeCont ,
        comments2: likedPeoplesName2+" "+"world best FrontEndDeveloper"+likeCont ,
        comments3: likedPeoplesName3+" "+"world best JavaDeveloper"+likeCont 



    }
 }
];
var likedPeoplesName1 = data[0].likedPeoples.names[0],
    likedPeoplesName2 = data[0].likedPeoples.names[1],
    likedPeoplesName3 = data[0].likedPeoples.names[2],
    likeCont = "like";
console.log(likedPeoplesName1);