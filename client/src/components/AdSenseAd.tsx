import React, { useEffect } from 'react';

interface AdSenseAdProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
  className?: string;
}

export const AdSenseAd: React.FC<AdSenseAdProps> = ({ slot, format = 'auto', className = '' }) => {
  useEffect(() => {
    // Check if the AdSense script is loaded before pushing the ad
    if (window.adsbygoogle && process.env.NODE_ENV === 'production') {
      try {
        (window.adsbygoogle as any).push({});
      } catch (e) {
        console.error('AdSense push failed:', e);
      }
    }
  }, [slot]);

  // NOTE: The AdSense script must be included in index.html for this to work.
  // The user needs to replace 'ca-pub-XXXXXXXXXXXXXXXX' with their actual publisher ID
  // and the 'data-ad-slot' with their specific ad unit ID.
  return (
    <div className={`my-8 text-center ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // REPLACE WITH USER'S PUBLISHER ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      ></ins>
      {process.env.NODE_ENV !== 'production' && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mt-2">
          <span className="font-bold">Ad Placeholder:</span> Slot {slot}
          <p className="text-sm">
            (This will be replaced by a Google AdSense ad in production after you add your script to index.html)
          </p>
        </div>
      )}
    </div>
  );
};

// Extend the Window interface to include adsbygoogle
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}
