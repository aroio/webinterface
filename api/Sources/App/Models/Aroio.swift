import FluentSQLite
import Vapor

/// A single entry of a Todo list.
final class AroioConfig: SQLiteModel {
    
    var id: Int?
    var updateServer: String?
    var betaServer: String?
    var useBeta: Bool?
    var platform: String?
    var network: NetworkConfig?
    var user: User?
    var logitechMediaServer: LogitechMediaServer?
    
    
    init(   id: Int? = nil,
            updateServer: String?,
            betaServer: String? = "",
            useBeta: Bool? = false,
            platform: String? = "AroioSU",
            network: NetworkConfig? = NetworkConfig.init(),
            user: User? = User.init(),
            logitechMediaServer: LogitechMediaServer? = LogitechMediaServer.init()
        ) {
        self.id = id
        self.updateServer = updateServer
        self.betaServer = betaServer
        self.useBeta = useBeta
        self.platform = platform
        self.network = network
        self.user = user
        self.logitechMediaServer = logitechMediaServer
    }
}

extension AroioConfig: Migration { }

/// Allows `Todo` to be encoded to and decoded from HTTP messages.
extension AroioConfig: Content { }

/// Allows `Todo` to be used as a dynamic parameter in route definitions.
extension AroioConfig: Parameter { }
