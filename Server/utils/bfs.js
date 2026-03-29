function findRoute(routes, from, to) {
  // I-build ang graph mula sa routes
  const graph = {}

  routes.forEach(route => {
    if (!graph[route.from]) graph[route.from] = []
    graph[route.from].push(route)
  })

  // BFS setup
  const queue = [[{ stop: from, path: [], totalFare: 0, totalDuration: 0 }]]
  const visited = new Set()

  while (queue.length > 0) {
    const current = queue.shift()
    const lastStep = current[current.length - 1]
    const currentStop = lastStep.stop

    // Nahanap na ang destination!
    if (currentStop === to) {
      return {
        found: true,
        path: lastStep.path,
        totalFare: lastStep.totalFare,
        totalDuration: lastStep.totalDuration
      }
    }

    // Skip kung na-visit na
    if (visited.has(currentStop)) continue
    visited.add(currentStop)

    // I-explore ang mga karatig na stops
    const neighbors = graph[currentStop] || []
    neighbors.forEach(route => {
      if (!visited.has(route.to)) {
        queue.push([{
          stop: route.to,
          path: [...lastStep.path, {
            from: route.from,
            to: route.to,
            transport: route.transport,
            fare: route.fare,
            duration: route.duration,
            code: route.code
          }],
          totalFare: lastStep.totalFare + route.fare,
          totalDuration: lastStep.totalDuration + route.duration
        }])
      }
    })
  }

  // Walang nahanap
  return { found: false, path: [], totalFare: 0, totalDuration: 0 }
}

module.exports = findRoute