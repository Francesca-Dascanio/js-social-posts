/*

Milestone 1:
- Array di posts; ogni oggetto è un post
- Ogni oggetto posto deve contenere: id, nome autore, foto autore, data del post, testo, immagine, numero like

Milestone 2:
- Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

Milestone 3 - Se clicchiamo sul tasto "Mi Piace":
1. cambiamo il colore al testo del bottone OK
2. incrementiamo il counter dei likes relativo. OK
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like. OK

BONUS:
1. Formattare le date in formato italiano (gg/mm/aaaa) OK
2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola LF).
3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

*/



// Milestone 1
const posts = [
    {
        id: 1,
        authorName: "Phil Mangione",
        authorPhoto: "https://unsplash.it/300/300?image=15",
        created: "2021-06-25",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        image: "https://unsplash.it/300/300?image=171",
        likes: 80

    },
    {
        id: 2,
        authorName: "Sofia Perlari",
        authorPhoto: "https://unsplash.it/300/300?image=10",
        created: "2021-09-03",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        image: "https://unsplash.it/300/300?image=112",
        likes: 120
    },
    {
        id: 3,
        authorName: "Chiara Passaro",
        authorPhoto: "https://unsplash.it/300/300?image=20",
        created: "2021-05-15",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        image: "https://unsplash.it/600/400?image=234",
        likes: 78
    },
    {
        id: 4,
        authorName: "Luca Formicola",
        authorPhoto: null,
        created: "2021-04-03",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        image: "https://unsplash.it/600/400?image=24",
        likes: 56
    },
    {
        id: 5,
        authorName: "Alessandro Sainato",
        authorPhoto: "https://unsplash.it/300/300?image=29",
        created: "2021-03-05",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        image: "https://unsplash.it/600/400?image=534",
        likes: 95
    }
];
console.log(posts);





// Secondo array per salvare gli ID dei post su cui ho cliccato
const arrayPostLiked = [];


// Milestone 2 e 3
// Richiama il div container generale
const container = document.getElementById('container');

// Crea questa struttura per 5 volte (quanti sono i post) tramite ciclo for 
for (let i = 0; i < posts.length; i++) {


    // INIZIO BONUS 1: formatta la data (il valore della proprietà created) in formato italiano
    const string = posts[i].created;

    const dataSplitted = string.split('-');

    const dataInverted = [];

    for (let i = dataSplitted.length - 1; i >= 0; i--) {
        dataInverted.push(dataSplitted[i]);
    }

    const newString = dataInverted.join('-');
    console.log(newString);

    posts[i].created = newString;
    console.log(posts[i].created);
    // FINE BONUS 1


    // INSERIMENTO IN HTML
    // All'interno del div container aggiungere con js il contenitore per ogni singolo post
    const singlePost = document.createElement('div');
    singlePost.classList.add('post');
    container.append(singlePost);


    // All'interno del div singlePost aggiungere in js il contenitore post-header --> sarà la stessa cosa per postText - postImage - postFooter
    const postHeader = document.createElement('div');
    postHeader.classList.add('post__header');
    singlePost.append(postHeader);

    // All'interno del div post-header aggiungere in js il contenitore post-meta
    const postMeta = document.createElement('div');
    postMeta.classList.add('post-meta');
    postHeader.append(postMeta);

    // All'interno del div post-meta aggiungere in js il contenitore post-meta-icon
    const postMetaIcon = document.createElement('div');
    postMetaIcon.classList.add('post-meta__icon');
    postMeta.append(postMetaIcon);

        // Qui dentro dovrò inserire le immagini profilo
        const authorIcon  =  `<img class="profile-pic" src="${posts[i].authorPhoto}">`;
        
        
        // INIZIO BONUS 2
        if (authorIcon == `<img class="profile-pic" src="null">`) {
            
            // Crea sfondo sostitutivo 
            postMetaIcon.classList.add('fallback-width');

            const fallback = document.createElement('div');
            fallback.classList.add('profile-pic','fallback');

            // Crea iniziali 
            const stringAuthor = posts[i].authorName;
            const stringSplitted = stringAuthor.split(' ');

            let arrayInitials = [];

            for (let i = 0; i < stringSplitted.length; i++) {
                console.log(stringSplitted[i]);
                const wordsSplitted = stringSplitted[i].split('');
                const letters = wordsSplitted[0];
                arrayInitials.push(letters);
            }
            
            const initials = arrayInitials.join('');
            fallback.innerHTML = `${initials}`;

            postMetaIcon.append(fallback);

        }
        else {
            postMetaIcon.innerHTML = authorIcon;
        }
        // FINE BONUS 2

    // All'interno del div post-meta aggiungere in js il contenitore post-meta-data
    const postMetaData = document.createElement('div');
    postMetaData.classList.add('post-meta__data');
    postMeta.append(postMetaData);

        // Qui dentro dovrò inserire il nome degli autori e le date di creazione dei post
        const authorData  =  `<div class="post-meta__author">${posts[i].authorName}</div>
                              <div class="post-meta__time">${posts[i].created}</div>  `;
        
        postMetaData.innerHTML = authorData;

    // All'interno del div singlePost aggiungere in js il contenitore post-text
    const postText = document.createElement('div');
    postText.classList.add('post__text');
    postText.innerHTML = `<div class="post-meta__author">${posts[i].text}</div>`;
    singlePost.append(postText);

    // All'interno del div singlePost aggiungere in js il contenitore post-image
    const postImage = document.createElement('div');
    postImage.classList.add('post__image');
    postImage.innerHTML = `<img src="${posts[i].image}">`;
    singlePost.append(postImage);

    // All'interno del div singlePost aggiungere in js il contenitore post-footer
    const postFooter = document.createElement('div');
    postFooter.classList.add('post__footer');
    singlePost.append(postFooter);

    // All'interno del div post-footer aggiungere in js il contenitore post-likes
    const postLikes = document.createElement('div');
    postLikes.classList.add('likes', 'js-likes');
    postFooter.append(postLikes);

    // // All'interno del div post-likes aggiungere in js il contenitore like-thumb
    const likeThumb = document.createElement('div');
    likeThumb.classList.add('likes__cta');
    postLikes.append(likeThumb);

    //     // Link al pollice alzato + scritta
        const link = document.createElement('a');
        link.classList.add('like-button', 'js-like-button');
        // link.setAttribute('href', '#');
        link.setAttribute('data-postid', `${posts[i].id}`);
        link.innerHTML = `<i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                          <span class="like-button__label">Mi Piace</span>`;

        likeThumb.append(link);


    // // All'interno del div post-likes aggiungere in js il contenitore like-counter
    const likeCounter = document.createElement('div');
    likeCounter.classList.add('likes__counter');
    postLikes.append(likeCounter);
    likeCounter.innerHTML = `Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone`;


    // All'evento clicca il link (che per me è sia icona che testo)
    link.addEventListener ('click',
        
        function() {

            // Cambia colore
            link.innerHTML = `<i class="like-button__icon fas fa-thumbs-up like-button--liked" aria-hidden="true"></i>
            <span class="like-button__label like-button--liked">Mi Piace</span>`;

            // Incremento counter di 1 
            likeCounter.innerHTML = `Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes + 1}</b> persone`;

            // Allora salva l'id di quel post in un array a parte
            arrayPostLiked.push(posts[i].id);
            console.log(arrayPostLiked);

        }
    )




}



