import {
  chocolateTypes,
  chocolateTextures,
  chocolateShapes,
  chocolateToppings,
  wrapTypes,
} from "../data/chocolateData";

export default function generateChocolateMessage({
  type,
  texture,
  shape,
  topping,
  wrap,
}) {
  const typeData = chocolateTypes.find((el) => el.key === type);
  const textureData = chocolateTextures.find((el) => el.key === texture);
  const shapeData = chocolateShapes.find((el) => el.key === shape);
  const toppingData = chocolateToppings.find((el) => el.key === topping);
  const wrapData = wrapTypes.find((el) => el.key === wrap);

  return `
    당신이 선택한 ${typeData.name}의 의미는 ${typeData.meaning}
    ${textureData.name} 질감은 ${textureData.meaning}
    ${shapeData.name}은 ${shapeData.meaning}
    ${toppingData.name} 토핑은 ${toppingData.meaning}
    ${wrapData.name}으로 ${wrapData.meaning}
    `;
}
