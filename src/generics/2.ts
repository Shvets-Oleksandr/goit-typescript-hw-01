type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare<T extends 'name' | 'color', U extends 'position' | 'weight'>(
  top: Pick<AllType, T>,
  bottom: Pick<AllType, U>
): AllType {
  return {
    name: (top as Pick<AllType, 'name'>).name,
    color: (top as Pick<AllType, 'color'>).color,
    position: (bottom as Pick<AllType, 'position'>).position,
    weight: (bottom as Pick<AllType, 'weight'>).weight,
  };
}