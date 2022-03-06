const router = require("express").Router();
const Movie = require("../models/Movie");
const verify = require("../verifytoken");


// create
router.post("/", async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body);
        try {

            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie);

        } catch (err) {
            res.status(500).json(err)
        }

    }
    else {
        res.status(403).json("You are not Allowed");
    }
});

//update

router.put("/:id", async (req, res) => {
    if (req.user.isAdmin) {

        try {

            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            },
                {
                    new: true
                }
            );

            res.status(201).json(savedMovie);

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

            await Movie.findByIdAndDelete(req.params.id,);

            res.status(201).json("The movie has been deleted");

        } catch (err) {
            res.status(500).json(err)
        }

    }
    else {
        res.status(403).json("You are not Allowed");
    }
});

//get

router.delete("/:id", verify, async (req, res) => {

    try {

        const movie = await Movie.findByIdAndDelete(req.params.id,);
        res.status(201).json(movie);

    } catch (err) {
        res.status(500).json(err)
    }

}


);


//get all movies

router.get("/", async (req, res) => {
    if (req.user.isAdmin) {

        try {
            const movies = await Movie.find();

            res.status(200).json(movies);

        } catch (err) {
            res.status(500).json(err)
        }

    }
    else {
        res.status(403).json("You are not Allowed");
    }
});

//get most recent

router.get("/", async (req, res) => {
    if (req.user.isAdmin) {

        try {
            const movies = await Movie.find();

            res.status(200).json(movies.reverse());

        } catch (err) {
            res.status(500).json(err)
        }

    }
    else {
        res.status(403).json("You are not Allowed");
    }
});
// // //getrandom

// // router.delete("/random" , verify , async (req, res) => {
// //     const type = req.query.type;

// //     try {
// //         if(type==="series"){
// //             movie = await Movie.aggregate()
// //         }
// //     } catch (err) {
// //         res.status(500).json(err)
// //     }

// // }


// );










module.exports = router; 