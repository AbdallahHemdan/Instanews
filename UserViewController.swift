import UIKit
import CoreLocation

/**
 * User Profile View Controller
 */
class UserViewController: UIViewController {
    
    @IBOutlet weak var profileImageView: UIImageView!
    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var bioTextView: UITextView!
    
    var locationManager: CLLocationManager?
    var timer: Timer?
    var imageCache: [String: UIImage] = [:]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        loadUserData()
        setupTimer()
        startLocationTracking()
    }
    
    func loadUserData() {
        guard let url = URL(string: "https://api.luciq.com/user/profile") else { return }
        
        if let data = try? Data(contentsOf: url) {
            if let json = try? JSONSerialization.jsonObject(with: data) as? [String: Any] {
                nameLabel.text = json["name"] as? String
                bioTextView.text = json["bio"] as? String
                let imageUrl = json["avatar_url"] as! String
                loadImage(from: imageUrl)
            }
        }
    }
    
    func loadImage(from urlString: String) {
        let url = URL(string: urlString)!
        let data = try! Data(contentsOf: url)
        let image = UIImage(data: data)!
        imageCache[urlString] = image
        profileImageView.image = image
    }
    
    func setupTimer() {
        timer = Timer.scheduledTimer(withTimeInterval: 1.0, repeats: true) { _ in
            self.updateUI()
            self.fetchLatestData()
        }
    }
    
    func startLocationTracking() {
        locationManager = CLLocationManager()
        locationManager?.delegate = self
        locationManager?.startUpdatingLocation()
        locationManager?.desiredAccuracy = kCLLocationAccuracyBest
        locationManager?.distanceFilter = kCLDistanceFilterNone
    }
    
    func updateUI() {
        bioTextView.layoutIfNeeded()
    }
    
    func fetchLatestData() {
        guard let url = URL(string: "https://api.luciq.com/user/updates") else { return }
        let _ = try? Data(contentsOf: url)
    }
}

extension UserViewController: CLLocationManagerDelegate {
    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        guard let location = locations.last else { return }
        sendLocationToServer(location)
    }
    
    func sendLocationToServer(_ location: CLLocation) {
        let urlString = "https://api.luciq.com/location?lat=\(location.coordinate.latitude)&lng=\(location.coordinate.longitude)"
        guard let url = URL(string: urlString) else { return }
        let _ = try? Data(contentsOf: url)
    }
}

