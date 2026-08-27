import React, { useState } from "react";
import "./Paintings.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const paintingsData = [
  { id: 7, category: "charcoal", name: "Bad at Love", description: "A charcoal drawing of a woman underwater with emotions", src: require("../assets/charcoal2.jpeg") },
  { id: 8, category: "watercolor", name: "Scenery painting", description: "A watercolor landscape painting", src: require("../assets/watercolor2.jpeg") },
  { id: 9, category: "acrylic", name: "Scenery painting", description: "An Acrylic landscape painting", src: require("../assets/acrylic2.jpeg") },
  { id: 10, category: "digital", name: "Yes Eyes!", description: "Digital Art of an eye ball", src: require("../assets/digital2.jpeg") },
  { id: 11, category: "acrylic", name: "Where have you been?", description: "An Acrylic painting of a sunset", src: require("../assets/acrylic3.jpeg") },
  { id: 12, category: "acrylic", name: "Acrylic Scenery painting", description: "An Acrylic painting of a forest", src: require("../assets/acrylic4.jpeg") },
  { id: 1, category: "charcoal", name: "Charcoal Drawing", description: "Portrait art", src: require("../assets/charcoal1.jpeg") },
  { id: 2, category: "watercolor", name: "Holding Breath", description: "Watercolor painting inspired by human emotions", src: require("../assets/watercolor1.jpeg") },
  { id: 3, category: "acrylic", name: "Summer in Autumn", description: "Acrylic landscape scenery", src: require("../assets/acrylic1.jpeg") },
  { id: 4, category: "digital", name: "Sapphire moonlight", description: "Digital art of the Canadian singer, Shawn Mendes", src: require("../assets/digital1.png") },
  { id: 5, category: "cards", name: "Spark and Shine, it's Christmastime", description: "Handmade card with watercolor for Christmas", src: require("../assets/card1.jpeg") },
  { id: 6, category: "mixed medium", name: "Eyes", description: "An eye painting using Charcoal and Watercolor", src: require("../assets/mm1.jpeg") },
  { id: 13, category: "textured art", name: "Who am I to you?", description: "A Textured Art of sun rays", src: require("../assets/tt1.jpeg") },
  { id: 14, category: "cards", name: "Birthday Card", description: "A birthday card with a watercolor painting of flowers", src: require("../assets/card2.jpeg") },
  { id: 15, category: "acrylic", name: "Landscape painting", description: "An Acrylic painting of a sunset", src: require("../assets/acrylic5.jpeg") },
  { id: 16, category: "watercolor", name: "Don't tease me", description: "A watercolor painting of a woman with emotions", src: require("../assets/watercolor3.jpeg") },
  { id: 17, category: "acrylic", name: "Sally and Lily", description: "An Acrylic painting of two lovely pets", src: require("../assets/acrylic6.jpeg") },
  { id: 18, category: "oil painting", name: "Heaven", description: "An Oil Painting of Jesus Christ", src: require("../assets/op1.jpeg") },
  { id: 19, category: "oil painting", name: "Oil Paintings", description: "An Oil Painting of the ocean", src: require("../assets/op2.jpeg") },
  { id: 20, category: "cards", name: "Anniversary Cards", description: "Handmade card with Acrylic Painting for anniversary", src: require("../assets/card3.jpeg") },
  { id: 21, category: "cards", name: "Birthday card for mom", description: "Handmade card with Acrylic for Mom", src: require("../assets/card4.jpeg") },
  { id: 22, category: "cards", name: "Christmas Greetings", description: "Handmade card with watercolor for Christmas", src: require("../assets/card5.jpeg") },
  { id: 23, category: "cards", name: "Mother's Day Card", description: "Handmade card with watercolor for Mom", src: require("../assets/card6.jpeg") },
  { id: 24, category: "cards", name: "Father's Day Card", description: "Handmade card with watercolor for Dad", src: require("../assets/card7.jpeg") },
  { id: 25, category: "acrylic", name: "Scenery Painting on a log", description: "An Acrylic landscape painting", src: require("../assets/acrylic9.jpeg") },
  { id: 26, category: "acrylic", name: "Serendib Scops Owl", description: "An Acrylic scenery painting of Serendib Scops Owls", src: require("../assets/acrylic7.jpeg") },
  { id: 27, category: "acrylic", name: "Sri Lanka Dull Blue Flycatcher", description: "An Acrylic scenery painting of Sri Lanka Dull Blue Flycatchers", src: require("../assets/acrylic8.jpeg") },
  { id: 28, category: "mixed medium", name: "When your head's being drowned underwater", description: "A mix of charcoal painting and digital art", src: require("../assets/mm2.jpeg") },
  { id: 29, category: "digital", name: "Smiling Jesus", description: "Digital art of smiling Jesus", src: require("../assets/digital3.jpeg") },
  { id: 30, category: "charcoal", name: "Boy from Venus", description: "Portrait art", src: require("../assets/charcoal3.jpeg") },
  { id: 31, category: "charcoal", name: "Smiling Jesus", description: "Pencil art of smiling Jesus", src: require("../assets/charcoal4.jpeg") },
  { id: 32, category: "cards", name: "Mother's Day Card", description: "Handmade card with watercolor for Mom", src: require("../assets/card8.jpeg") },
  { id: 33, category: "acrylic", name: "Sunset through the cave", description: "An Acrylic scenery painting of the sunset", src: require("../assets/acrylic10.jpeg") },
  { id: 34, category: "acrylic", name: "A sunset", description: "An Acrylic scenery painting of the sunset", src: require("../assets/acrylic11.jpeg") },
  { id: 35, category: "mixed medium", name: "Heart on your sleeve like you've never been loved", description: "A mix of charcoal painting and digital art", src: require("../assets/mm3.jpeg") },
  { id: 36, category: "digital", name: "What do you do for love?", description: "Digital art of a Golden Retriever Puppy", src: require("../assets/digital4.jpeg") },
  { id: 37, category: "digital", name: "Cillian Murphy", description: "Digital art of Cillian Murphy", src: require("../assets/digital5.jpeg") },
  { id: 38, category: "cards", name: "Anniversary Card", description: "Handmade card with Acrylic for a couple", src: require("../assets/card9.jpeg") },
  { id: 39, category: "charcoal", name: "I chose crying, over you", description: "Pencil art of an eye with tear drop", src: require("../assets/charcoal5.jpeg") },
  { id: 40, category: "acrylic", name: "At the end, the sun sets", description: "An Acrylic scenery painting of the sunset", src: require("../assets/acrylic12.jpeg") },
  { id: 41, category: "mixed medium", name: "Soul ties", description: "A mix of charcoal painting and acrylic painting", src: require("../assets/mm4.jpeg") },
  { id: 42, category: "mixed medium", name: "Guilt", description: "A mix of charcoal painting and acrylic painting", src: require("../assets/mm5.jpeg") },
  { id: 43, category: "mixed medium", name: "The last smoke", description: "A mix of charcoal painting and acrylic painting", src: require("../assets/mm6.jpeg") },
  { id: 44, category: "charcoal", name: "Ariana Grande", description: "Pencil art of an American Singer, Ariana Grande", src: require("../assets/charcoal6.jpeg") },
];

