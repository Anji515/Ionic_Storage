export const calculateBMI = (weight?: number, height?: number) => {
    if (!height || !weight) return undefined
    const heightInMeters = height / 100
    const bmi = weight / (heightInMeters * heightInMeters)
    return parseFloat(bmi.toFixed(2))
  }