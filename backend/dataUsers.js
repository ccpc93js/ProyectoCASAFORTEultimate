import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
          name: "casaforte",
          email:"ferreteriacasaforte@gmail.com",
          nit:"xxxxxxxxxx",
          password: bcrypt.hashSync('xxxxxxxxx', 8),
          isAdmin: true

        }
      ],
}

export default data