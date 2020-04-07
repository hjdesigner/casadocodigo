class LivroDao {
  constructor(db) {
    this.db = db;
  }

  lista() {
    return new Promise((resolve, reject) => {
      this.db.all(
        'SELECT  * FROM livros',
        (erro, resultados) => {
          if (erro) return reject('Não foi possível listar os livros!');
          return resolve(resultados);
        }
      );  
    })
    
  }
}

module.exports = LivroDao;