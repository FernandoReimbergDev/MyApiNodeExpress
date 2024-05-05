//exemplo para criar tabela: //Nota IF NOT EXISTS eu adicionei para nao criar a tabela caso ela ja exista.

CREATE TABLE IF NOT EXISTS users (
	id INTEGER PRIMARY KEY AUTOINCREMENT, 
  name VARCHAR, 
  email VARCHAR, 
  password VARCHAR,
  avatar VARCHAR NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

//exemplo de insert de dados

INSERT INTO users
(name, email, password)
VALUES 
('Luiz Fernando Reimberg', 'fernandoreimberg14@hotmail.com', '12341234')

//exemplo de alterar usuario 
UPDATE users SET 
avatar = 'fernando.png' 
WHERE id = 1;

//exemplo de deletar usuario
DELETE FROM users WHERE id = 1

//exemplo mudar nome da tabela

ALTER TABLE users RENAME TO clients

//exemplo de adicionar uma coluna na tabela

ALTER TABLE users ADD status VARCHAR 

//exemplo para renomear uma coluna

ALTER TABLE users RENAME COLUMN status TO active


//exemplo para deletar uma coluna 

ALTER TABLE users DROP COLUMN status

SQL - COMANDOS DML = data manupulation language

C - created - INSERT 
R - read - SELECT 
U - update - UPDATE
D - delete - DELETE



Increments: Usado para criar um campo autoincrementado que geralmente é usado como chave primária.


table.increments('id');
Inteiro: Para armazenar números inteiros.


table.integer('age');
String: Para armazenar strings de tamanho variável.


table.string('name', 100); // Segundo parâmetro é o tamanho máximo da string
Texto: Para armazenar strings de tamanho variável, geralmente para texto longo.


table.text('description');
Decimal: Para armazenar números decimais.


table.decimal('price', 8, 2); // Primeiro parâmetro é o número total de dígitos, o segundo é o número de dígitos após o ponto decimal
Booleano: Para armazenar valores verdadeiro/falso.


table.boolean('is_active');
Data: Para armazenar datas.


table.date('birthdate');
Hora: Para armazenar horas.


table.time('meeting_time');
Data e Hora: Para armazenar datas e horas.


table.timestamp('created_at').defaultTo(knex.fn.now());
Chave Estrangeira: Para definir uma chave estrangeira que referencia outra tabela.


table.integer('author_id').unsigned().references('id').inTable('authors');
Valor Padrão: Para definir um valor padrão para uma coluna.


table.string('status').defaultTo('active');