const express=require('express')
const app=express()
const path=require('path')
const bodyParser=require('body-parser')




app.use(express.static(path.join(__dirname+'/static')))
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'))

})
app.get('/create', (req,res)=>{
    res.sendFile(path.join(__dirname+'/static/New.html'))

})
app.get('/forgot', (req,res)=>{
    res.sendFile(path.join(__dirname+'/static/forgot.html'))

})

app.post('/login', (req, res) => {

    const user=req.body.username;
    const passw=req.body.password;
    if (user=="login" & passw==123){
        res.send('Login Success');
        
    }
    else{
        res.send('Login Failed');
    }
 
    
});





app.listen(3000, () => {
    console.log('App listening on port 3000!');
});