// Zadanie 1 - galeria obrazów
// Utwórz galerię z możliwością kliknięcia w jej elementy 
// i przeglądania pełnego obrazu w oknie modalnym. 
// Obejrzyj wersję demonstracyjną wideo o działaniu galerii.

// Wykonaj to zadanie w plikach 01-gallery.html i 01-gallery.js. 
// Działanie strony możemy “rozbić” na kilka zadań

// Tworzenie i renderowanie znacznika zgodnie z tablicą danych galleryItems 
// i dostarczonym szablonem elementu galerii.

// Implementacja oddelegowania do div.gallery i otrzymania url większego obrazu.

// Połączenie skryptu i stylów biblioteki okna modalnego basicLightbox. 
// Użyj CDN serwisu jsdelivr i dodaj do projektu linki do 
// zminimalizowanych (.min) plików biblioteki.

// Otworzenie okna modalnego po kliknięciu w element galerii. 
// Aby to zrobić, zapoznaj się z dokumentacją i przykładami.

// Zmiana wartości atrybutu src elementu <img> w oknie modalnym przed otworzeniem. 
// Użyj gotowego znacznika okna modalnego z obrazem z przykładów 
// biblioteki basicLightbox.


// Znacznik elementu galerii
// Link do oryginalnego obrazka powinien być przechowywany w atrybucie data source w elemencie <img>, oraz w href linku. Nie dodawaj innych tagów HTML lub klas CSS oprócz tych, które znajdują się w tym szablonie.

// <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>


// Zwróć uwagę na to, że obrazek zamieniono w link, a więc po domyślnym 
// kliknięciu użytkownik zostanie przekierowany na inną stronę. 
// Zablokuj to zachowanie.

// Zamknięcie z klawiatury
// UWAGA:

// Następna funkcja nie jest obowiązkowa przy oddawaniu zadania, 
// ale będzie dobrą dodatkową praktyką.

// Dodaj zamknięcie okna modalnego po naciśnięciu klawiszy Escape. 
// Zrób tak, aby nasłuchiwanie klawiatury było aktywne tylko wtedy, 
// gdy otwarte jest okno modalne. W bibliotece basicLightbox istnieje 
// metoda na programowe zamknięcie okna modalnego.




import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);




const galleryBase = document.querySelector('.gallery');




for ( const image of galleryItems) {
    const galleryEl = 
    `<div class="gallery__item">
    <a class="gallery__link" href="${image.original}">
        <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
        />
    </a>
    </div>
`;
    galleryBase.insertAdjacentHTML('beforeend', galleryEl)
}

galleryBase.addEventListener('click', (e) => {
    e.preventDefault();
    const gallery = basicLightbox.create(`
        <img 
            src="${e.target.dataset.source}"
        />`)
        gallery.show();
        window.addEventListener('keydown', (e) => {
            if(e.code === `Escape`) {
                gallery.close()
            }
        })

});





// .................................... 
// też działa: 

// galleryBase.addEventListener('click', (e) => {
//     e.preventDefault();
//     basicLightbox.create(`
//         <img 
//             src="${e.target.dataset.source}"
//         />`)
//         .show();

// });



// galleryBase.addEventListener('keydown', (e) =>{
//     if (e.code === 'Escape')
//     galleryBase.close()
// })

// ....................................


// keydown









// galleryBase.addEventListener('click', (e) => {
//     e.preventDefault();
//     const inst = basicLightbox.create(`
//         <img 
//             src="${e.target.dataset.source}"
//         />`)
//         inst.show();

// });







// const galleryPicture = createGalleryList(galleryItems);

// function createGalleryList(image) {
//     return galleryItems
//     .map(({ preview, original, description }) => {
//         return `
//     <div class="gallery__item">
//         <a class="gallery__link" href="${original}">
//             <img
//             class="gallery__image"
//             src="${preview}"
//             data-source="${original}"
//             alt="${description}"
//             />
//         </a>
//         </div>
//     `;
//     })
//     .join('');

    
    
// }
// galleryBase.insertAdjacentHTML('beforeend', galleryPicture);

// galleryBase.addEventListener('click', (e) => {
//     e.preventDefault();
//     basicLightbox.create(`
//         <img 
//             src="${e.target.dataset.source}"
//         />`)
// .show()

// })






// galleryBase.insertAdjacentElement('beforeend', imageBody.join(''))
// galleryList(image);


// galleryBase

// const galleryModal = basicLightbox.create(`
// <img 
// `)





// const galleryListEl = document.createElement('li')


// const basicGallery = basicLightbox.create(`
        // <div class="gallery__item">
        // <a class="gallery__link" href="large-image.jpg">
        //     <img
        //     class="gallery__image"
        //     src="${preview}
        //     data-source="${original}"
        //     alt="${description}"
        //     />
        // </a>
        // </div>
// 	`)
    
//     // .show()






















