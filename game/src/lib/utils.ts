export const degreesToRadians = (degrees: number) => {
    return (degrees * Math.PI) / 180;
}

export const velocityByAngle = (velocity: number, radians: number): { x: number, y: number } => {
    return { x: velocity * Math.sin(radians), y: velocity * Math.cos(radians) }
}