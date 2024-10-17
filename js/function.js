// Array to hold movie data for dynamic updates
const movies = [
    {
        background: '../assets/Munjyaback.jpg',
        title: 'Munjya',
        year: '2024',
        age: '16+',
        duration: '2h',
        genre: 'Horror/Comedy',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae cupiditate quae et tempora, aspernatur autem facilis velit saepe earum incidunt quaerat libero! Doloribus recusandae minus maxime quidem odio velit adipisci?',
    
    },
    {
        background: '../assets/bhediyaback.jpg',
        title: 'Bhediya',
        year: '2023',
        age: '18+',
        duration: '2h 15m',
        genre: 'Horror/Thriller',
        description: 'A chilling tale set in a mysterious forest where a wolf comes to life at nightfall. What unfolds next will keep you at the edge of your seat!',
        
    },
    {
        background: '../assets/kakudaback.jpg',
        title: 'Kakuda',
        year: '2022',
        age: '13+',
        duration: '1h 50m',
        genre: 'Horror/Comedy',
        description: 'A fun and spooky story about a group of friends stumbling upon strange occurrences in their village. Get ready for some good scares and laughs!',
    
    },
    {
        background: '../assets/stree-2back.jpeg',
        title: 'Stree 2',
        year: '2025',
        age: '13+',
        duration: '2h',
        genre: 'Horror/Comedy',
        description: 'The ghostly saga continues in this much-anticipated sequel. Expect more chills, thrills, and laughter as the story unfolds!',
        
    },
    {
        background: '../assets/bhulback.png',
        title: 'Bhutiya',
        year: '2024',
        age: '13+',
        duration: '2h 5m',
        genre: 'Horror',
        description: 'Dive into a haunting world where restless spirits seek revenge in the most spine-chilling ways possible. Not for the faint-hearted!',

    }
];

// Function to update the banner based on clicked carousel item
function updateBanner(movieIndex) {
    const selectedMovie = movies[movieIndex];

    // Change banner background
    document.querySelector('.banner').style.backgroundImage = `url(${selectedMovie.background})`;

    // Update movie content
    document.querySelector('.content h4').innerHTML = `<span>${selectedMovie.year}</span><span><i>${selectedMovie.age}</i></span><span>${selectedMovie.duration}</span><span>${selectedMovie.genre}</span>`;
    document.querySelector('.content p').textContent = selectedMovie.description;

    // Update movie poster
    document.querySelector('.movie').src = selectedMovie.poster;
}

// Attach click event listener to each carousel item
document.querySelectorAll('.carousel-item').forEach((item, index) => {
    item.addEventListener('click', () => updateBanner(index));
});

// Trailer toggle functionality

