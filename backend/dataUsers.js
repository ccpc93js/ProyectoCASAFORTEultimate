import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
          name: "casaforte",
          email:"ferreteriacasaforte@gmail.com",
          nit:"934893929",
          password: bcrypt.hashSync('casaforte2525', 8),
          isAdmin: true

        }
      ],
}

export default data