// AdSense placeholder component
export default function AdSlot({ slot, size = 'banner', className = '' }) {
  const sizeClasses = {
    banner: 'min-h-[90px]',
    rectangle: 'min-h-[250px]',
    'in-article': 'min-h-[280px]',
    leaderboard: 'min-h-[90px] md:min-h-[90px]'
  };

  return (
    <div className={`adsense-placeholder ${sizeClasses[size]} ${className}`}>
      <div className="text-center">
        <span className="text-xs text-[var(--color-on-surface-variant)] uppercase tracking-wider">
          Advertisement
        </span>
        {/* 
        ========================================
        REPLACE WITH ACTUAL ADSENSE CODE:
        <ins className="adsbygoogle"
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot={slot}
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        ========================================
        */}
        <div className="mt-2 text-sm text-[var(--color-outline)]">
          Ad Slot: {slot}
        </div>
      </div>
    </div>
  );
}
