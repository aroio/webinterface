import FluentSQLite
import Vapor

/// A single entry of a LogitechMediaServer.
final class LogitechMediaServer: SQLiteModel {
    
    var id: Int?
    var serverName: String?
    var playerName: String?
    var player: String?
    var port: String?
    var squeezeUser: User?
    
    init(
        id: Int? = nil,
        serverName: String? = "",
        playerName: String? = "",
        player: String? = "",
        port: String? = "",
        squeezeUser: User? = User.init()
        ) {
        self.id = id
        self.serverName = serverName
        self.playerName = playerName
        self.player = player
        self.port = port
        self.squeezeUser = squeezeUser
    }
}

extension LogitechMediaServer: Migration { }
extension LogitechMediaServer: Content { }
extension LogitechMediaServer: Parameter { }
