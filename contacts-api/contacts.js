const config = require('./config')


const get = async (User) => {
  const users = await User.findAll();

  return users.map(({ dataValues }) => ({
    id: dataValues.id,
    name: dataValues.name,
    email: dataValues.email
  }));
}

const add = async (User, contact) => {
  if (!contact.id) {
    contact.id = Math.random().toString(36)
  }
  await User.findOrCreate({ where: { id: contact.id }, defaults: contact });
  console.log("Adding contact!", contact);

  return contact;
}

const remove = async (User, id) => {
  console.log("Removing contact", id);
  const contact = await User.findOne({ where: { id: id } })
  if (contact) await User.destroy({ where: { id: id } })
  
  return contact;
}

module.exports = {
  get,
  add,
  remove
}
