"use client";
import { useRef, useEffect } from "react";

type GoogleMapProps = {
  apiKey: string;
};

const customStyle: google.maps.MapTypeStyle[] = [
  {
    elementType: "geometry",
    stylers: [{ color: "#f5f5f5" }],
  },
  {
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#616161" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#f5f5f5" }],
  },
  {
    featureType: "poi",
    stylers: [{ visibility: "simplified" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#e5e5e5" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#dadada" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#c9c9c9" }],
  },
];

export const GoogleMap: React.FC<GoogleMapProps> = ({ apiKey }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const initMap = () => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: 49.8609863, lng: 24.0508318 }, // from your iframe
          zoom: 15,
          disableDefaultUI: true, // removes ALL UI
          zoomControl: true, // add back zoom buttons (optional)
          styles: customStyle,
        });

        new google.maps.Marker({
          position: { lat: 49.8609863, lng: 24.0508318 },
          map,
          animation: google.maps.Animation.DROP, // or BOUNCE
          icon: {
            url: "/icons/MapPin.svg", // path to your image
            scaledSize: new google.maps.Size(40, 40), // resize
            anchor: new google.maps.Point(20, 40), // move "tip" of pin to bottom center
          },
        });
      }
    };

    // Load Google Maps script if not already loaded
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.body.appendChild(script);
    } else {
      initMap();
    }
  }, [apiKey]);

  return (
    <div
      ref={mapRef}
      style={{ height: "450px", width: "100%", borderRadius: "12px" }}
    />
  );
};
