const data = require("../schemas/pokemon.json")

// Get all pokemon
const getAllPokemon = async (req,res) => {
    try {
        if (!data.length) {
            res.status(200).json({ msg: "No pokemon found"});
        } else {
            res.status(200).json({ data });
        } 
    } catch (error) {
            res.status(500).json(error)
        }
    }

// Get Single Pokemon
const getSinglePokemon = async (req, res) => {
try {
    const id = req.params.id;
    const pokemon = data.find((p) => p.id === parseInt(id));
    if (pokemon) {
        return res.status(200).json({pokemon})
    }
} catch (error) {
    res.status(500).json(error)
}
}

// Get Single Info
const getSingleInfo = async (req, res) => {
    try {
        const id = req.params.id;
        const info = req.params.info.toLowerCase();
        const pokemon = data.find((p) => p.id === parseInt(id));
        if (pokemon) {
            if (pokemon[info]) {
            return res.status(200).json({ [info]: pokemon[info]})
            }
        }
    } catch (error) {
        res.status(500).json(error)
    }
    }

module.exports = { getAllPokemon, getSinglePokemon, getSingleInfo }