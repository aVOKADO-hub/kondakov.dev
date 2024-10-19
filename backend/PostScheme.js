import mongoose from 'mongoose'


const postSchema = new mongoose.Schema({
    responsible_person: { type: String, required: true },
    rank: { type: String, required: true },
    itemName: { type: String, required: true },
    category: { type: Number, required: true },
    quantity: { type: String, required: true },
    unit: { type: String, required: true },
    serialNumber: { type: Number, default: 0 }
}, {
    versionKey: false
});
export default postSchema