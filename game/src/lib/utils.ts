export const degreesToRadians = (degrees: number) => {
    return (degrees * Math.PI) / 180;
}

export const velocityByAngle = (velocity: number, radians: number): { x: number, y: number } => {
    console.log(velocity * Math.cos(radians), velocity * Math.sin(radians))
    return { x: velocity * Math.sin(radians), y: velocity * Math.cos(radians) }
}