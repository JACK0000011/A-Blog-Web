module.exports = (sequelize, Datatypes) => {
    const Users = sequelize.define("Users", {
        username: {
            type: Datatypes.STRING,
            allowNull: false,

        },
        email: {
            type: Datatypes.STRING,
            allowNull: false,

        },
        password: {
            type: Datatypes.STRING,
            allowNull: true,
        },

    });

    return Users;
};