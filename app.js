const express = require('express');
const app = express();
const nav = [
    {
        link:'/books', name:'BOOKS'
    },
    {
        //link:'/addbooks', name:'ADD BOOKS'
        link:'/admin', name:'ADD BOOKS'
    },
    {
        link:'/authors', name:'AUTHORS'
    },
    {
        link:'/addauthor', name:'ADD AUTHORS'
    },
    {
        link:'/login', name:'LOGIN'
    },
    {
        link:'/signup', name:'SIGNUP'
    }
];

// Calling JS files from Routes Folder
const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes');
const signupRouter = require('./src/routes/signupRoutes');
//const addbooksRouter = require('./src/routes/addbookRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);
const updateRouter = require('./src/routes/updateRoutes')(nav);
const deleteRouter = require('./src/routes/deleteRoutes')(nav);
const addauthorRouter = require('./src/routes/addauthorRoutes')(nav);
const changeRouter = require('./src/routes/changeRoutes')(nav);
const removeRouter = require('./src/routes/removeRoutes')(nav);
// End of calling files//


app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/addauthor',addauthorRouter);

//app.use('/addbooks',addbooksRouter);
app.use('/admin',adminRouter);
app.use('/update',updateRouter);
app.use('/delete',deleteRouter);

app.use('/change',changeRouter);
app.use('/remove',removeRouter);



app.get('/',function(req,res){
    res.render("index", 
    {
        nav,
        title:'Library'
        

    });

});


app.listen(5000);