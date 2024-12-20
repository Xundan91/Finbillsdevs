
const express = require('express')
const app = express()

app.get('/',function(req :any, res:any){
    res.status(200).json({
        msg : "this is somthing"
    })
    
})
app.listen(8080,()=>{
    console.log("server running on 8080");
    
})

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const owner = await prisma.owner.create({
        data: {
          name: 'John Doe',
          totalBuisness: 5,
          buisnessType: 'Retail',
          GSTnumber: 'GST123456',
          email: 'john.doe@example.com'
        }
      });
      console.dir('Owner created:', owner);

    const allUsers = await prisma.owner.findMany()
    console.log(allUsers)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })