const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_id: { type: String, required: true},
    username: { type: String, required: true},
    avatar: {type: String, required: true},
    economy: {
        balance: {
            pocket: { type: Number, default: 0 },
            bank: { type: Number, default: 500 }
        },
        bank: {
            xp: { type: Number, default: 0 },
            lvl: { type: Number, default: 2 }
        }
    },
    waifu: {
        price: { type: Number, default: 100 },
        owned_by: { type: String, default: null}
    },
    misc: {
        donator: { type: Boolean, default: false },
        tester: { type: Boolean, default: false }
    }
})

module.exports = mongoose.model('User', userSchema)
