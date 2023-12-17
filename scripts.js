// Initialize the map
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.7128, lng: -74.0060 }, // Default location (New York City)
        zoom: 12, // Zoom level
    });

    // Add a marker for New York City
    const marker = new google.maps.Marker({
        position: { lat: 40.7128, lng: -74.0060 }, // New York City
        map: map,
        title: "New York City",
    });
}
