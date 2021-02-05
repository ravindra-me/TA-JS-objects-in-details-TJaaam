class Book {
    constructor(title, category, author) {
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = false;
        this.finishedDate = null;
    }
    markBookAsRead() {
        this.isRead = !this.isRead
        this.finishedDate = Date.now();
    }
}

class BookList{
    constructor() {
        this.arr = [];
        this.index = 0;
    }
    add(arr=[]) {
       this.arr = this.arr.concat(arr);
       return this.arr;
    };
    getCurrentBook() {
       return  this.arr[this.index];
    };
    getNextBook() {
        this.index = this.index + 1;
        return this.index;
    }
    getPrevBook(){
        this.index = this.arr[this.index - 1];
        return this.index;
    };
    changeCurrentBook(newIndex) {
        this.index = newIndex;
        return this.index;
    }
}

let book1 = new Book("think and grow" , "rav" , "ravindra" );
let book2 = new Book("think" , "ravindra" , "raju" , false);

let bookList1 = new BookList();
bookList1.add([book1, book2]);
