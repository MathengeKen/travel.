import React from "react";
import amalfi from "../Assets/amalfi.jpeg";
import bora from "../Assets/bora.jpeg";
import sydney from "../Assets/sydney.jpg";
import tokyo from "../Assets/tokyo.jpeg";
import york from "../Assets/york.jpeg";

const Data = [
  {
    id: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1663583513676-9f6361cd859d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    destTitle: "Bora Bora",
    location: "French Polynesia",
    grade: "Luxury",
    fees: "$5,000",
    description:
      "Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia. It's known for its luxurious overwater bungalows, crystal clear waters, and stunning coral reefs."
  },
  {
    id: 2,
    imgSrc:
      "https://images.unsplash.com/photo-1663530294185-5af3692326c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80",
    destTitle: "Tokyo",
    location: "Japan",
    grade: "Cultural",
    fees: "$1,500",
    description:
      "Tokyo is a vibrant city that seamlessly blends ancient traditions with modern technology. From the towering skyscrapers of Shinjuku to the serene temples of Asakusa, there's something for everyone in Tokyo."
  },
  {
    id: 3,
    imgSrc:
      "https://images.unsplash.com/photo-1663579111009-863bc978c78e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    destTitle: "New York",
    location: "USA",
    grade: "Urban",
    fees: "$2,000",
    description:
      "New York City is the ultimate urban destination, with its towering skyscrapers, world-class museums, and vibrant neighborhoods. From the bright lights of Times Square to the tranquility of Central Park, there's always something new to discover in the Big Apple."
  },
  {
    id: 4,
    imgSrc:
      "https://images.unsplash.com/photo-1663492412083-17bfcad3c533?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    destTitle: "Amalfi Coast",
    location: "Italy",
    grade: "Romantic",
    fees: "$3,500",
    description:
      "The Amalfi Coast is a breathtakingly beautiful stretch of coastline in southern Italy, known for its colorful villages, dramatic cliffs, and turquoise waters. It's the perfect destination for a romantic getaway or a relaxing vacation."
  },
  {
    id: 5,
    imgSrc:
      "https://images.unsplash.com/photo-1663571473113-d3fc49bbe775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80",
    destTitle: "Sydney",
    location: "Australia",
    grade: "Coastal",
    fees: "$2,500",
    description:
      "Sydney is a vibrant coastal city that's known for its iconic landmarks, beautiful beaches, and lively culture. From the stunning views of the Sydney Opera House and Harbour Bridge to the trendy cafes and bars of Bondi Beach, there's never a dull moment in Sydney."
  }
];

export default Data;
