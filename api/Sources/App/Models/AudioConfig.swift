import FluentSQLite
import Vapor

/// A single entry of a AudioConfig.
final class AudioConfig: SQLiteModel {
    
    var id: Int?
    var rate: String?
    var msCoding: Bool?
    var volume: String?
    var jackBuffer: String?
    var soundcard: String?
    var debug: Bool?
    var loadPrefilter: Bool?
    var brutefir: Bool?

    
    init(
    id: Int? = nil,
    rate: String? = "",
    msCoding: Bool? = true,
    volume: String? = "0 db",
    jackBuffer: String? = "4096",
    soundcard: String? = "",
    debug: Bool? = false,
    loadPrefilter: Bool? = false,
    brutefir: Bool? = false,

        ) {
        self.id = id
        self.rate = rate
        self.msCoding = msCoding
        self.volume = volume
        self.jackBuffer = jackBuffer
        self.soundcard = soundcard
        self.debug = debug
        self.loadPrefilter = loadPrefilter
        self.brutefir = brutefir

    }
}

extension AudioConfig: Migration { }
extension AudioConfig: Content { }
extension AudioConfig: Parameter { }
