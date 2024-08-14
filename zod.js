
const zod = require("zod")

function inputCheck(obj){
  const schema  = zod.object({
    email : zod.string().email(),
    password : zod.string().min(8)
  })

  const response = schema.safeParse(obj)
  console.log(response)
}

// inputCheck([1,2,3])
inputCheck({
  email : "navinvenkatv@gmail.com",
  password : "12345678910"
})
