import React from 'react'
type BoxOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary'
    children: React.ReactNode
    as?: E
}

type BoxProps<E extends React.ElementType> = BoxOwnProps<E> & Omit<React.ComponentProps<E>, keyof BoxOwnProps<E>>

export const CustomBox = <E extends React.ElementType>({ size, color, children, as }: BoxProps<E>) => {
    const CustomBox = as || 'div'
    return (
        <CustomBox className={`class-with${size}-${color}`}>{children}</CustomBox>
    )
}
