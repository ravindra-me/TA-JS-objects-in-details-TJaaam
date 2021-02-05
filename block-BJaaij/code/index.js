class Book {
    constructor(title, category, author, isRead=false, finishedDate) {
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = isRead;
        this.finishedDate = finishedDate;
    }
    markBookAsRead() {
        this.isRead = !this.isRead
        this.finishedDate = Date.now();
    }
}

class BookList{
    constructor(arr, index) {
        this.arr = arr;
        this.index = index;
    }
    add(arr) {
        this.arr.push(arr);
    };
    getCurrentBook() {
       return  this.arr[this.index];
    };
    getNextBook() {
        return this.arr[this.index +1];
    }
    getPrevBook(){
        return this.arr[this.index - 1];
    };
    changeCurrentBook(newIndex) {
        this.index = newIndex;
    }
}

let book1 = new Book("think and grow" , "rav" , "ravindra" , false, new Date());
let bookList1 = new BookList(["a" , "b", "c"], 0);
