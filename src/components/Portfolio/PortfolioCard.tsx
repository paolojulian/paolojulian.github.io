import React from "react"

export interface PortfolioCardProps extends React.HTMLProps<HTMLDivElement> {
  Image: React.ReactNode
}

const PortfolioCard = React.forwardRef<HTMLDivElement, PortfolioCardProps>(
  ({ Image, ...props }, ref) => {
    return (
      <div
        className="relative overflow-hidden h-72 w-96 m-2 bg-sky-50"
        ref={ref}
        {...props}
      >
        <div className="absolute inset-0">{Image}</div>
      </div>
    )
  }
)

export default PortfolioCard
