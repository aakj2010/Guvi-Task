let data = [
    {
        id: "1",
        name: "Lura Senger",
        email: "Xander_Collier@yahoo.com",
    },
    {
        id: "2",
        name: "Wilburn Weber",
        email: "Bennett_Kreiger11@yahoo.com",
    },
    {
        id: "3",
        name: "Tyrique Hahn",
        email: "Juston.Altenwerth@yahoo.com",
    },
    {
        id: "4",
        name: "Lenny Bailey",
        email: "Guiseppe_Hegmann@yahoo.com",
    },
    {
        id: "5",
        name: "Vladimir Keeling",
        email: "Louisa_Walsh18@hotmail.com",
    },
    {
        id: "6",
        name: "Kellie Crona",
        email: "Chandler_Abernathy@yahoo.com",
    },
    {
        id: "7",
        name: "Carolina White",
        email: "Royal50@hotmail.com",
    },
    {
        id: "8",
        name: "Alfredo Conn",
        email: "Clarabelle34@hotmail.com",
    },
    {
        id: "9",
        name: "Stan Shanahan",
        email: "Lamar.McClure@hotmail.com",
    },
    {
        id: "10",
        name: "Marvin Fay",
        email: "Osbaldo58@hotmail.com",
    },
    {
        id: "11",
        name: "Torrance Rau",
        email: "Orin45@gmail.com",
    },
    {
        id: "12",
        name: "Harold Gutmann MD",
        email: "Alyce.Stracke37@yahoo.com",
    },
    {
        id: "13",
        name: "Taryn Torphy",
        email: "Dean_Breitenberg71@hotmail.com",
    },
    {
        id: "14",
        name: "Bryana Lang",
        email: "Tatum.Ullrich@yahoo.com",
    },
    {
        id: "15",
        name: "Nyasia Green DDS",
        email: "Dino83@gmail.com",
    },
    {
        id: "16",
        name: "Nasir Gerhold",
        email: "Lilian_Bashirian8@hotmail.com",
    },
    {
        id: "17",
        name: "Raymundo Ritchie PhD",
        email: "Antwan.Schoen15@yahoo.com",
    },
    {
        id: "18",
        name: "Delmer Marvin",
        email: "Kiera62@yahoo.com",
    },
    {
        id: "19",
        name: "Rachel Wilkinson",
        email: "Foster_Conroy@gmail.com",
    },
    {
        id: "20",
        name: "Gladys Howell",
        email: "Constance.Labadie10@yahoo.com",
    },
    {
        id: "21",
        name: "Ciara Klocko",
        email: "Harvey76@yahoo.com",
    },
    {
        id: "22",
        name: "Quentin O'Kon",
        email: "Amely_Cummings2@yahoo.com",
    },
    {
        id: "23",
        name: "Ms. Gabriella Kunde",
        email: "Lorenza_Cummerata@hotmail.com",
    },
    {
        id: "24",
        name: "Gerald Reilly",
        email: "Lia_Konopelski@gmail.com",
    },
    {
        id: "25",
        name: "Brody Carter I",
        email: "Colten.Wilderman90@hotmail.com",
    },
    {
        id: "26",
        name: "Alanis Klocko",
        email: "Johathan.Champlin69@gmail.com",
    },
    {
        id: "27",
        name: "Caroline Miller",
        email: "Delaney.Kozey74@gmail.com",
    },
    {
        id: "28",
        name: "Ms. Merritt McClure",
        email: "Wendy.Zieme@gmail.com",
    },
    {
        id: "29",
        name: "Jovani Schoen",
        email: "Norval_Zieme@hotmail.com",
    },
    {
        id: "30",
        name: "Berniece Bradtke",
        email: "Okey.Fisher39@hotmail.com",
    },
];


let pagination_row = document.createElement('div');
pagination_row.setAttribute('class', 'row');
document.body.append(pagination_row);

let pagination = document.createElement('div');
pagination.setAttribute('class', 'pagination');
pagination_row.append(pagination);

let pagination_Item = document.createElement('div');
pagination_Item.setAttribute('class', 'pagination-item');
pagination.append(pagination_Item);

let First = document.createElement('div');
First.style.display = "inline-block"
let First_btn = document.createElement('button');
First_btn.innerHTML = 'First';
First.setAttribute('id', 'first');
First_btn.addEventListener('click', Page(1));
First.setAttribute('class', 'pagination-item');
pagination_Item.append(First);
First.appendChild(First_btn);

let Previous = document.createElement('div');
Previous.style.display = "inline-block"
let previous_btn = document.createElement('button');
previous_btn.innerHTML = 'Previous';
Previous.setAttribute('id', 'previous');
previous_btn.addEventListener('click', previousPage(1))
Previous.setAttribute('class', 'pagination-item');
pagination_Item.append(Previous);
Previous.appendChild(previous_btn);

let One = document.createElement('div');
One.style.display = "inline-block"
let one_btn = document.createElement('button');
one_btn.innerHTML = '1';
one_btn.setAttribute('id', '1');
one_btn.addEventListener('click', Page(1))
One.setAttribute('class', 'pagination-item');
pagination_Item.append(One);
One.append(one_btn);

let Two = document.createElement('div');
Two.style.display = "inline-block"
let two_btn = document.createElement('button');
two_btn.innerHTML = '2';
two_btn.setAttribute('id', '2');
two_btn.addEventListener('click', Page(2))
Two.setAttribute('class', 'pagination-item');
pagination_Item.append(Two);
Two.appendChild(two_btn);

