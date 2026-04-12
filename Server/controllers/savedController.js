const Saved = require("../models/Saved")

const savedRoutes = async (req, res) => {
    
    try{

        const { from, to, fare, transportMode } = req.body
        const userId = req.user._id

        if ( !from || !to || !fare || !transportMode ) {
            return res.status(400).json({
                message: "All feild are required"
            })
        }
        const saved = await Saved.create({
            userId,
            from,
            to,
            fare,
            transportMode,
        })
        res.status(201).json({
            message: "Saved successfully",
            saved
        })
    } catch (error) {
        console.error("Saved error: ", error)
        res.status(500).json({
            message: "Server error"
        })
    }

}

const getSaved = async (req, res) => {
    try{

        const userId = req.user._id
        const saved = await Saved.find({ userId })
            .sort({ createdAt: -1 })

        res.status(200).json({
            message: "Saved fetch succesfully",
            saved
        })    

    } catch (error) {
        console.error("Get saved error", error)
        res.status(500).json({
            message: "Server error"
        })
    }

}


const deleteSaved = async (req, res) => {
    try{

        const userId = req.user._id
        const { id } = req.params

        const saved = await Saved.findById(id)

        if (!saved) {
            return res.status(404).json({
                message: "Trip not found"
            })
        }

        if (saved.userId.toString() !== userId.toString()) {
            return res.status(401).json({
                message: "Not authorized to delete this save"
            })
        }

        await Saved.findByIdAndDelete(id)

        res.status(200).json({
            message: "Trip deleted succesfully" 
        })

    } catch (error) {
        console.error("Deleted save error", error)
        res.status(500).json({
            message: "Server error"
        })
    }
}

module.exports = { savedRoutes, getSaved, deleteSaved } 