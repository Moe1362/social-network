const router = require('express').Router();
const {
    User,
    Thought
} = require('../../models');

//api/thoughts
router.get('/', async (req, res) => {
    try {
        const dbThoughtData = await Thought.find().select("-__v").sort({
            createdAt: -1
        });
        res.status(200).json(dbThoughtData);
    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }

});

router.post('/', async (req, res) => {
    try {
        const dbThoughtData = await Thought.create(req.body);
        const dbUserData = await User.findOneAndUpdate({
            _id: req.body.userId
        }, {
            $push: {
                thoughts: dbThoughtData._id
            }
        }, {
            new: true
        });
        if (!dbUserData) {
            return res.status(404).json({
                message: 'No thought found with this id!'
            });
        }
        res.status(200).json({
            ...dbThoughtData,
            message: 'Thought created successfully!'
        });

    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
});

router.get('/:thoughtId', async (req, res) => {
    try {
        const dbThoughtData = await Thought.findById(req.params.thoughtId).select("-__v");
        if (!dbThoughtData) {
            return res.status(404).json({
                message: 'No thought found with this id!'
            });
        }
        res.status(200).json(dbThoughtData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.put('/:thoughtId', async (req, res) => {
    try {
        const dbThoughtData = await Thought.findByIdAndUpdate({
            _id: req.params.thoughtId
        }, {
            $set: req.body
        }, {
            runValidators: true,
            new: true
        });
        if (!dbThoughtData) {
            return res.status(404).json({
                message: 'No thought found with this id!'
            });
        }
        res.status(200).json({
            message: 'Thought updated successfully!'
        });
    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
});

router.delete('/:thoughtId', async (req, res) => {
    try {
        const dbThoughtData = await Thought.findByIdAndDelete(req.params.thoughtId);
        if (!dbThoughtData) {
            return res.status(404).json({
                message: 'No thought found with this id!'
            });
        }
        res.status(200).json({
            message: 'Thought deleted successfully!'
        });
    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
});

router.post('/:thoughtId/reactions', async (req, res) => {
    try {
        const dbThoughtData = await Thought.findByIdAndUpdate({
            _id: req.params.thoughtId
        }, {
            $push: {
                reactions: req.body
            }
        }, {
            runValidators: true,
            new: true
        });
        if (!dbThoughtData) {
            return res.status(404).json({
                message: 'No thought found with this id!'
            });
        }
        res.status(200).json({
            message: 'Reaction added successfully!'
        });
    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
});

router.delete('/:thoughtId/reactions/:reactionId', async (req, res) => {
    try {
        const dbThoughtData = await Thought.findByIdAndUpdate({
            _id: req.params.thoughtId
        }, {
            $pull: {
                reactions: {
                    reactionId: req.params.reactionId
                }
            }
        }, {
            runValidators: true,
            new: true
        });
        if (!dbThoughtData) {
            return res.status(404).json({
                message: 'No thought found with this id!'
            });
        }
        res.status(200).json({
            message: 'Reaction deleted successfully!'
        });
    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
});









module.exports = router;