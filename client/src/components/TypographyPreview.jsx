import React from 'react';

const TypographyPreview = () => {
  return (
    <div className="max-w-4xl p-8 mx-auto font-body">
      <h1 className="mb-8 text-5xl font-display">Heading 1 - Montserrat Black 900</h1>
      <h2 className="mb-6 text-4xl font-display">Heading 2 - Montserrat Black 900</h2>
      <h3 className="mb-5 text-3xl font-display">Heading 3 - Montserrat Black 900</h3>
      <h4 className="mb-4 text-2xl font-display">Heading 4 - Montserrat Black 900</h4>
      <h5 className="mb-3 text-xl font-display">Heading 5 - Montserrat Black 900</h5>
      <h6 className="mb-6 text-lg font-display">Heading 6 - Montserrat Black 900</h6>
      
      <div className="prose max-w-none">
        <p className="mb-4 text-lg">
          This is a paragraph of body text using Open Sans. It has a comfortable line height and good readability.
          The quick brown fox jumps over the lazy dog. 1234567890
        </p>
        <p className="mb-4">
          Another paragraph demonstrating the body text. Notice the clean, professional appearance of the Open Sans font.
          The quick brown fox jumps over the lazy dog. 1234567890
        </p>
        <p className="text-sm font-label">
          This is smaller text using Roboto Mono Medium 500 for labels and captions.
        </p>
      </div>
      
      <div className="mt-12">
        <h3 className="mb-4 text-2xl font-display">Text Weights</h3>
        <p className="mb-2 font-normal">Normal weight (400) - The quick brown fox jumps over the lazy dog</p>
        <p className="mb-2 font-medium">Medium weight (500) - The quick brown fox jumps over the lazy dog</p>
        <p className="mb-2 font-semibold">Semi-bold (600) - The quick brown fox jumps over the lazy dog</p>
        <p className="font-bold">Bold (700) - The quick brown fox jumps over the lazy dog</p>
      </div>
    </div>
  );
};

export default TypographyPreview;
