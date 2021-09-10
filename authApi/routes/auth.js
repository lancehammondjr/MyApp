const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//Register User
router.post('/register', async (req,res) => {

    //Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);


    //Creating new User
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    });
    
    const result = await user.save();
    const {password, ...data} = await result.toJSON();

    res.send(data);

});

//Login User
router.post('/login', async (req,res) => {

    // Checking if the user exist
    const user = await User.findOne({ email: req.body.email });


    if (!user) return res.status(404).send({
        message: 'user is not found'
    });

    //Checking if password is correct
    if (!await bcrypt.compare(req.body.password, user.password)) {
        return res.status(400).send({
            message: 'Invalid password'
        });
    }

    //Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 //1 day
    })
    
    res.send({
        message: 'success'
    })

});

router.get('/user', async (req,res) => {
    try {
        const cookie = req.cookies['jwt']
        const claims = jwt.verify(cookie, process.env.TOKEN_SECRET)

        if (!claims) {
            return res.status(401).send({
                message: 'unauthenticated'
            });
        }

        const user = await User.findOne({_id: claims._id});
        const {password, ...data} = await user.toJSON();

        res.send(data)
    }catch (e) {
        return res.status(401).send({
            message: 'unauthenticated'
        });
    }
});

router.post('/logout', (req,res) => {
    res.cookie('jwt', '', {maxAge: 0});

    res.send({
        message: 'success'
    })
});

module.exports = router;