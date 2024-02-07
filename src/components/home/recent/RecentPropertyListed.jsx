import React, { useState } from 'react';
import Gallery from './Gallery';

const RecentPropertyList = () => {
  const [showAllGalleries, setShowAllGalleries] = useState(false);

  const handleShowToggleClick = () => {
    setShowAllGalleries(!showAllGalleries);
  };

  return (
    <div>
      <Gallery
        title="Modular Kitchen"
        images={[
          "../newinages/kitchen1.jpeg",
          "../newinages/kitchen2.jpeg",
          "../newinages/kitchen1.jpeg",
          "../newinages/kichen1.jpeg",
          "../newinages/modulark.jpeg",
          "../newinages/WhatsApp Image 2023-10-11 at 6.19.25 AM.jpeg",
        ]}
      />
      <Gallery
        title="Bedroom"
        images={[
          "../newinages/bed.jpeg",
          "../newinages/bedromm1.jpeg",
          "../newinages/bedroom.jpeg",
          "../newinages/WhatsApp Image 2023-10-11 at 6.19.39 AM.jpeg",
          "../newinages/WhatsApp Image 2023-10-11 at 6.19.54 AM.jpeg",
          "../newinages/WhatsApp Image 2023-10-11 at 6.19.55 AM (2).jpeg",
        ]}
      />

      {/* Render only the first two galleries if not showing all */}
      {/* <button onClick={handleShowToggleClick}>
        {showAllGalleries ? 'Show Less' : 'Show More'}
      </button> */}

      {/* Render all galleries if showing all */}
      {showAllGalleries && (
        <>
          <Gallery
            title="Living Room"
            images={[
              "../newinages/WhatsApp Image 2023-10-11 at 6.19.38 AM (2).jpeg",
              "../newinages/WhatsApp Image 2023-10-11 at 6.19.29 AM (1).jpeg",
              "../newinages/falseceiling.png",
              "../newinages/WhatsApp Image 2023-10-11 at 6.19.29 AM.jpeg",
              "../newinages/WhatsApp Image 2023-10-11 at 6.19.29 AM (1).jpeg",
              "../newinages/WhatsApp Image 2023-10-11 at 6.19.26 AM.jpeg",
            ]}
          />
          <Gallery
            title="Bathroom"
            images={[
              "../newinages/bathroom1.jpeg",
              "../newinages/4.jpeg",
              "../newinages/5.jpeg",
              "../newinages/kitchen3.jpeg",
              "../newinages/WhatsApp Image 2023-10-11 at 6.19.53 AM (1).jpeg",
              "../newinages/WhatsApp Image 2023-10-11 at 6.19.54 AM (2).jpeg",
            ]}
          />
          <Gallery
            title="Space Saving Furniture"
            images={[
              "../newinages/WhatsApp Image 2023-10-11 at 6.19.45 AM (3).jpeg",
              "../newinages/WhatsApp Image 2023-10-11 at 6.19.45 AM (2).jpeg",
              "../newinages/WhatsApp Image 2023-10-11 at 6.19.35 AM.jpeg",
              "../newinages/WhatsApp Image 2023-10-11 at 6.19.31 AM (1).jpeg",
              "../newinages/WhatsApp Image 2023-10-11 at 6.19.29 AM (2).jpeg",
              "../newinages/WhatsApp Image 2023-10-11 at 6.19.27 AM (2).jpeg",
            ]}
          />
          <Gallery
            title="Wardrobe"
            images={[
              "../newinages/WhatsApp Image 2023-10-11 at 6.19.36 AM (2).jpeg",
              "../newinages/WhatsApp Image 2023-10-11 at 6.19.27 AM (1).jpeg",
              "../newinages/WhatsApp Image 2023-10-11 at 6.19.23 AM.jpeg",
              "../newinages/wardrobe.jpeg",
              "../newinages/WhatsApp Image 2023-10-11 at 6.19.27 AM (2).jpeg",
              "../newinages/WhatsApp Image 2023-10-11 at 6.19.35 AM.jpeg",
            ]}
          />
          {/* Repeat for other sections */}
        </>
      )}
       <button onClick={handleShowToggleClick} style={{marginLeft: "47%", marginBottom:"2%"}}>
        {showAllGalleries ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default RecentPropertyList;
