
var User = require('../model/userSchema');
const { use } = require('../routes');
// var db = require('../model/dbs')

module.exports = {

    getUsers: async (req, res) => {
        try {
            let user = await User.find();
            res.json(user)
        } catch (error) {
            res.json({ message: error.message });
        }
    },

    addUser: async (req, res) => {
        const user = req.body;
        const newUser = new User(user)

        try {
            await newUser.save();
            res.json(newUser)
        } catch (error) {
            res.json({ message: error.message });
        }
    },

    getUserById: async (req, res) => {
        const id = req.params.id
        try {
            const user = await User.findById(id);
            res.json(user);
        } catch (error) {
            res.error({ message: error.message });
        }

    },

    editUser: async (req, res) => {

        try {
            var { Name, Email, Salary, Designation, _id } = req.body;
            var obj = {
                Name: Name,
                Email: Email,
                Salary: Salary,
                Designation: Designation
            }
            User.findByIdAndUpdate(_id, { $set: obj }, { new: true }, function (err, result) {
                if (err) {
                    console.log(err);
                }
                res.send(result)
            })
        } catch (error) {
            res.json({ message: error.message });
        }
    },


    deleteUser: async (req, res) => {
        try {
            await User.deleteOne({ _id: req.params.id });
            res.send("User Delete")
        } catch (error) {
            res.json({ message: error.message });
        }
    }
}