let Three = document.createElement('div');
Three.style.display = "inline-block"
let third_btn = document.createElement('button');
third_btn.innerHTML = '3';
third_btn.setAttribute('id', '3');
third_btn.addEventListener('click', Page(3))
Three.setAttribute('class', 'pagination-item');
pagination_Item.append(Three);
Three.appendChild(third_btn);

let Four = document.createElement('div');
Four.style.display = "inline-block"
let fourth_btn = document.createElement('button');
fourth_btn.innerHTML = '4';
fourth_btn.setAttribute('id','4');
fourth_btn.addEventListener('click', Page(4))
Four.setAttribute('class', 'pagination-item');
pagination_Item.append(Four);
Four.appendChild(fourth_btn);

let Five = document.createElement('div');
Five.style.display = "inline-block"
let fifth_btn = document.createElement('button');
fifth_btn.innerHTML = '5';
fifth_btn.setAttribute('id', '4');
fifth_btn.addEventListener('click', Page(5))
Five.setAttribute('class', 'pagination-item');
pagination_Item.append(Five);
Five.appendChild(fifth_btn);

let Six = document.createElement('div');
Six.style.display = "inline-block"
let sixth_btn = document.createElement('button');
sixth_btn.innerHTML = '6';
sixth_btn.setAttribute('id', '6');
sixth_btn.addEventListener('click', Page(6))
Six.setAttribute('class', 'pagination-item');
pagination_Item.append(Six);
Six.appendChild(sixth_btn);

let Seven = document.createElement('div');
Seven.style.display = "inline-block"
let seventh_btn = document.createElement('button');
seventh_btn.innerHTML = '7';
seventh_btn.setAttribute('id', '7');
seventh_btn.addEventListener('click', Page(7))
Seven.setAttribute('class', 'pagination-item');
pagination_Item.append(Seven);
Seven.appendChild(seventh_btn);

let Eight = document.createElement('div');
Eight.style.display = "inline-block"
let eighth_btn = document.createElement('button');
eighth_btn.innerHTML = '8';
eighth_btn.setAttribute('id', '8');
eighth_btn.addEventListener('click', Page(8))
Eight.setAttribute('class', 'pagination-item');
pagination_Item.append(Eight);
Eight.appendChild(eighth_btn);

let Nine = document.createElement('div');
Nine.style.display = "inline-block"
let ninth_btn = document.createElement('button');
ninth_btn.innerHTML = '9';
ninth_btn.setAttribute('id', '9');
ninth_btn.addEventListener('click', Page(8))
Nine.setAttribute('class', 'pagination-item');
pagination_Item.append(Nine);
Nine.appendChild(ninth_btn);

let Forward = document.createElement('div');
Forward.style.display = "inline-block"
let forward_btn = document.createElement('button');
forward_btn.innerHTML = 'Forward';
forward_btn.addEventListener('click', forwardPage());
forward_btn.setAttribute('id', 'forward');
Forward.setAttribute('class', 'pagination-item');
pagination_Item.append(Forward);
Forward.appendChild(forward_btn);

let Last = document.createElement('div');
Last.style.display = "inline-block"
let last_btn = document.createElement('button');
last_btn.innerHTML = 'Last';
last_btn.addEventListener('click', lastPage());
last_btn.setAttribute('id', 'last');
Last.setAttribute('class', 'pagination-item');
pagination_Item.append(Last);
Last.appendChild(last_btn);




var currentPage = 1;
var numberPerpage = 3;
var numberofPages = data.length / numberPerpage;

function forwardPage() {
    currentPage += 1;
    loadlist();
}

function previousPage() {
    currentPage -= 1;
    loadlist();
}

function lastPage() {
    currentPage = numberofPages;
    loadlist();
}

function Page(num) {
    currentPage = num;
    loadlist();
}

function loadlist() {
    var begin = ((currentPage - 1) * numberPerpage);
    var end = begin + numberPerpage;
    pageList = data.slice(begin, end);
    check();
    drawList();
}

function drawList(){
    document.getElementById('list').innerHTML = "";
    let divi = document.getElementById("list");
    for(i=0; i<data.length; i++){
        console.log(data[i]);

        let ul = document.createElement('ul');
        ul.setAttribute("type","none");

        let id = document.createElement('li');
        id.innerHTML = "Id :" +pageList[i].id;
        ul.append(id);

        let name =  document.createElement('li');
        name.innerHTML = "Name :" +pageList[i].name;
        ul.append(name);

        let email =  document.createElement('li');
        email.innerHTML = "Email :" +pageList[i].email;
        ul.append(email);

        divi.append(ul);

    }
    document.body.append(divi);
}
drawList()

function check(){
    if(document.getElementById("forward")){
        document.getElementById("forward").disabled = (currentPage == numberofPages) ? true : false;
    }
    if(document.getElementById("previous")){
        document.getElementById("previous").disabled = (currentPage == 1) ? true : false;

    }
    if(document.getElementById("first")){
        document.getElementById("first").disabled = (currentPage == 1) ? true : false;

    }
    if(document.getElementById("last")){
        document.getElementById("last").disabled = (currentPage == numberofPages) ? true : false;

    }
}

Page();


