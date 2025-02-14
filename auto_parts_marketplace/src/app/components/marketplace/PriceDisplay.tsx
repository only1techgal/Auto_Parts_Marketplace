import React from 'react';

interface PriceDisplayProps {
  price: number;
  currency?: string;
  size?: 'sm' | 'md' | 'lg';
  showCents?: boolean;
  onSale?: boolean;
  originalPrice?: number;
}

const PriceDisplay = ({ 
  price, 
  currency = 'ZAR', 
  size = 'md',
  showCents = true,
  onSale = false,
  originalPrice
}: PriceDisplayProps) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl'
  };

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: showCents ? 2 : 0,
      maximumFractionDigits: showCents ? 2 : 0
    }).format(amount);
  };

  const calculateDiscount = () => {
    if (!originalPrice || !onSale) return null;
    const discount = ((originalPrice - price) / originalPrice) * 100;
    return Math.round(discount);
  };

  const discount = calculateDiscount();

  return (
    <div className="flex items-center gap-2">
      <span className={`font-semibold ${sizeClasses[size]} ${onSale ? 'text-red-600' : 'text-gray-900'}`}>
        {formatPrice(price)}
      </span>
      
      {onSale && originalPrice && (
        <>
          <span className={`line-through text-gray-500 ${size === 'lg' ? 'text-base' : 'text-sm'}`}>
            {formatPrice(originalPrice)}
          </span>
          <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-sm">
            -{discount}%
          </span>
        </>
      )}
    </div>
  );
};

export default PriceDisplay;