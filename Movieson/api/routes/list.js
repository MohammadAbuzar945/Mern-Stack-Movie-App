const router = require("express").Router();
const List = require("../models/List");
const verify = require("../verifytoken");


// create
router.post("/", async (req, res) => {
    if (req.user.isAdmin) {
        const newlist = new List(req.body);
        try {

            const savedList = await newlist.save();
            res.status(201).json(savedList);

        } catch (err) {
            res.status(500).json(err)
        }

    }
    else {
        res.status(403).json("You are not Allowed");
    }
});

//delete
router.delete("/:id", async (req, res) => {
    if (req.user.isAdmin) {

        try {

            await List.findByIdAndDelete(req.oarams.id);
            res.status(201).json("The List has been deleted");

        } catch (err) {
            res.status(403).json(err)
        }

    }
    else {
        res.status(403).json("You are not Allowed");
    }
});


//get

router.get("/", verify, async (req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;

    let list = [];

    try {
        if (type) {
            if (genreQuery) {
                list = await List.aggregatee([
                    { $sample: { size: 10 } },
                    {
                        $match: { type: typeQuery, genre: genreQuery },
                    }
                ]);
            } else {
                list = await List.aggregatee([
                    { $sample: { size: 10 } },
                    {
                        $match: { type: typeQuery },
                    }
                ]);
            }


        }
        else {
            list = await List.aggregate([{ $sample: { size: 10 } }]);
        }


    } catch (err) {
        res.status(500).json(err)
    }







})


//delete



//getlist




module.exports = router; 