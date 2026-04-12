const History = require("../models/History")

const saveHistory = async (req, res) => {
    try {

        const { from, to, fare, transportMode } = req.body
        const userId = req.user._id

        if (!from || !to || !fare || !transportMode){
            return res.status(400).json({ message: "All field are required" })
        }
        const history = await History.create({
            userId,
            from,
            to,
            fare,
            transportMode,
        })     
        res.status(201).json({
            message: "Trip saved successfully",
            history
        })
    } catch (error) {
        console.error("Save history error: ", error)
        res.status(500).json({ message: "Server error" })
    }
}

const getHistory = async (req, res) =>{
    try{
        
        const userId = req.user._id
        const history = await History.find({ userId })
            .sort({ createdAt: -1 })

        res.status(200).json({
        message: "History fetched successfully",
        history
    }) 

    } catch(error){
        console.error("Get history error", error)
        res.status(500).json({ message: "Server error" }) 
    }

}

const deleteHistory = async (req, res) => {
    try{

        const userId = req.user._id
        const { id } = req.params

        const history = await History.findById(id)

        if (!history){
            return res.status(404).json({ message: "Trip not found" })
        }

        if (history.userId.toString() !== userId.toString()) {
            return res.status(401).json({ message: "Not authorized to delete this trip" })
        }

        await History.findByIdAndDelete(id)

        res.status(200).json({ message: "Trip deleted successfully" })

    } catch(error){
        console.error("Deleted history error", error)
        res.status(500).json({ message: "Server error" })
    } 
}

module.exports = { saveHistory, getHistory, deleteHistory }