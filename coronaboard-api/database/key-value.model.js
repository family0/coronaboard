const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'KeyValue',
        {
            key: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true,
            },
            value: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: 'KeyValue',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    fields: [
                        { name: 'key' }
                    ],
                },
            ],
        },
    );
};
