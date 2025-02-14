// src/components/ui/tooltip.tsx
import React from 'react';

export const TooltipProvider = ({ children}: { children: React.ReactNode}) => (
    <div>{children}</div>
);

export const Tooltip = ({ children}: { children: React.ReactNode}) => (
    <div>{children}</div>
);

export const TooltipTrigger = ({ children}: { children: React.ReactNode}) => (
    <div>{children}</div>
);

export const TooltipContent = ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
);