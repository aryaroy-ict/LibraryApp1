const express = require('express');
const app = express();
const nav = [
    {
        link:'/books', name:'BOOKS'
    },
    {
        link:'/addbooks', name:'ADD BOOKS'
    },
    {
        link:'/authors', name:'AUTHORS'
    },
    {
        link:'/login', name:'LOGIN'
    },
    {
        link:'/signup', name:'SIGNUP'
    }
];

// Calling JS files from Routes Folder
const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorsRouter = require('./src/routes/authorRoutes')(nav)
const loginRouter = require('./src/routes/loginRoutes');
const signupRouter = require('./src/routes/signupRoutes');
const addbooksRouter = require('./src/routes/addbookRoutes');
// End of calling files//



app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/addbooks',addbooksRouter);

app.get('/',function(req,res){
    res.render("index", 
    {
        nav,
        title:'Library'
        

    });

});


app.listen(5000);