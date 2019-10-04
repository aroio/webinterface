import FluentSQLite
import Vapor

/// A single entry of a User.
final class User: SQLiteModel {
    
    var id: Int?
    var firstname: String?
    var lastname: String?
    var password: String?
    var email: String?
    
    init(   id: Int? = nil,
            firstname: String? = "",
            lastname: String? = "",
            password: String? = "",
            email: String? = ""
        ) {
        self.id = id
        self.firstname = firstname
        self.lastname = lastname
        self.password = password
        self.email = email
    }
}

extension User: Migration { }
extension User: Content { }
extension User: Parameter { }
