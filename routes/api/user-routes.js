const router = require('express').Router();
const {
    User
} = require('../../models');


//api/users
//get all users
router.get('/', async (req, res) => {
    try {
        const dbUserData = await User.find().select('-__v');
        res.json(dbUserData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});
//create a new user
router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.create(req.body);
        res.status(200).json(dbUserData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }


});

//api/users/:userId
router.get('/:userId', async (req, res) => {
    try {
        const dbUserData = await User.findById(req.params.userId)
            .select('-__v')
            .populate("friends")
            .populate("thoughts");
        if (!dbUserData) {
            return res.status(404).json({
                message: 'No user found with this id!'
            });
        }
        res.status(200).json(dbUserData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.put('/:userId', async (req, res) => {
    try {
        const dbUserData = await User.findByIdAndUpdate({
                _id: req.params.userId
            }, {
                $set: req.body
            }, {
                runValidators: true,
                new: true
            }

        );
        if (!dbUserData) {
            return res.status(404).json({
                message: 'No user found with this id!'
            });
        }
        res.status(200).json(dbUserData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:userId', async (req, res) => {
    try {
        const dbUserData = await User.findByIdAndDelete(req.params.userId);
        if (!dbUserData) {
            return res.status(404).json({
                message: 'No user found with this id!'
            });
        }
        
        res.status(200).json({
            message: 'User and associated thoughts deleted!'
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
//api/users/:userId/friends/:friendId


router.post('/:userId/friends/:friendId', async (req, res) => {
    try{
        const dbUserData = await User.findByIdAndUpdate(
            {_id: req.params.userId},
            {$addToSet: {friends: req.params.friendId}},
            {new: true}
        );
        if (!dbUserData) {
            return res.status(404).json({
                message: 'No user found with this id!'
            });
        }
        res.status(200).json(dbUserData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:userId/friends/:friendId', async (req, res) => {
    try{
        const dbUserData = await User.findByIdAndUpdate(
            {_id: req.params.userId},
            {$pull: {friends: req.params.friendId}},
            {new: true}
        );
        if (!dbUserData) {
            return res.status(404).json({
                message: 'No user found with this id!'
            });
        }
        res.status(200).json(dbUserData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});




module.exports = router;