module.exports = function(sequelize, DataTypes) {
  const Doctor = sequelize.define(
    'Doctor',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING()
      },
      surname: {
        type: DataTypes.STRING()
      },
      speciality: {
        type: DataTypes.STRING()
      }
    },
    {
      tableName: 'doctor',
      timestamps: true,
      underscored: true,
    }
  );

  return Doctor;
};