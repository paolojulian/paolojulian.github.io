import Typed, { TypedOptions } from 'typed.js'

const TypedInstance = (elementId: any, options: TypedOptions) => {
  return new Typed(elementId, {
    typeSpeed: 50,
    backSpeed: 20,
    loop: true,
    ...options,
  })
}

export default TypedInstance