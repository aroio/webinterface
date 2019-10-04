import Vapor

/// Register your application's routes here.
public func routes(_ router: Router) throws {
    // Basic "It works" example
    router.get { req in
        return "It works!"
    }
    
    // Basic "Hello, world!" example
    router.get("hello") { req in
        return "Hello, world!"
    }
    // Basic "Hello, world!" example
    router.get("test") { req in
        return "Hello, test!"
    }

    // Example of configuring a controller
    let aroioController = AroioController()
    router.get("aroios", use: aroioController.index)
    router.post("aroios", use: aroioController.create)
    router.delete("aroios", Todo.parameter, use: aroioController.delete)
    
}
