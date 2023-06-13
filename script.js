

let library = [];

class Book {
  constructor(title, author, isRead = false) {
    this.title = title
    this.author = author
    this.isRead = isRead
  }
}

const addBookButton = document.getElementById('add-book')
const form = document.querySelector('form')
const grid = document.querySelector('grid')
const modal = document.querySelector(".modal")
const overlay = document.getElementById('overlay')
const closeModalButton = document.getElementById('close-modal')
