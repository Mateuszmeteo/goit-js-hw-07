// Zadanie 2 - biblioteka SimpleLightbox
// Utwórz taką samą galerię jak w zadaniu pierwszym, 
// używając jednak biblioteki SimpleLightbox, która zajmie 
// się opracowaniem kliknięć w obrazki, otwieraniem 
// i zamykaniem okna modalnego oraz przewijaniem obrazków za pomocą klawiatury.

// Konieczna jest nieznaczna zmiana znacznika galerii, 
// użyj tego szablonu (pamiętaj też o odpowiednim użyciu znacznika li).

// // z polskiej wersji
// // <a class="gallery__item" href="large-image.jpg">
// //   <img class="gallery__image" src="small-image.jpg" alt="Image description" />
// // </a>

// // z angielskiej wersji

// <li class="gallery__item">
//    <a class="gallery__link" href="large-image.jpg">
//       <img class="gallery__image" src="small-image.jpg" alt="Image description" />
//    </a>
// </li>




// Wykonuj to zadanie w plikach 02-lightbox.html i 02-lightbox.js. 
// Możemy je rozbić na kilka mniejszych zadań:

// Tworzenie i renderowanie znacznika zgodnie z tablicą danych galleryItems 
// i dostarczonym szablonem elementu galerii. Użyj gotowego kodu 
// z zadania pierwszego (modyfikując element zgodnie z zaleceniem powyżej).

// Połączenie skryptu i stylów biblioteki poprzez użycie CDN serwisu cdnjs. 
// Koniecznym jest dodanie linków do dwóch plików: simple-lightbox.min.js 
// i simple-lightbox.min.css.

// Inicjalizacja biblioteki po utworzeniu elementów galerii 
// i dodaniu ich do ul.gallery. Aby to zrobić, zapoznaj się z dokumentacją 
// SimpleLightbox - najpierw sekcje «Usage» i «Markup».

// W dokumentacji zwróć uwagę na sekcję «Options» 
// i dodaj wyświetlanie podpisów do obrazków z atrybutu alt. 
// Niech podpis będzie pod spodem i pojawia się po 250 milisekundach 
// po otwarciu obrazka.



import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const galleryBase = document.querySelector('.gallery');


for (const item of galleryItems) {
    const galEl = 
    `<li>
    <a class="gallery__item" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
 </li>`;
 galleryBase.insertAdjacentHTML('beforeend', galEl)
}
const lightBox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionsData:"alt",
    showCounter: true,
    scrollbarWidth: 20
})






// galleryItems.forEach((item) => {
//     galleryBase.innerHTML += 
//     `<li class="gallery__item">
//     <a class="gallery__link" href="${item.ogiginal}">
//        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
//     </a>
//  </li>`;
// })










// lightBox.on('show.simplelightbox', function () {

// })









// galleryBase.addEventListener('click', (e) => {
//     e.preventDefault()
//     show.SimpleLightbox()
// })



// {captionDelay: 250}) 
// {animationSpeed}) 





