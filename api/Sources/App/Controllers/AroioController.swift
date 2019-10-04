import Vapor


final class AroioController {
    
    func index(_ req: Request) throws -> Future<[AroioConfig]> {
        return AroioConfig.query(on: req).all()
    }
    
    func create(_ req: Request) throws -> Future<AroioConfig> {
        return try req.content.decode(AroioConfig.self).flatMap { aroio in
            return aroio.save(on: req)
        }
    }
    
    func delete(_ req: Request) throws -> Future<HTTPStatus> {
        return try req.parameters.next(AroioConfig.self).flatMap { aroio in
            return aroio.delete(on: req)
            }.transform(to: .ok)
    }
}
