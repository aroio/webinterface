import FluentSQLite
import Vapor

final class WiFi: SQLiteModel {
    
    var id: Int?
    var ssid: String?
    var password: String?
    
    init(   id: Int? = nil,
            ssid: String?,
            password: String? = ""
        ){
        self.id = id
        self.ssid = ssid
        self.password = password
    }
}

extension WiFi: Migration { }
extension WiFi: Content { }
extension WiFi: Parameter { }
