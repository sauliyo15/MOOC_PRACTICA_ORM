module.exports = function(sequelize, DataTypes) {
  const Hospital = sequelize.define(
    'Hospital',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING()
      },
      city: {
        type: DataTypes.STRING()
      }
    },
    {
      tableName: 'hospital',
      timestamps: true,
      underscored: true,
    }
  );

  return Hospital;
};