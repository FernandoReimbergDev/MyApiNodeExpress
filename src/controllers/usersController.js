const {hash} = require("bcryptjs")
const AppError = require("../utils/AppError")

const sqliteConnection = require("../database/sqlite")

class UsersController {
  /**
   * uma classe controller deve ter no maximo 5 metodos por uma boa pratica.
   * index - GET para listar vários registros.
   * show - GET para exibir um registro especifico.
   * create - POST para criar um registro.
   * update - PUT para atualizar um registro.
   * delete - DELETE para deletar um registro.
   */
  async create(req, res) {
    const { name, email, password } = req.body;

    const database = await sqliteConnection();

    const checkUserExist = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if(checkUserExist){
      throw new AppError("Este e-mail já está em uso.")
    }

    const hashedPassword = await hash(password, 8);

    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)", 
      [name, email, hashedPassword]
    );

    return res.status(201).json();
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
