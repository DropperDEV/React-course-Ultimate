const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

/** 



const pagesAllBooks = books.reduce((acc, books) => acc + books.pages, 0);
console.log(pagesAllBooks)

const arr = [3, 4, 10, 2, 6, 8, 1];
const sorted = arr.slice().sort((a, b) => a - b);
console.log(sorted)

const sortedPagesbyValue = books.slice().sort((a, b) => a.pages - b.pages);
console.log(sortedPagesbyValue)

ADDING A NEW OBJECT TO ARRAY 
const newBook = {
  id: 6,
  titles: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};
const booksAfterAdd = [...books, newBook]
console.log(booksAfterAdd)

2) DELETE BOOKS OBJECTS FROM ARRAY
const bookAfterDelete = booksAfterAdd.filter(book => book.id !== 3)
console.log(bookAfterDelete)


3) UPDATE BOOKS OBJECTS IN ARRAY

const bookAfterUpdate = bookAfterDelete.map(book => book.id === 1 ? {...book, pages: 120} : book)
console.log(bookAfterUpdate)
*/

//ASYNC PROMMISES
/**fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));
console.log("jonas")

//ASYNC/AWAIT MORE MODERN
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data =await res.json();
  console.log(data)
  
}

getTodos();


console.log('Jonas')*/
function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

 const book1 = getBook(4);
DESTRUCTRING 
const { genres, title, author, publicationDate, pages, hasMovieAdaptation } =
  book1;

//REST cria um array que contém o resto de atributos de um objeto, 
//ou cria um array com diversos parametros
const [genrePrimary, generosecundario, ...resto] = genres;
 console.log(resto)

SPREAD

const newUpdate = {
  ...book1,
  moviePublicationData: hasMovieAdaptation ? "2001-12-19" : undefined,
  newGenre: ["Epic fantasy", ...genres],
};

//TEMPLATE STRING

const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${publicationDate.split(
  ","
)} and ${hasMovieAdaptation ? "was" : "wasn't"} public ${
  hasMovieAdaptation ? "in " + newUpdate.moviePublicationData : "yet"
}`;

console.log(summary)

//ARROW FUNCTIONS

const GetYear = (str) => str.split(",")[0];

//When needed to use scope and function body, use return.
const GetYear = (str) =>  {
  return str.split(",")[0]
}

console.log(GetYear(publicationDate));

//They all read in left-right direction
//|| referred to 'or' need one argument to be true to print
console.log(hasMovieAdaptation || 'no have')

//&&  referred to 'and' need two or more arguments be true to print
console.log('' && 0)

//?? Nullish coallescing referred when the first argument are null or undefined, call the second one.
console.log(null ?? hasMovieAdaptation)

function GetTotalReviewCount(book1) {
  if the first setence is undefined or null will the value be 0
  const goodreads = book1.reviews?.goodreads?.reviewsCount ?? 0;
  ?. check if exist and if not will turn undefined.
  const librarything = book1.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(GetTotalReviewCount(book1));

const books = getBooks();

const x = [1, 2, 3, 4, 5].map((i) => i * 3);
console.log(x);

const alltitltes = books.map((book) => book.title);
console.log(alltitltes);

const EssentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewCount: GetTotalReviewCount(book),
}));

console.log(EssentialData);

const LongBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(LongBooksWithMovie);

const AdventureBooks = books.filter((book) =>
  book.genres.includes("adventure")
);
console.log(AdventureBooks)