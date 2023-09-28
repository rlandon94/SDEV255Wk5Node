const express = require('express');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//listen for request
app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', { title: 'Home', blogs});
    
    //res.send('<p>home page</p>');
    //res.sendFile('./view/index.html', { root: __dirname})
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
    //res.send('<p>about page</p>');
    //res.sendFile('./view/about.html', { root: __dirname})
});

app.get('/blogs/create', (req,res) => {
    res.render('create', { title: 'Create a new blog'});
})

// //redirect
// app.get('/about-us', (req,res) => {
//     res.redirect('/about');
// })

//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
})