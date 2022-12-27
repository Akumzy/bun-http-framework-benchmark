import * as Hapi from "@hapi/hapi"

const server = Hapi.server({
	port: 3000,
	host: "localhost"
})

server.route([
	{
		method: "GET",
		path: "/",
		handler: (request, h) => {
			return "Hello World!"
		}
	},
	{
		method: "POST",
		path: "/json",
		handler: (request, h) => {
			return request.payload
		}
	},
	{
		method: "GET",
		path: "/id/{id}",
		handler: (request, h) => {
			return h
				.response(`${request.params.id} ${request.query.name}`)
				.header("x-powered-by", "benchmark")
		}
	}
])

const init = async () => {
	await server.start()
	console.log(`Server running at: ${server.info.uri}`)
}

process.on("unhandledRejection", (err) => {
	console.log(err)
	process.exit(1)
})
init()
