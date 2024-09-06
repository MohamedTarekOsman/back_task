const { EntitySchema } = require('typeorm');

const Car = new EntitySchema({
  name: 'Car', 
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    name: {
      type: 'varchar',
    },
    color: {
      type: 'varchar',
    },
    model: {
      type: 'varchar',
    },
    code: {
      type: 'varchar',
    },
  },
});

module.exports = Car;
