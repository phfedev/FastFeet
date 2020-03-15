const Yup = require('yup');
const Recipient = require('../models/Recipient');

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation falis' });
    }

    const recipientExists = await Recipient.findOne({
      where: { name: req.body.name },
    });
    if (recipientExists) {
      res.status(400).json({ error: 'Recipient already exists' });
    }

    const {
      id,
      name,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
    } = await Recipient.create(req.body);
    return res.json({
      id,
      name,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      rua: Yup.string(),
      numero: Yup.string(),
      complemento: Yup.string(),
      estado: Yup.string(),
      cidade: Yup.string(),
      cep: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation falis' });
    }

    const recipient = await Recipient.findByPk(req.body.id);
    try {
      const {
        id,
        name,
        rua,
        numero,
        complemento,
        estado,
        cidade,
        cep,
      } = await recipient.update(req.body);

      return res.json({
        id,
        name,
        rua,
        numero,
        complemento,
        estado,
        cidade,
        cep,
      });
    } catch (error) {
      return res.status(401).json({ error: 'Incorrect id' });
    }
  }
}

module.exports = new RecipientController();
