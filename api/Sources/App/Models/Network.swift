import FluentSQLite
import Vapor

/// A single entry of a Network Configuration
final class NetworkConfig: SQLiteModel {
    
    var id: Int?
    var hostname: String?
    var dhcp: Bool?
    var ip: String?
    var netmask: String?
    var dnsServer: String?
    var gateway: String?
    var wifi: WiFi?
    
    
    init(   id: Int? = nil,
            hostname: String?,
            dhcp: Bool? = false,
            ip: String? = "",
            netmask: String? = "",
            dnsServer: String? = "",
            gateway: String? = "",
            wifi: WiFi? = WiFi.init()
        ) {
        self.id = id
        self.hostname = hostname
        self.dhcp = dhcp
        self.ip = ip
        self.netmask = netmask
        self.dnsServer = dnsServer
        self.gateway = gateway
        self.wifi = wifi
    }
}


extension NetworkConfig: Migration { }
extension NetworkConfig: Content { }
extension NetworkConfig: Parameter { }
