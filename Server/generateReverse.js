const fs = require('fs')
const routes = require("./data/routes.json")

const reversed = routes.map(route => ({
    from: route.to,
    to: route.from,
    transport: route.transport,
    fare: route.fare,
    duration: route.duration,
    code: route.code
}))

const combined = [...routes, ...reversed]

fs.writeFileSync("./data/routes.json", JSON.stringify(combined, null, 2))
console.log('✅ Done! Original routes:', routes.length)
console.log('✅ With reverse:', combined.length)