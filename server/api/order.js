//DataBase model
import orders from "../model/orderSchema.js";


//get all order
export const allOrder = async (req, res) => {
    try{
        //check if user exist with that username
        const allOrders= await orders.find();
        res.status(200).json(allOrders);

    }catch(err){
        res.status(403).json({ msg: "Something went wrong!" });
    }
}


//store user border
export const setOrder = async (req, res) => {
    try {
        const { fullname, product, quality, quantity, amount } = req.body;
        if(!fullname || !product || !quality || !quantity || !amount ) return res.status(400).json({ msg: "Invalid credentials. " });

        const newOrder = new orders({
            fullname,
            product,
            quality,
            quantity,
            amount
        });

        const savedOrder = await newOrder.save();
        res.status(201).json({ msg: "Ordered Successful" });

      } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



//Remove user border
export const removeOrder = async (req, res) => {
    try {

        const { id } = req.params;
        const order = await orders.findOne({_id : id});

        await orders.remove(order);
        res.status(200).json({ msg: "Ordered Removed" });

      } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


//reject user border
export const declineOrder = async (req, res) => {
    try {

        const { id } = req.params;
        const order = await orders.findOne({_id : id});
        if(!order) return res.status(404).json({ msg: "something went wrong" });

        const updatedOrder = order({
            fullname,
            product,
            quality,
            quantity,
            amount,
            status: "declined"
        });


      } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

