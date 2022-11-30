const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

const randomValidation = () => {
  const min = Math.ceil(0)
  const max = Math.floor(10)

  return !!(Math.floor(Math.random() * (max - min)) + min >= 2)
}
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
// Add custom routes before JSON Server router
server.post('/auth/singIn', (req, res) => {
  const { email, password } = req.body
  if (randomValidation() && email === 'teste@otica.edu.br' && password === '123456') {
    return res.jsonp({
      'jwt': 'asdaswegjsadTOKEN',
      'id': 12,
      'name': 'tess',
      'createdAt': '2022-08-10',
      'roles': ['user', 'aluno'],
    })
  }
  return res.status(401).jsonp({ error: 'Unauthorized' })
})
server.get('/roles/:id', (req, res) => {
  const { id } = req.params
  if (id === '12') {
    return res.jsonp(['user', 'aluno'])
  }
  return res.status(401).jsonp({ error: 'Unauthorized' })
})
server.get('/users', async (req, res) => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  if (!randomValidation()) {
    return res.status(401).jsonp({ error: 'Unauthorized' })
  }
  return res.jsonp([
    // {
    //   'id': 2630,
    //   'name': 'Siddhi Bharadwaj',
    //   'email': 'bharadwaj_siddhi@kulas.name',
    //   'gender': 'male',
    //   'status': 'inactive',
    // },
    // {
    //   'id': 2629,
    //   'name': 'Harinarayan Sinha',
    //   'email': 'sinha_harinarayan@conroy-hilpert.org',
    //   'gender': 'female',
    //   'status': 'inactive',
    // },
    // {
    //   'id': 2628,
    //   'name': 'Kumar Johar LLD',
    //   'email': 'kumar_lld_johar@shields.com',
    //   'gender': 'female',
    //   'status': 'active',
    // },
    // {
    //   'id': 2627,
    //   'name': 'Tarun Kaur',
    //   'email': 'tarun_kaur@hackett.name',
    //   'gender': 'female',
    //   'status': 'active',
    // },
    // {
    //   'id': 2626,
    //   'name': 'Chaanakya Tandon',
    //   'email': 'tandon_chaanakya@schoen.com',
    //   'gender': 'male',
    //   'status': 'active',
    // },
    // {
    //   'id': 2625,
    //   'name': 'Nagabhushanam Kocchar DDS',
    //   'email': 'kocchar_nagabhushanam_dds@jakubowski.org',
    //   'gender': 'female',
    //   'status': 'inactive',
    // },
    // {
    //   'id': 2624,
    //   'name': 'Giriraaj Gandhi I',
    //   'email': 'gandhi_giriraaj_i@gulgowski-oreilly.co',
    //   'gender': 'male',
    //   'status': 'active',
    // },
    // {
    //   'id': 2623,
    //   'name': 'Jitender Pilla JD',
    //   'email': 'pilla_jd_jitender@kub.net',
    //   'gender': 'female',
    //   'status': 'inactive',
    // },
    // {
    //   'id': 2622,
    //   'name': 'Baala Naik',
    //   'email': 'naik_baala@feil-ward.com',
    //   'gender': 'male',
    //   'status': 'inactive',
    // },
    // {
    //   'id': 2621,
    //   'name': 'Adikavi Bhattathiri',
    //   'email': 'bhattathiri_adikavi@schaefer-batz.info',
    //   'gender': 'male',
    //   'status': 'inactive',
    // },
    // {
    //   'id': 2620,
    //   'name': 'Bhamini Naik JD',
    //   'email': 'naik_jd_bhamini@kertzmann-anderson.org',
    //   'gender': 'female',
    //   'status': 'active',
    // },
    // {
    //   'id': 2619,
    //   'name': 'Msgr. Kirti Achari',
    //   'email': 'achari_msgr_kirti@walker.co',
    //   'gender': 'female',
    //   'status': 'active',
    // },
    // {
    //   'id': 2618,
    //   'name': 'Prasad Singh III',
    //   'email': 'iii_singh_prasad@cartwright-stanton.io',
    //   'gender': 'male',
    //   'status': 'active',
    // },
    // {
    //   'id': 2617,
    //   'name': 'Elakshi Kaul Ret.',
    //   'email': 'kaul_ret_elakshi@oberbrunner.name',
    //   'gender': 'male',
    //   'status': 'inactive',
    // },
    // {
    //   'id': 2616,
    //   'name': 'Ghanaanand Mehrotra',
    //   'email': 'ghanaanand_mehrotra@pagac.io',
    //   'gender': 'male',
    //   'status': 'inactive',
    // },
    // {
    //   'id': 2615,
    //   'name': 'Chaaruchandra Dhawan',
    //   'email': 'chaaruchandra_dhawan@swaniawski.co',
    //   'gender': 'female',
    //   'status': 'active',
    // },
    // {
    //   'id': 2614,
    //   'name': 'Suryakantam Nair',
    //   'email': 'nair_suryakantam@cruickshank.org',
    //   'gender': 'male',
    //   'status': 'inactive',
    // },
    // {
    //   'id': 2613,
    //   'name': 'Bhramar Chaturvedi',
    //   'email': 'chaturvedi_bhramar@hane.net',
    //   'gender': 'male',
    //   'status': 'active',
    // },
    // {
    //   'id': 2612,
    //   'name': 'Pres. Siddhran Banerjee',
    //   'email': 'siddhran_banerjee_pres@kuphal.co',
    //   'gender': 'male',
    //   'status': 'inactive',
    // },
    {
      'id': 2611,
      'name': 'Bakula Banerjee',
      'email': 'bakula_banerjee@friesen.biz',
      'gender': 'male',
      'status': 'active',
    },
  ])
})
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})
server.listen(3003, () => {
  console.log('JSON Server is running')
})
