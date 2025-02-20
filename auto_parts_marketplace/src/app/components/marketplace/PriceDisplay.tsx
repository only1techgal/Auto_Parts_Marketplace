// components/marketplace/PriceDisplay.tsx
interface PriceDisplayProps {
  amount: number
  className?: string
  showCents?: boolean
}

export default function PriceDisplay({ 
  amount, 
  className = "", 
  showCents = true 
}: PriceDisplayProps) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: showCents ? 2 : 0,
    maximumFractionDigits: showCents ? 2 : 0,
  })

  return (
    <span className={className}>
      {formatter.format(amount)}
    </span>
  )
}
