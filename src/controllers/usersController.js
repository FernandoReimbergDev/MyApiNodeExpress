class UsersController {
  /**
   * uma classe controller deve ter no maximo 5 metodos por uma boa pratica.
   * index - GET para listar vários registros.
   * show - GET para exibir um registro especifico.
   * create - POST para criar um registro.
   * update - PUT para atualizar um registro.
   * delete - DELETE para deletar um registro.
   */
  create(req, res) {
    const { name, email, password } = req.body;

    res.json({ name, email, password });
  }

  index(req, res) {
    res.json({
        name: "slink",
        email: "slink@gmail.com",
        password: "1234"
    })
  }
}

module.exports = UsersController;
