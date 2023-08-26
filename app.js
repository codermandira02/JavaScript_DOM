//------------------------------- getElementsByTag & getElemetsByClassName -----------------------------------

//const titles = document.getElementsByClassName('title');


//console.log(Array.isArray(titles)); //check wheather the titles is array or not
//console.log(Array.isArray(Array.from(titles))); //converting titles into array

// Array.from(titles).forEach(function(item){
//     console.log(item);
// })
// titles.forEach(function(item){
//     console.log(item);
// })



//---------------------------- QUERY SELECTOR ----------------------------

// const wrap = document.querySelector('#wrapper'); //# for id as we want to grab the element of wrapper id
// console.log(wrap);

//const wmf = document.querySelector('#book-list li:nth-child(2) .name'); //here we try to grab a complicated elemnt
//console.log(wmf);

//const books = document.querySelector('#book-list li .name'); //to grab more than one elemnt but it will only shoe the first element of li tag as we use querySelector
//console.log(books);

//  const book = document.querySelectorAll('#book-list li .name'); //to gram many complicated elements 
//console.log(book);

// Array.from(book).forEach(function(books){
//     console.log(books);
// })



// ------------------------------ CHANGING TEXT CONTENT AND HTML --------------------------

//const books = document.querySelectorAll('#book-list li .name');

// Array.from(books).forEach(function(book){
//     console.log(book.textContent); //text content grab the elements into book //retrieving content
// })


//Array.from(books).forEach(function(book){
    //book.textContent += '(book title)' //append text content
   // book.textContent = 'title' //vhanging the whole text content
//})


// ------------------------ UPDATING HTML CONTENT -------------

//const bookList = document.querySelector('#book-list')
//console.log(bookList.innerHTML) //it will grab all the tag all content under booklist
//bookList.innerHTML = '<h2>Books and more books...</h2>' //it will replace the entire content of the booklist tag of html
//bookList.innerHTML += '<p>This is how you change html document</p>' //to append or add text


//------------------- NODES ------------------

// const banner = document.querySelector('#page-banner')

// console.log('#page-banner node type is : ', banner.nodeType); // to know the the type of node; it will show number 1 as 1 represent element node
// console.log('#page-banner node name is : ', banner.nodeName); // to show the node name
// console.log('#page-banner has child node : ', banner.hasChildNodes()); //to know is the node has any child node; hasChildNode() is a method

//const clonedBanner = banner.cloneNode(true); // if we want to clone banner node including child node then we must have to write true inside the bracket
//const clonedBanner = banner.cloneNode(false); // it will only clone the div tag of page banner not child node
//console.log(clonedBanner);


//-------------------------- NODE TRAVERSING ---------------

//----------------------   TRAVERSING FROM PARENT TO CHILD AND VICE VERSA -----------------------
//const bookList = document.querySelector('#book-list');

// console.log('the parent node is : ', bookList.parentNode); //to traverse to the parent node of booklist
// console.log('the parent element is :', bookList.parentElement); // it will show the above result
// console.log('the element of perent is:', bookList.parentElement.parentElement); //to show the parent element of the parent element node of booklist node

// console.log('children elemnt is :', bookList.childElementCount); // to countn how many child the node have
// console.log(bookList.childNodes); //to show all the child elemnt including page breake as text
// console.log(bookList.children); //to show all the child element without showing pagebreak or text

//------------------------------- TRAVERSING FROM SHIBLINGS TO SHIBLINGS ---------------
// console.log('book-list next sibling is :', bookList.nextSibling); //it shows page break or text
// console.log('book-list next element sibling is :', bookList.nextElementSibling); // to show next element 

// console.log('book-list previous sibling is :', bookList.previousSibling); 
// console.log('book-list previous element sibling is :', bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML += '</br>Too cool for everyone else!' // to add something through reference of sibling node


//------------------ EVENTS -----------------

//------------ EventListner ----------
// const btns = document.querySelectorAll('#book-list .delete');

// Array.from(btns).forEach(function(btn){ //converting btns collection to array

//     btn.addEventListener('click', function(e){ //adding eventlistner metthod to btn; 1st parameter is and event here click and 2nd is a callbck function of that event; here we adding event to every button

//         const li = e.target.parentElement; //grabbing parent elemet of the child node li
//         li.parentNode.removeChild(li) //deleting child node li by grabbing parent node of it

//     })
// })


//------------------------ PREVENTING EVENTS ------------

// const link = document.querySelector('#page-banner a');

// link.addEventListener('click', function(e){
//     e.preventDefault(); //preventing the link to forwarding to the webpage
//     console.log('navigation to', e.target.textContent, 'was prevented');
// })

//----------------- EVEN BUBBLING -------------
// ------------delete books ----------
const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){ //deleting every child node associating with parent node ul
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li); // here we write list as it is same with li.parentNode that is ul that we had already mention in const line
    }
    
})


//---------- INTERACTING WITH FORMS ------------
//---------- ADD BOOK ---------
const addForm = document.forms['add-book']; // grabbing the elements of form node

addForm.addEventListener('submit', function(e){
    e.preventDefault(); // preventing the page freload
    const value = addForm.querySelector('input[type="text"]').value; //grabbing the value of form into value variable which input value is text typed
    //console.log(value) //showing the added value in console


    //---------------------- CREATING ELEMENTS THEN PUSH IT TO THE DOM ------------------
    //-------- Create Elements---------
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content to the element
    deleteBtn.textContent ='delete';
    bookName.textContent = value;

    //add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    //append to document
    li.appendChild(bookName); //adding child of the li tag 
    li.appendChild(deleteBtn);
    list.appendChild(li);
})


//------- hide books ----
const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change', function(e){

    if(hideBox.checked){
        list.style.display = "none";
    } else{
        list.style.display = "initial";
    }
});

// ------------------ Changing styles of class using JAvaScript-----------

//filter books
const searchBar = document.forms["search-books"].querySelector('input');
console.log("searchBar", searchBar)
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');

    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;

        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        } else{
            book.style.display = 'none';
        }
    })
})