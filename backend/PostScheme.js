import mongoose from 'mongoose'


const postSchema = new mongoose.Schema({
    responsible_person: { type: String, required: true },
    rank: { type: String, required: true },
    test_unit: { type: String, required: true },
    type_of_test: { type: String, required: true },
    who_cant_take_test: { type: String, required: true },
    count_passed: { type: Number, required: true }
}, {
    versionKey: false
});
export default postSchema