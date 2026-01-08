import React from 'react';

const TypographyPreview = () => {
  return (
    <div className="max-w-4xl p-8 mx-auto">
      <h1 className="mb-8 text-5xl font-heading">Heading 1 - Oswald Bold</h1>
      <h2 className="mb-6 text-4xl font-heading">Heading 2 - Oswald Semi-Bold</h2>
      <h3 className="mb-5 text-3xl font-heading">Heading 3 - Oswald Semi-Bold</h3>
      <h4 className="mb-4 text-2xl font-heading">Heading 4 - Oswald Semi-Bold</h4>
      <h5 className="mb-3 text-xl">Heading 5 - Oswald Semi-Bold</h5>
      <h6 className="mb-6 text-lg">Heading 6 - Oswald Semi-Bold</h6>
      
      <div className="prose max-w-none">
        <p className="mb-4 text-lg">
          This is a paragraph of body text using Verdana. It has a comfortable line height and good readability.
          The quick brown fox jumps over the lazy dog. 1234567890
        </p>
        <p className="mb-4">
          Another paragraph demonstrating the body text. Notice the clean, professional appearance of the Verdana font.
          The quick brown fox jumps over the lazy dog. 1234567890
        </p>
        <p className="text-sm text-gray-600">
          This is smaller text that might be used for captions or secondary information.
        </p>
      </div>
      
      <div className="mt-12">
        <h3 className="mb-4 text-2xl font-heading">Text Weights</h3>
        <p className="mb-2 font-normal">Normal weight (400) - The quick brown fox jumps over the lazy dog</p>
        <p className="mb-2 font-medium">Medium weight (500) - The quick brown fox jumps over the lazy dog</p>
        <p className="mb-2 font-semibold">Semi-bold (600) - The quick brown fox jumps over the lazy dog</p>
        <p className="font-bold">Bold (700) - The quick brown fox jumps over the lazy dog</p>
      </div>
    </div>
  );
};

export default TypographyPreview;
