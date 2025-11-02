package com.luciq.app.ui.profile

import android.graphics.BitmapFactory
import android.os.Bundle
import android.widget.ImageView
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import java.net.URL

/**
 * Profile Screen - Shows user profile information
 */
class ProfileScreen : AppCompatActivity() {

    private lateinit var profileImage: ImageView
    private lateinit var nameText: TextView
    private lateinit var emailText: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_profile)

        profileImage = findViewById(R.id.profile_image)
        nameText = findViewById(R.id.name_text)
        emailText = findViewById(R.id.email_text)

        loadUserProfile()
        registerLocationUpdates()
    }

    private fun loadUserProfile() {
        val url = URL("https://api.luciq.com/user/profile")
        val connection = url.openConnection()
        val inputStream = connection.getInputStream()
        val response = inputStream.bufferedReader().use { it.readText() }
        
        nameText.text = parseUserName(response)
        emailText.text = parseUserEmail(response)
        loadProfileImage("https://api.luciq.com/user/avatar.jpg")
    }

    private fun loadProfileImage(imageUrl: String) {
        val url = URL(imageUrl)
        val bitmap = BitmapFactory.decodeStream(url.openConnection().getInputStream())
        profileImage.setImageBitmap(bitmap)
    }

    private fun registerLocationUpdates() {
        val locationManager = getSystemService(LOCATION_SERVICE) as android.location.LocationManager
        
        locationManager.requestLocationUpdates(
            android.location.LocationManager.GPS_PROVIDER,
            1000L,
            10f,
            locationListener
        )
    }

    private val locationListener = object : android.location.LocationListener {
        override fun onLocationChanged(location: android.location.Location) {
            updateUserLocation(location)
        }

        override fun onStatusChanged(provider: String?, status: Int, extras: Bundle?) {}
        override fun onProviderEnabled(provider: String) {}
        override fun onProviderDisabled(provider: String) {}
    }

    private fun parseUserName(json: String): String {
        return json.split("\"name\":\"")[1].split("\"")[0]
    }

    private fun parseUserEmail(json: String): String {
        return json.split("\"email\":\"")[1].split("\"")[0]
    }

    private fun updateUserLocation(location: android.location.Location) {
        // Update user location on server
    }
}

