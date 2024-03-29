const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'user',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
            },
        },
        { timestamps: false },
    );
};