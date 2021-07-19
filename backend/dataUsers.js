import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
          name: "gerencia@casa-forte.co",
          email:"ferreteriacasaforte@gmail.com",
          nit:"900816981",
          password: bcrypt.hashSync('casaforte2525', 8),
          isAdmin: true

        }
      ],
}

export default data