const categories = ["all", "charcoal", "watercolor", "acrylic", "digital", "cards","mixed medium","oil painting","textured art"];

export default function Paintings() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPainting, setSelectedPainting] = useState(null);

  const filteredPaintings =
    selectedCategory === "all"
      ? paintingsData
      : paintingsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="paintings-page">
      <Navbar />

      {/* ✅ Heading without background */}
      <header className="paintings-header">
        <h1>My Paintings</h1>
      </header>

<nav className="paintings-nav">
  {categories.map((cat, index) => (
    <div
      key={cat}
      className={`nav-item ${selectedCategory === cat ? "active" : ""}`}
      onClick={() => setSelectedCategory(cat)}
    >
      {/* Circular image from bg1..bg6 */}
      <img
        src={require(`../assets/bg${index + 1}.jpeg`)} // bg1.jpeg → all, bg2.jpeg → charcoal, etc.
        alt={cat}
        className="nav-image"
      />
      <span className="nav-label">{cat.toUpperCase()}</span>
    </div>
  ))}
</nav>



      <div className="paintings-gallery">
        {filteredPaintings.map((painting) => (
          <div
            key={painting.id}
            className="painting-card"
            onClick={() => setSelectedPainting(painting)}
          >
            <img src={painting.src} alt={painting.name} />
            <div className="overlay">
              <h3>{painting.name}</h3>
              <p>{painting.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedPainting && (
        <div className="modal" onClick={() => setSelectedPainting(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-left">
              <img src={selectedPainting.src} alt={selectedPainting.name} />
            </div>
            <div className="modal-right">
              <h2 className="modal-title">{selectedPainting.name}</h2>
              <p className="modal-description">{selectedPainting.description}</p>
              <button
                className="close-btn"
                onClick={() => setSelectedPainting(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
