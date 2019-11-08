//Routes
app.get('/',(req,res)=>{
    res.render('index')
})


app.post('/quotes',(req,res)=>{
    const quote = new Quote();
    quote.name = req.body.name;
    quote.notName = req.body.notName;
    quote.save()
        .then(newUserData => {
            console.log('user created: ', newUserData);
            res.redirect('/quotes')
        })
        .catch(err => {
            console.log(err);
            res.redirect('/')
        });
    })


app.get('/quotes',(req,res)=>{
    Quote.find()
        .then(quotes =>{
            res.render('quotes',{quotes})
        })
        .catch(err => res.json(err))
})
