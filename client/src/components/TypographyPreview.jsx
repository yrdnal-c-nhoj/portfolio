import React from 'react';

const TypographyPreview = () => {
  return (
    <div className="mx-auto p-8 max-w-4xl font-body">
      <h1 className="mb-8 font-display text-5xl">Heading 1 - Oxanium 500</h1>
      <h2 className="mb-6 font-display text-4xl">Heading 2 - Oxanium 500</h2>
      <h3 className="mb-5 font-display text-3xl">Heading 3 - Oxanium 500</h3>
      <h4 className="mb-4 font-display text-2xl">Heading 4 - Oxanium 500</h4>
      <h5 className="mb-3 font-display text-xl">Heading 5 - Oxanium 500</h5>
      <h6 className="mb-6 font-display text-lg">Heading 6 - Oxanium 500</h6>

      <div className="max-w-none prose">
        <p className="mb-4 text-lg">
          This is a paragraph of body text using Outfit. It has a comfortable line height and good readability.
          The quick brown fox jumps over the lazy dog. 1234567890
        </p>
        <p className="mb-4">
          Another paragraph demonstrating the body text. Notice the clean, professional appearance of the Outfit font.
          The quick brown fox jumps over the lazy dog. 1234567890
        </p>
        <p className="font-label text-sm">
          This is smaller text using Roboto Slab 500 for labels and captions.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="mb-4 font-display text-2xl">Text Weights</h3>
        <p className="mb-2 font-normal">Normal weight (400) - The quick brown fox jumps over the lazy dog</p>
        <p className="mb-2 font-medium">Medium weight (500) - The quick brown fox jumps over the lazy dog</p>
        <p className="mb-2 font-semibold">Semi-bold (600) - The quick brown fox jumps over the lazy dog</p>
        <p className="font-bold">Bold (700) - The quick brown fox jumps over the lazy dog</p>
      </div>
    </div>
  );
};

export default TypographyPreview;
